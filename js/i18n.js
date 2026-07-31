// Bilingual (ES/EN) dictionary for UI copy and data labels.
// Language preference is stored in localStorage and defaults to the browser language.

export const DEFAULT_LANG = "es";

export const UI = {
  brand: { es: "Lima.", en: "Lima." },
  tagline: {
    es: "Lo que le falta a Lima: dónde trabajar, comer y respirar bien.",
    en: "What Lima's been missing: where to work, eat, and breathe well."
  },
  nav: {
    home: { es: "Inicio", en: "Home" },
    cafes: { es: "Cafés", en: "Cafés" },
    food: { es: "Comida", en: "Food" },
    spots: { es: "Lugares", en: "Spots" },
    events: { es: "Eventos", en: "Events" }
  },
  home: {
    heroTitle: { es: "Lima, tal como la recomendamos", en: "Lima, the way we'd recommend it" },
    heroSubtitle: {
      es: "Una guía curada de cafés para trabajar, comida sin trampas turísticas y rincones que casi nadie te cuenta. Hecha para locales, extranjeros y todos los que quieren vivir la ciudad de verdad.",
      en: "A curated guide to work-friendly cafés, food without tourist traps, and corners almost no one tells you about. Built for locals, foreigners, and anyone who wants to actually live the city."
    },
    exploreCafes: { es: "Explorar cafés", en: "Explore cafés" },
    exploreSpots: { es: "Ver lugares", en: "See spots" },
    sectionCafesTitle: { es: "Cafés para trabajar", en: "Work-friendly cafés" },
    sectionCafesSubtitle: { es: "Wifi confiable, buen ambiente, sin ruido.", en: "Reliable wifi, good atmosphere, low noise." },
    sectionFoodTitle: { es: "Comida de verdad", en: "Real food" },
    sectionFoodSubtitle: { es: "Sitios que frecuentan los limeños, no las guías turísticas.", en: "Places locals actually go, not the tour guides." },
    sectionSpotsTitle: { es: "Rincones y atardeceres", en: "Corners and sunsets" },
    sectionSpotsSubtitle: { es: "Diseño, arquitectura y vistas que vale la pena buscar.", en: "Design, architecture, and views worth seeking out." },
    viewAll: { es: "Ver todo", en: "View all" }
  },
  filters: {
    neighborhood: { es: "Distrito", en: "Neighborhood" },
    all: { es: "Todos", en: "All" },
    tags: { es: "Filtros", en: "Filters" },
    clear: { es: "Limpiar filtros", en: "Clear filters" },
    noResults: { es: "No se encontraron lugares con estos filtros.", en: "No places match these filters." }
  },
  labels: {
    priceLevel: { es: "Precio", en: "Price" },
    quietLevel: { es: "Nivel de ruido", en: "Noise level" },
    workFriendly: { es: "Apto para trabajar", en: "Good for work" },
    yes: { es: "Sí", en: "Yes" },
    no: { es: "No", en: "No" },
    hours: { es: "Horario", en: "Hours" },
    bestTime: { es: "Mejor momento", en: "Best time" },
    recommendedFor: { es: "Ideal para", en: "Good for" },
    cuisine: { es: "Cocina", en: "Cuisine" }
  },
  quietLevels: {
    low: { es: "Baja", en: "Low" },
    medium: { es: "Media", en: "Medium" },
    high: { es: "Alta", en: "High" }
  },
  events: {
    title: { es: "Eventos y encuentros", en: "Events & meetups" },
    subtitle: { es: "Muy pronto", en: "Coming soon" },
    body: {
      es: "Estamos preparando una sección con ferias, mercados, festivales y encuentros locales en Lima. Vuelve pronto.",
      en: "We're building out a section for markets, festivals, and local meetups in Lima. Check back soon."
    }
  },
  footer: {
    made: { es: "Hecho con cariño para Lima.", en: "Made with care for Lima." },
    dataNote: { es: "Datos abiertos en formato JSON.", en: "Open data in JSON format." }
  }
};

