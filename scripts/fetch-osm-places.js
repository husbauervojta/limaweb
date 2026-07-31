// Fetches real cafés and restaurants from OpenStreetMap (Overpass API) for
// Miraflores, Barranco, San Isidro, and Surquillo, and writes "candidate"
// JSON files. These are raw facts only (name, address, coordinates, hours
// when tagged) — NOT wired into the live site. Review and hand-pick entries
// into data/cafes.json / data/food.json yourself, writing the curated
// description/tags for each one you keep.
//
// Usage: node scripts/fetch-osm-places.js

const OVERPASS_URL = "https://overpass-api.de/api/interpreter";

// Rough bounding box covering Miraflores, Barranco, San Isidro, Surquillo.
const BBOX = { south: -12.16, west: -77.055, north: -12.08, east: -76.99 };

// Approximate per-district boxes used only to guess a neighborhood when OSM
// doesn't tag one directly. Rough — spot-check before publishing.
const DISTRICTS = [
  { name: "Barranco", south: -12.155, west: -77.035, north: -12.135, east: -77.015 },
  { name: "Miraflores", south: -12.14, west: -77.045, north: -12.095, east: -77.015 },
  { name: "San Isidro", south: -12.11, west: -77.05, north: -12.085, east: -77.025 },
  { name: "Surquillo", south: -12.12, west: -77.02, north: -12.1, east: -77.0 }
];

function guessNeighborhood(lat, lon, tags) {
  if (tags["addr:suburb"]) return tags["addr:suburb"];
  const hit = DISTRICTS.find((d) => lat >= d.south && lat <= d.north && lon >= d.west && lon <= d.east);
  return hit ? hit.name : "Lima";
}

function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function fetchOverpass(amenity, retries = 3) {
  const { south, west, north, east } = BBOX;
  const query = `
    [out:json][timeout:60];
    (
      node["amenity"="${amenity}"](${south},${west},${north},${east});
      way["amenity"="${amenity}"](${south},${west},${north},${east});
    );
    out center tags;
  `;
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(OVERPASS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "lima-site-data-fetch/1.0 (static site build script)",
        "Accept": "*/*"
      },
      body: `data=${encodeURIComponent(query)}`
    });
    if (res.ok) {
      const data = await res.json();
      return data.elements;
    }
    const bodyText = await res.text();
    if (attempt === retries) {
      throw new Error(`Overpass request failed: ${res.status} ${bodyText}`);
    }
    console.log(`  attempt ${attempt} failed (${res.status}), retrying in 10s...`);
    await new Promise((r) => setTimeout(r, 10000));
  }
}

function elementToCandidate(el, category) {
  const tags = el.tags || {};
  const name = tags.name;
  if (!name) return null;

  const lat = el.type === "node" ? el.lat : el.center?.lat;
  const lon = el.type === "node" ? el.lon : el.center?.lon;
  if (lat == null || lon == null) return null;

  const streetParts = [tags["addr:street"], tags["addr:housenumber"]].filter(Boolean);

  return {
    id: `${category}-osm-${el.type}-${el.id}-${slugify(name)}`,
    name,
    neighborhood: guessNeighborhood(lat, lon, tags),
    address: streetParts.length ? streetParts.join(" ") : null,
    coordinates: { lat, lon },
    openingHoursRaw: tags.opening_hours || null,
    website: tags.website || tags["contact:website"] || null,
    phone: tags.phone || tags["contact:phone"] || null,
    cuisine: tags.cuisine || null,
    outdoorSeating: tags.outdoor_seating === "yes",
    source: `https://www.openstreetmap.org/${el.type}/${el.id}`,
    verified: false,
    description: { es: "", en: "" },
    tags: []
  };
}

async function run() {
  const jobs = [
    { amenity: "cafe", category: "cafes" },
    { amenity: "restaurant", category: "food" }
  ];

  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const outDir = path.default.join(import.meta.dirname, "..", "data", "candidates");
  await fs.mkdir(outDir, { recursive: true });

  for (const { amenity, category } of jobs) {
    console.log(`Fetching amenity=${amenity} from Overpass...`);
    const elements = await fetchOverpass(amenity);
    const candidates = elements
      .map((el) => elementToCandidate(el, category))
      .filter(Boolean)
      .sort((a, b) => a.name.localeCompare(b.name));

    const outPath = path.default.join(outDir, `${category}-osm.json`);
    await fs.writeFile(outPath, JSON.stringify(candidates, null, 2) + "\n", "utf-8");
    console.log(`  -> ${candidates.length} named ${category} written to ${path.default.relative(process.cwd(), outPath)}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
