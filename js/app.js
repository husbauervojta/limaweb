// Shared UI wiring: language toggle, static text translation, mobile nav.
import { UI, getLang, setLang } from "./i18n.js";

function resolvePath(obj, path) {
  return path.split(".").reduce((node, key) => (node ? node[key] : undefined), obj);
}

export function applyStaticI18n(lang = getLang()) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const entry = resolvePath(UI, el.dataset.i18n);
    if (entry) el.textContent = entry[lang] ?? entry.es;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, path] = el.dataset.i18nAttr.split(":");
    const entry = resolvePath(UI, path);
    if (entry) el.setAttribute(attr, entry[lang] ?? entry.es);
  });
  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.langOption === lang));
  });
}

export function initLangToggle() {
  const lang = getLang();
  document.documentElement.lang = lang;
  applyStaticI18n(lang);

  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.langOption;
      setLang(next);
      applyStaticI18n(next);
      document.dispatchEvent(new CustomEvent("lima:langchange", { detail: { lang: next } }));
    });
  });
}

export function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

export async function loadData(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}

export function onLangChange(handler) {
  document.addEventListener("lima:langchange", (e) => handler(e.detail.lang));
}

initLangToggle();
initMobileNav();
