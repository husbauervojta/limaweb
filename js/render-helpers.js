import { UI, t, tag as tagLabel, getLang } from "./i18n.js";

export function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

export function tagPill(key, lang = getLang()) {
  return `<span class="rounded-full bg-clay-50 px-2.5 py-1 text-xs text-clay-700">${escapeHtml(tagLabel(key, lang))}</span>`;
}

export function placeImage(place, altText = "") {
  if (!place.photo) return "";
  return `<img src="${escapeHtml(place.photo)}" alt="${escapeHtml(altText)}" class="h-40 w-full object-cover sm:h-44" loading="lazy" decoding="async" />`;
}

export function priceDots(level) {
  const count = (level || "$").length;
  const full = "●".repeat(count);
  const empty = "○".repeat(Math.max(0, 4 - count));
  return `<span class="tracking-tight">${full}${empty}</span>`;
}

export function neighborhoods(items) {
  return [...new Set(items.map((i) => i.neighborhood))].sort();
}

function buildPillFilter(container, options, onChange) {
  const lang = getLang();
  container.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.dataset.value = "";
  allBtn.className = "filter-pill filter-pill--active";
  allBtn.textContent = t(UI.filters.all, lang);
  container.appendChild(allBtn);

  options.forEach(({ value, label }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.value = value;
    btn.className = "filter-pill";
    btn.textContent = label;
    container.appendChild(btn);
  });

  container.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.querySelectorAll("button").forEach((b) => b.classList.remove("filter-pill--active"));
      btn.classList.add("filter-pill--active");
      onChange(btn.dataset.value);
    });
  });
}

export function buildNeighborhoodFilter(container, items, onChange) {
  const options = neighborhoods(items).map((n) => ({ value: n, label: n }));
  buildPillFilter(container, options, onChange);
}

export function buildTypeFilter(container, types, labelFn, onChange, lang = getLang()) {
  const options = types.map((value) => ({ value, label: labelFn(value, lang) }));
  buildPillFilter(container, options, onChange);
}

export function emptyState(container, lang = getLang()) {
  container.innerHTML = `<p class="col-span-full py-12 text-center text-sm text-stone-500">${t(UI.filters.noResults, lang)}</p>`;
}