export const TAGS = {
  // cafes
  "fast-wifi": { es: "Wifi rápido", en: "Fast wifi" },
  "quiet-morning": { es: "Tranquilo por la mañana", en: "Quiet mornings" },
  "outdoor-terrace": { es: "Terraza exterior", en: "Outdoor terrace" },
  "plugs": { es: "Enchufes", en: "Power outlets" },
  "roastery": { es: "Tostaduría propia", en: "In-house roastery" },
  "minimalist-interior": { es: "Interior minimalista", en: "Minimalist interior" },
  "business-friendly": { es: "Apto para negocios", en: "Business-friendly" },
  "view": { es: "Vista", en: "View" },
  "bakery": { es: "Panadería", en: "Bakery" },
  "specialty-coffee": { es: "Café de especialidad", en: "Specialty coffee" },
  // recommendedFor (cafes)
  "work": { es: "Trabajar", en: "Work" },
  "first-meeting": { es: "Primera cita", en: "First meeting" },
  "all-day": { es: "Todo el día", en: "All day" },
  "reading": { es: "Leer", en: "Reading" },
  "business-meeting": { es: "Reunión de negocios", en: "Business meeting" },
  "breakfast": { es: "Desayuno", en: "Breakfast" },
  "quick-work": { es: "Trabajo rápido", en: "Quick work" },
  "sunset-after-work": { es: "Atardecer después del trabajo", en: "Sunset after work" },
  // food
  "local-classic": { es: "Clásico local", en: "Local classic" },
  "no-reservation-queue": { es: "Sin reserva (cola)", en: "No reservation (queue)" },
  "family-run": { es: "Negocio familiar", en: "Family-run" },
  "share-plates": { es: "Platos para compartir", en: "Sharing plates" },
  "reservation-recommended": { es: "Reserva recomendada", en: "Reservation recommended" },
  "authentic": { es: "Auténtico", en: "Authentic" },
  "local-favorite": { es: "Favorito local", en: "Local favorite" },
  "great-portions": { es: "Buenas porciones", en: "Great portions" },
  "fresh-fish": { es: "Pescado fresco", en: "Fresh fish" },
  "open-kitchen": { es: "Cocina abierta", en: "Open kitchen" },
  "local-market": { es: "Mercado local", en: "Local market" },
  "cheap": { es: "Económico", en: "Cheap" },
  "special-occasion": { es: "Ocasión especial", en: "Special occasion" },
  "ruins-view": { es: "Vista a las ruinas", en: "Ruins view" },
  "reservation-required": { es: "Reserva obligatoria", en: "Reservation required" },
  // spots
  "sunset": { es: "Atardecer", en: "Sunset" },
  "free": { es: "Gratis", en: "Free" },
  "hidden-gem": { es: "Lugar escondido", en: "Hidden gem" },
  "architecture": { es: "Arquitectura", en: "Architecture" },
  "romantic": { es: "Romántico", en: "Romantic" },
  "design": { es: "Diseño", en: "Design" },
  "gallery": { es: "Galería", en: "Gallery" },
  "ocean-view": { es: "Vista al mar", en: "Ocean view" },
  "paragliding": { es: "Parapente", en: "Paragliding" },
  "street-art": { es: "Arte urbano", en: "Street art" },
  "walk": { es: "Paseo", en: "Walk" },
  "quiet": { es: "Tranquilo", en: "Quiet" },
  "nature": { es: "Naturaleza", en: "Nature" }
};

export const CUISINES = {
  "cevicheria": { es: "Cevichería", en: "Cevichería" },
  "traditional-peruvian": { es: "Peruana tradicional", en: "Traditional Peruvian" },
  "anticucheria-grill": { es: "Anticuchería / parrilla", en: "Anticuchería / grill" },
  "seafood": { es: "Mariscos", en: "Seafood" },
  "market-street-food": { es: "Mercado / comida callejera", en: "Market / street food" },
  "novoandina": { es: "Novoandina", en: "Novoandean" }
};

export const SPOT_TYPES = {
  "sunset": { es: "Atardecer", en: "Sunset" },
  "architecture": { es: "Arquitectura", en: "Architecture" },
  "design": { es: "Diseño", en: "Design" },
  "hidden-gem": { es: "Lugar escondido", en: "Hidden gem" },
  "quiet": { es: "Tranquilo", en: "Quiet" }
};

const STORAGE_KEY = "lima:lang";

export function getLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en") return stored;
  const browserLang = (navigator.language || DEFAULT_LANG).slice(0, 2);
  return browserLang === "en" ? "en" : DEFAULT_LANG;
}

export function setLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
}

export function t(entry, lang = getLang()) {
  if (!entry) return "";
  return entry[lang] ?? entry[DEFAULT_LANG] ?? "";
}

export function tag(key, lang = getLang()) {
  return t(TAGS[key], lang) || key;
}

export function cuisine(key, lang = getLang()) {
  return t(CUISINES[key], lang) || key;
}

export function spotType(key, lang = getLang()) {
  return t(SPOT_TYPES[key], lang) || key;
}
