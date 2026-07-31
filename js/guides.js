import { loadData, onLangChange } from "./app.js";
import { t, getLang } from "./i18n.js";
import { escapeHtml } from "./render-helpers.js";

const sections = {
  esim: document.querySelector("[data-guide-esim]"),
  safety: document.querySelector("[data-guide-safety]"),
  taxi: document.querySelector("[data-guide-taxi]")
};

let guides = null;

function tipCard(tip, lang) {
  return `
    <article class="rounded-2xl border border-stone-200 bg-white p-5">
      <h3 class="font-medium text-stone-900">${escapeHtml(t(tip.title, lang))}</h3>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">${escapeHtml(t(tip.body, lang))}</p>
    </article>
  `;
}

function render() {
  if (!guides) return;
  const lang = getLang();
  Object.entries(sections).forEach(([key, el]) => {
    if (!el) return;
    el.innerHTML = (guides[key] || []).map((tip) => tipCard(tip, lang)).join("");
  });
}

async function init() {
  guides = await loadData("data/guides.json");
  render();
}

onLangChange(render);
init();
