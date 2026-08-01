import { loadData, onLangChange } from "./app.js";
import { UI, t, cuisine, getLang } from "./i18n.js";
import { tagPill, priceDots, placeImage, buildNeighborhoodFilter, emptyState, escapeHtml } from "./render-helpers.js";

const grid = document.querySelector("[data-food-grid]");
const neighborhoodFilterEl = document.querySelector("[data-neighborhood-filter]");

let places = [];
let activeNeighborhood = "";

function cardHtml(place, lang) {
  return `
    <article class="overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:border-clay-300 hover:shadow-sm">
      ${placeImage(place, place.name)}
      <div class="p-5 sm:p-6">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-medium leading-snug text-stone-900">${escapeHtml(place.name)}</h3>
            <p class="mt-0.5 text-sm text-stone-500">${escapeHtml(place.neighborhood)} &middot; ${priceDots(place.priceLevel)}</p>
          </div>
          <span class="shrink-0 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600">${escapeHtml(cuisine(place.cuisine, lang))}</span>
        </div>
        <p class="mt-3 text-sm leading-relaxed text-stone-600">${escapeHtml(t(place.description, lang))}</p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          ${place.tags.map((tg) => tagPill(tg, lang)).join("")}
        </div>
        <div class="mt-4 border-t border-stone-100 pt-3 text-xs text-stone-500">
          <span>${escapeHtml(t(UI.labels.hours, lang))}: ${escapeHtml(t(place.hours, lang))}</span>
        </div>
      </div>
    </article>
  `;
}

function render() {
  const lang = getLang();
  const filtered = places.filter((p) => !activeNeighborhood || p.neighborhood === activeNeighborhood);
  if (!filtered.length) {
    emptyState(grid, lang);
    return;
  }
  grid.innerHTML = filtered.map((p) => cardHtml(p, lang)).join("");
}

async function init() {
  places = await loadData("data/food.json");
  buildNeighborhoodFilter(neighborhoodFilterEl, places, (value) => {
    activeNeighborhood = value;
    render();
  });
  render();
}

onLangChange(render);
init();
