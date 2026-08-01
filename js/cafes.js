import { loadData, onLangChange } from "./app.js";
import { UI, t, tag, getLang } from "./i18n.js";
import { tagPill, priceDots, placeImage, buildNeighborhoodFilter, emptyState, escapeHtml } from "./render-helpers.js";

const grid = document.querySelector("[data-cafe-grid]");
const neighborhoodFilterEl = document.querySelector("[data-neighborhood-filter]");

let cafes = [];
let activeNeighborhood = "";

function cardHtml(cafe, lang) {
  return `
    <article class="overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:border-clay-300 hover:shadow-sm">
      ${placeImage(cafe, cafe.name)}
      <div class="p-5 sm:p-6">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-medium leading-snug text-stone-900">${escapeHtml(cafe.name)}</h3>
            <p class="mt-0.5 text-sm text-stone-500">${escapeHtml(cafe.neighborhood)} &middot; ${priceDots(cafe.priceLevel)}</p>
          </div>
          <span class="shrink-0 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600">${escapeHtml(t(UI.quietLevels[cafe.quietLevel], lang))}</span>
        </div>
        <p class="mt-3 text-sm leading-relaxed text-stone-600">${escapeHtml(t(cafe.description, lang))}</p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          ${cafe.tags.map((tg) => tagPill(tg, lang)).join("")}
        </div>
        <div class="mt-4 flex items-center justify-between border-t border-stone-100 pt-3 text-xs text-stone-500">
          <span>${escapeHtml(t(UI.labels.hours, lang))}: ${escapeHtml(t(cafe.hours, lang))}</span>
          ${cafe.workFriendly ? `<span class="font-medium text-clay-600">${escapeHtml(t(UI.labels.workFriendly, lang))} &check;</span>` : ""}
        </div>
      </div>
    </article>
  `;
}

function render() {
  const lang = getLang();
  const filtered = cafes.filter((c) => !activeNeighborhood || c.neighborhood === activeNeighborhood);
  if (!filtered.length) {
    emptyState(grid, lang);
    return;
  }
  grid.innerHTML = filtered.map((c) => cardHtml(c, lang)).join("");
}

async function init() {
  cafes = await loadData("data/cafes.json");
  buildNeighborhoodFilter(neighborhoodFilterEl, cafes, (value) => {
    activeNeighborhood = value;
    render();
  });
  render();
}

onLangChange(render);
init();
