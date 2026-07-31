# Lima.

Guía curada de Lima, Perú, para expats y locales — cafés para trabajar, comida sin trampas turísticas, y rincones de diseño y atardeceres. Bilingüe (ES/EN), sitio estático, sin frameworks.

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
- `data/sports.json`
- `data/events.json` — datos de muestra, verifica fechas/horarios antes de publicar
- `data/guides.json` — no es una lista de lugares, sino tres arrays (`esim`, `safety`, `taxi`) de tips `{ title, body }`

Los campos `description`, `hours`, `bestTime` y `frequency` son bilingües: `{ "es": "...", "en": "..." }`. Los `tags` son claves (slugs en inglés, p. ej. `"fast-wifi"`) que se traducen mediante el diccionario en `js/i18n.js` (`TAGS`, `CUISINES`, `SPOT_TYPES`, `SPORT_TYPES`, `EVENT_TYPES`) — si agregas una etiqueta nueva, añádela también ahí.

### Botón "¿Conoces un evento? Sugiérelo"

En `events.html` hay un enlace marcado con `data-submit-event` que apunta a `href="#"` — reemplázalo por el link de tu Google Form (u otro formulario) cuando lo tengas. Las respuestas hay que pasarlas a mano a `data/events.json` siguiendo el mismo formato que las entradas existentes.

## Estructura

```
index.html, cafes.html, food.html, spots.html, sport.html, events.html, guides.html
data/            # contenido, JSON bilingüe
js/
  i18n.js        # diccionario ES/EN + helpers de traducción
  app.js         # toggle de idioma, menú móvil, fetch helper
  render-helpers.js
  home.js, cafes.js, food.js, spots.js, sport.js, events.js, guides.js  # render por página
src/input.css    # entrada de Tailwind (tema, paleta "clay")
css/styles.css   # generado — no se versiona
```

## Deploy

`main` → GitHub Actions compila el CSS y publica `dist/` en GitHub Pages automáticamente. Para activarlo la primera vez: **Settings → Pages → Source: GitHub Actions** en el repositorio.
