# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build to dist/
npm run preview   # serve the production build from dist/ locally
```

There is no linter, formatter, or test suite configured in this project (no `lint`/`test` script
in `package.json`, no `@astrojs/check`/`typescript` devDependency for `astro check`). The only
correctness check available is `npm run build` — always run it after changes and confirm it
completes with no errors before considering a change done.

When verifying UI changes, prefer an actual headless-browser check (Playwright, if available) over
reading the markup — this project has repeatedly had bugs that were invisible in the DOM/markup but
visible only when rendered (see "Known layout gotchas" below).

## Big picture

This is a static one-page brochure site for "Amazing Little Bites," a dessert/snack cart catering
business, built with **Astro** (static output, no SSR/server) and **Tailwind CSS v4** (via
`@tailwindcss/vite`, CSS-first config — there is no `tailwind.config.js`). It deploys to **GitHub
Pages** as a project site via GitHub Actions (`.github/workflows/deploy.yml`, using
`withastro/action` + `actions/deploy-pages`).

### Bilingual: two real pages, one dictionary

The site ships in English (`/`) and Mexican Spanish (`/es/`) as two separate static pages (not a
client-side text swap), so each is independently indexable/shareable:

- `src/i18n/translations.ts` holds one `en` and one `es` object with every piece of UI copy.
  `getDictionary(lang)` returns the right one. This is the single source of truth for all text —
  don't hardcode user-facing strings in components.
- Every component (`Nav`, `Hero`, `About`, `Services`, `Menu`, `HowItWorks`, `ServiceArea`,
  `QuoteForm`, `Footer`, `Layout`) takes a `lang?: "en" | "es"` prop and reads from the dictionary.
  Markup/styling is identical between languages; only the copy source differs.
- `src/pages/index.astro` and `src/pages/es/index.astro` are near-duplicates that assemble the
  same components with `lang="en"` / `lang="es"` respectively — when adding a new section to the
  page, add it to **both** files.
- Menu item names (e.g. "Esquite Bar", "Agua de Horchata") are intentionally identical in both
  languages — they're the business's actual product names, not translated.
- The quote form's `event_type` field submits a canonical English `value` regardless of display
  language (so the business always gets consistent values in their inbox); only the visible
  `label` is translated. Follow this pattern for any other business-facing data field.
- `Layout.astro` sets `hreflang`/canonical links and `og:locale` (`es_MX` specifically, not
  `es_ES` — Mexican Spanish, not Spain Spanish) based on `lang`.
- To add a third locale: add a matching object to `translations.ts`, extend the `Lang` type, add
  `src/pages/<code>/index.astro`, and add a segment to the toggle bar in `Nav.astro`.

### GitHub Pages base path

`astro.config.mjs` sets `site` and `base: '/amazinglittlebites_website/'` since this is a project
site (not a custom domain or user/org site). Any hardcoded root-absolute path (e.g. `href="/x"`)
will break under this base path — use `import.meta.env.BASE_URL` (see the favicon link in
`Layout.astro`, or the `enHref`/`esHref` computation in `Nav.astro`) or Astro's asset pipeline
(`astro:assets`, which handles this automatically), never a bare `/`-prefixed path.
`public/.nojekyll` is required so GitHub Pages doesn't mangle Astro's `_astro/` output folder.

### Images

Real images (logo, favicon, OG share image) are imported through `astro:assets` (`<Image />`) so
they get optimized/hashed at build time — see `src/assets/logo.jpg` used by `Nav`/`Hero`/`Footer`.
When an image's rendered box must show the whole image uncropped (like the Hero logo), pass only
`width` (or only `height`) to `<Image />` and let Astro infer the other dimension from the source's
real aspect ratio — passing both dimensions with the wrong ratio causes silent cropping. The Menu
section deliberately has no per-item photos (see README "Adding real photos" for how to add them).

### Contact form

`QuoteForm.astro` posts to a live Formspree endpoint (`https://formspree.io/f/mykrnkjz`) via
`fetch`+JSON (not a form redirect), with client-side validation before submit. The validation/status
message strings are passed from Astro to the inline `<script>` via a `data-messages` attribute
(JSON-stringified dictionary), read with `JSON.parse` in the script — this pattern (not
`define:vars`) is how any other language-dependent value should reach client-side script in this
codebase.

### Known layout gotchas (read before touching `Nav.astro`)

The nav bar has been the source of two real, previously-shipped bugs — keep both in mind for any
future nav changes:

1. A flex child that's allowed to `shrink` below its content's natural width does **not** visually
   truncate — with `whitespace-nowrap` and no `overflow-hidden`, the overflowing text renders
   *behind* whatever sibling comes next in paint order, invisible rather than clipped. This is why
   the logo+wordmark block is `shrink-0`: it must never shrink.
2. The nav's hamburger/full-links breakpoint is `lg` (1024px), not `md` (768px) — at `md`, the full
   desktop nav links + phone pills didn't have enough room and overflowed the page at real tablet
   widths (e.g. 768px iPad portrait). Don't move this back to `md` without re-verifying at
   768–900px widths with an actual browser, not just visual inspection of the markup.

### Brand tokens

Colors/fonts are Tailwind v4 theme variables in `src/styles/global.css` (`@theme` block): `blush`,
`rose`, `rose-dark`, `maroon`, `cream` for color, `font-display` (Playfair Display, for headings/
buttons) and `font-body` (Inter). Reuse these tokens rather than introducing new colors/fonts.
