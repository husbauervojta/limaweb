// Fetches one real photo per place (from data/cafes.json and data/food.json)
// via the Google Places API (New), downloads it into images/places/, and
// writes a "photo" field back into the JSON pointing at the local file.
//
// Requires GOOGLE_PLACES_API_KEY, either as an env var or in a gitignored
// .env.local file at the project root (KEY=VALUE per line).
//
// Usage: node scripts/fetch-place-photos.js [--force]
//   --force  re-fetch photos even for places that already have one

import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..");
const IMAGES_DIR = path.join(ROOT, "images", "places");
const DATA_FILES = ["data/cafes.json", "data/food.json"];
const FORCE = process.argv.includes("--force");
const REQUEST_DELAY_MS = 350;

function loadDotEnvLocal() {
  const envPath = path.join(ROOT, ".env.local");
  return fs
    .readFile(envPath, "utf-8")
    .then((content) => {
      for (const line of content.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eq = trimmed.indexOf("=");
        if (eq === -1) continue;
        const key = trimmed.slice(0, eq).trim();
        const value = trimmed.slice(eq + 1).trim();
        if (!(key in process.env)) process.env[key] = value;
      }
    })
    .catch(() => {});
}

function slugForFile(id) {
  return id.replace(/[^a-z0-9-]/gi, "-");
}

async function findPlacePhoto(apiKey, query) {
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id,places.displayName,places.photos"
    },
    body: JSON.stringify({ textQuery: query, maxResultCount: 1 })
  });
  if (!res.ok) {
    throw new Error(`searchText failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  const place = data.places?.[0];
  const photoName = place?.photos?.[0]?.name;
  return photoName || null;
}

async function downloadPhoto(apiKey, photoName, outPath) {
  const url = `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=800&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`photo media failed: ${res.status} ${await res.text()}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(outPath, buffer);
}

async function run() {
  await loadDotEnvLocal();
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.error("Missing GOOGLE_PLACES_API_KEY (set it in .env.local or the environment).");
    process.exit(1);
  }

  await fs.mkdir(IMAGES_DIR, { recursive: true });

  let fetched = 0;
  let skipped = 0;
  let failed = 0;

  for (const relPath of DATA_FILES) {
    const filePath = path.join(ROOT, relPath);
    const places = JSON.parse(await fs.readFile(filePath, "utf-8"));
    let changed = false;

    for (const place of places) {
      if (place.photo && !FORCE) {
        skipped++;
        continue;
      }

      const query = `${place.name}, ${place.neighborhood}, Lima, Peru`;
      try {
        const photoName = await findPlacePhoto(apiKey, query);
        if (!photoName) {
          console.warn(`  no photo found for "${place.name}"`);
          failed++;
          continue;
        }
        const fileName = `${slugForFile(place.id)}.jpg`;
        await downloadPhoto(apiKey, photoName, path.join(IMAGES_DIR, fileName));
        place.photo = `images/places/${fileName}`;
        changed = true;
        fetched++;
        console.log(`  ✓ ${place.name}`);
      } catch (err) {
        console.warn(`  ✗ ${place.name}: ${err.message}`);
        failed++;
      }
      await new Promise((r) => setTimeout(r, REQUEST_DELAY_MS));
    }

    if (changed) {
      await fs.writeFile(filePath, JSON.stringify(places, null, 2) + "\n", "utf-8");
    }
  }

  console.log(`\nDone. Fetched: ${fetched}, skipped (already had photo): ${skipped}, failed: ${failed}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
