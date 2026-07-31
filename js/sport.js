import { loadData, onLangChange } from "./app.js";
import { UI, t, sportType, getLang } from "./i18n.js";
import { tagPill, buildNeighborhoodFilter, emptyState, escapeHtml } from "./render-helpers.js";

const grid = document.querySelector("[data-sport-grid]");
const neighborhoodFilterEl = document.querySelector("[data-neighborhood-filter]");

let sports = [];
let activeNeighborhood = "";

function cardHtml(spot, lang) {
  return `
    <article class="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 transition hover:border-clay-300 hover:shadow-sm">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="text-lg font-medium leading-snug text-stone-900">${escapeHtml(spot.name)}</h3>
          <p class="mt-0.5 text-sm text-stone-500">${escapeHtml(spot.neighborhood)}</p>
        </div>
        <span class="shrink-0 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600">${escapeHtml(sportType(spot.type, lang))}</span>
      </div>
      <p class="mt-3 text-sm leading-relaxed text-stone-600">${escapeHtml(t(spot.description, lang))}</p>
      <div class="mt-4 flex flex-wrap gap-1.5">
        ${spot.tags.map((tg) => tagPill(tg, lang)).join("")}
      </div>
      <div class="mt-4 border-t border-stone-100 pt-3 text-xs text-stone-500">
        <span>${escapeHtml(t(UI.labels.hours, lang))}: ${escapeHtml(t(spot.hours, lang))}</span>
      </div>
    </article>
  `;
}

function render() {
  const lang = getLang();
  const filtered = sports.filter((s) => !activeNeighborhood || s.neighborhood === activeNeighborhood);
  if (!filtered.length) {
    emptyState(grid, lang);
    return;
  }
  grid.innerHTML = filtered.map((s) => cardHtml(s, lang)).join("");
}

async function init() {
  sports = await loadData("data/sports.json");
  buildNeighborhoodFilter(neighborhoodFilterEl, sports, (value) => {
    activeNeighborhood = value;
    render();
  });
  render();
}

onLangChange(render);
init();
