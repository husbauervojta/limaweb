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
    sport: { es: "Deporte", en: "Sport" },
    events: { es: "Eventos", en: "Events" },
    guides: { es: "Guías", en: "Guides" }
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
    sectionSportTitle: { es: "Moverse en Lima", en: "Get moving in Lima" },
    sectionSportSubtitle: { es: "Correr, surfear y entrenar al aire libre.", en: "Running, surfing, and training outdoors." },
    sectionEventsTitle: { es: "Próximos encuentros", en: "Upcoming meetups" },
    sectionEventsSubtitle: { es: "Ferias, fiestas y encuentros de expats.", en: "Markets, parties, and expat meetups." },
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
    cuisine: { es: "Cocina", en: "Cuisine" },
    frequency: { es: "Frecuencia", en: "Frequency" }
  },
  quietLevels: {
    low: { es: "Baja", en: "Low" },
    medium: { es: "Media", en: "Medium" },
    high: { es: "Alta", en: "High" }
  },
  events: {
    title: { es: "Eventos y encuentros", en: "Events & meetups" },
    subtitle: {
      es: "Ferias, fiestas y encuentros de expats en Lima.",
      en: "Markets, parties, and expat meetups around Lima."
    },
    disclaimer: {
      es: "Datos de muestra recopilados por la comunidad — verifica fechas y horarios antes de ir.",
      en: "Community-sourced sample data — verify dates and times before you go."
    },
    submitCta: { es: "¿Conoces un evento? Sugiérelo", en: "Know an event? Suggest it" }
  },
  sport: {
    title: { es: "Moverse en Lima", en: "Get moving in Lima" },
    subtitle: {
      es: "Correr, surfear, entrenar al aire libre y encontrar tu club.",
      en: "Running, surfing, training outdoors, and finding your club."
    }
  },
  guides: {
    title: { es: "Guías prácticas", en: "Practical guides" },
    subtitle: {
      es: "Lo básico para instalarte en Lima sin sorpresas.",
      en: "The essentials for settling into Lima without surprises."
    },
    disclaimer: {
      es: "Punto de partida general, no asesoría oficial — confirma siempre la información vigente.",
      en: "A general starting point, not official advice — always confirm current information."
    },
    esimTitle: { es: "SIM y datos móviles", en: "SIM & mobile data" },
    safetyTitle: { es: "Seguridad y normas básicas", en: "Safety & ground rules" },
    taxiTitle: { es: "Cómo moverte: taxis y apps", en: "Getting around: taxis & apps" }
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
  "nature": { es: "Naturaleza", en: "Nature" },
  // sport
  "running": { es: "Running", en: "Running" },
  "cycling": { es: "Ciclismo", en: "Cycling" },
  "surfing": { es: "Surf", en: "Surfing" },
  "board-rental": { es: "Alquiler de tablas", en: "Board rental" },
  "beginner-friendly": { es: "Apto para principiantes", en: "Beginner-friendly" },
  "outdoor-fitness": { es: "Fitness al aire libre", en: "Outdoor fitness" },
  "yoga": { es: "Yoga", en: "Yoga" },
  "free-entry": { es: "Entrada libre", en: "Free entry" },
  "shaded": { es: "Con sombra", en: "Shaded" },
  "racquet-sports": { es: "Deportes de raqueta", en: "Racquet sports" },
  "book-ahead": { es: "Reserva con anticipación", en: "Book ahead" },
  "bike-rental": { es: "Alquiler de bicicletas", en: "Bike rental" },
  // events
  "weekly": { es: "Semanal", en: "Weekly" },
  "monthly": { es: "Mensual", en: "Monthly" },
  "seasonal": { es: "Según temporada", en: "Seasonal" },
  "organic-produce": { es: "Productos orgánicos", en: "Organic produce" },
  "crafts": { es: "Artesanía", en: "Crafts" },
  "live-music": { es: "Música en vivo", en: "Live music" },
  "outdoor": { es: "Al aire libre", en: "Outdoor" },
  "language-exchange": { es: "Intercambio de idiomas", en: "Language exchange" },
  "networking": { es: "Networking", en: "Networking" },
  "newcomers-welcome": { es: "Ideal para recién llegados", en: "Great for newcomers" },
  "dancing": { es: "Baile", en: "Dancing" },
  "rooftop": { es: "Terraza / rooftop", en: "Rooftop" }
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

export const SPORT_TYPES = {
  "running": { es: "Running", en: "Running" },
  "surfing": { es: "Surf", en: "Surfing" },
  "outdoor-fitness": { es: "Fitness al aire libre", en: "Outdoor fitness" },
  "racquet-sports": { es: "Deportes de raqueta", en: "Racquet sports" },
  "cycling": { es: "Ciclismo", en: "Cycling" }
};

export const EVENT_TYPES = {
  "market": { es: "Feria / mercado", en: "Market" },
  "festival": { es: "Festival", en: "Festival" },
  "party": { es: "Fiesta", en: "Party" },
  "meetup": { es: "Encuentro de expats", en: "Expat meetup" }
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

export function sportType(key, lang = getLang()) {
  return t(SPORT_TYPES[key], lang) || key;
}

export function eventType(key, lang = getLang()) {
  return t(EVENT_TYPES[key], lang) || key;
}
