import { loadData, onLangChange } from "./app.js";
import { UI, t, eventType, EVENT_TYPES, getLang } from "./i18n.js";
import { tagPill, placeImage, buildTypeFilter, emptyState, escapeHtml } from "./render-helpers.js";

const grid = document.querySelector("[data-event-grid]");
const typeFilterEl = document.querySelector("[data-type-filter]");

let events = [];
let activeType = "";

function cardHtml(event, lang) {
  return `
    <article class="overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:border-clay-300 hover:shadow-sm">
      ${placeImage(event, event.name)}
      <div class="p-5 sm:p-6">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-medium leading-snug text-stone-900">${escapeHtml(event.name)}</h3>
            <p class="mt-0.5 text-sm text-stone-500">${escapeHtml(event.neighborhood)}</p>
          </div>
          <span class="shrink-0 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600">${escapeHtml(eventType(event.type, lang))}</span>
        </div>
        <p class="mt-3 text-sm leading-relaxed text-stone-600">${escapeHtml(t(event.description, lang))}</p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          ${event.tags.map((tg) => tagPill(tg, lang)).join("")}
        </div>
        <div class="mt-4 border-t border-stone-100 pt-3 text-xs text-stone-500">
          <span>${escapeHtml(t(UI.labels.frequency, lang))}: ${escapeHtml(t(event.frequency, lang))}</span>
        </div>
      </div>
    </article>
  `;
}

function render() {
  const lang = getLang();
  const filtered = events.filter((e) => !activeType || e.type === activeType);
  if (!filtered.length) {
    emptyState(grid, lang);
    return;
  }
  grid.innerHTML = filtered.map((e) => cardHtml(e, lang)).join("");
}

async function init() {
  events = await loadData("data/events.json");
  const types = Object.keys(EVENT_TYPES).filter((key) => events.some((e) => e.type === key));
  buildTypeFilter(typeFilterEl, types, eventType, (value) => {
    activeType = value;
    render();
  });
  render();
}

onLangChange(render);
init();
