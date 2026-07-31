import { loadData, onLangChange } from "./app.js";
import { UI, t, getLang } from "./i18n.js";
import { tagPill, escapeHtml } from "./render-helpers.js";

const cafesPreview = document.querySelector("[data-preview-cafes]");
const foodPreview = document.querySelector("[data-preview-food]");
const spotsPreview = document.querySelector("[data-preview-spots]");

let cafes = [];
let food = [];
let spots = [];

function previewCard(item, lang) {
  return `
    <article class="rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-clay-300 hover:shadow-sm">
      <h3 class="text-base font-medium leading-snug text-stone-900">${escapeHtml(item.name)}</h3>
      <p class="mt-0.5 text-sm text-stone-500">${escapeHtml(item.neighborhood)}</p>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">${escapeHtml(t(item.description, lang))}</p>
      <div class="mt-3 flex flex-wrap gap-1.5">
        ${(item.tags || []).slice(0, 2).map((tg) => tagPill(tg, lang)).join("")}
      </div>
    </article>
  `;
}

function render() {
  const lang = getLang();
  if (cafesPreview) cafesPreview.innerHTML = cafes.slice(0, 3).map((c) => previewCard(c, lang)).join("");
  if (foodPreview) foodPreview.innerHTML = food.slice(0, 3).map((f) => previewCard(f, lang)).join("");
  if (spotsPreview) spotsPreview.innerHTML = spots.slice(0, 3).map((s) => previewCard(s, lang)).join("");
}

async function init() {
  [cafes, food, spots] = await Promise.all([
    loadData("data/cafes.json"),
    loadData("data/food.json"),
    loadData("data/spots.json")
  ]);
  render();
}

onLangChange(render);
init();
