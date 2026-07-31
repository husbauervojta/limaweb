# Lima.

Guía curada de Lima, Perú — cafés para trabajar, comida sin trampas turísticas, y rincones de diseño y atardeceres. Bilingüe (ES/EN), sitio estático, sin frameworks.

## Stack

- HTML5 + Tailwind CSS v4 + JavaScript vanilla (ES modules)
- Datos en JSON plano en `data/`
- Hospedaje en GitHub Pages, build automático vía GitHub Actions

## Desarrollo local

```bash
npm install
npm run build:css   # compila src/input.css -> css/styles.css
npm run dev          # sirve el sitio en http://localhost:4989
```

Durante desarrollo activo de estilos, usa `npm run watch:css` en otra terminal para recompilar al guardar.

El sitio hace `fetch()` de los archivos en `data/*.json`, así que necesitas servirlo por HTTP (no abrir los `.html` directamente con `file://`).

## Agregar o editar lugares

Cada categoría es un array de objetos en `data/`:

- `data/cafes.json`
- `data/food.json`
- `data/spots.json`
- `data/events.json` (vacío por ahora — sección "próximamente")

Los campos `description`, `hours` y `bestTime` son bilingües: `{ "es": "...", "en": "..." }`. Los `tags` son claves (slugs en inglés, p. ej. `"fast-wifi"`) que se traducen mediante el diccionario en `js/i18n.js` (`TAGS`, `CUISINES`, `SPOT_TYPES`) — si agregas una etiqueta nueva, añádela también ahí.

## Estructura

```
index.html, cafes.html, food.html, spots.html, events.html
data/            # contenido, JSON bilingüe
js/
  i18n.js        # diccionario ES/EN + helpers de traducción
  app.js         # toggle de idioma, menú móvil, fetch helper
  render-helpers.js
  home.js, cafes.js, food.js, spots.js  # render por página
src/input.css    # entrada de Tailwind (tema, paleta "clay")
css/styles.css   # generado — no se versiona
```

## Deploy

`main` → GitHub Actions compila el CSS y publica `dist/` en GitHub Pages automáticamente. Para activarlo la primera vez: **Settings → Pages → Source: GitHub Actions** en el repositorio.
