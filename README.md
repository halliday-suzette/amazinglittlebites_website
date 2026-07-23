# Amazing Little Bites

One-page brochure site for Amazing Little Bites, a dessert & snack cart catering business serving
Orange County, San Bernardino, and Riverside, CA. Built with [Astro](https://astro.build) and
[Tailwind CSS v4](https://tailwindcss.com).

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Adding real photos

Placeholder logo/menu assets ship with the repo so the site runs out of the box. Swap them for
real photos as they become available:

- **Logo** — replace `src/assets/logo.jpg` (and `public/favicon.jpg` for the browser tab icon)
  with the final logo file. If the new file isn't a JPEG, either keep the same extension or update
  the `import` paths in `src/components/Nav.astro`, `src/components/Hero.astro`, and
  `src/components/Footer.astro`, plus the favicon `<link>` in `src/layouts/Layout.astro`.
- **Menu** — `src/components/Menu.astro` renders the "Snack Carts" and "Hydration Bar" item lists
  as plain text (no photos). To add photos later, you'd need to restructure the `<ul>` items into
  cards with an `<Image />` per item, similar to how `Hero.astro`/`Nav.astro`/`Footer.astro` import
  and render the logo via `astro:assets`.

## Connecting the quote form to Formspree

The "Get a Free Quote" form (`src/components/QuoteForm.astro`) posts to
[Formspree](https://formspree.io) and is already wired up to a live form
(`https://formspree.io/f/mykrnkjz`). Submissions arrive in the connected Formspree inbox with the
subject "New Quote Request - Amazing Little Bites".

To switch to a different Formspree form later:

1. Sign up/log in at [formspree.io](https://formspree.io) and create (or open) a form.
2. Copy its form ID (it looks like `xayzabcd`).
3. Open `src/components/QuoteForm.astro` and replace the ID in the `<form action="...">` attribute:

   ```astro
   <form action="https://formspree.io/f/YOUR_ACTUAL_ID" method="POST" ...>
   ```

4. Rebuild/redeploy the site.

The form already includes a hidden honeypot field (`_gotcha`) for spam protection and submits via
`fetch` with `Accept: application/json`, so visitors see an inline "Thanks! We'll be in touch
soon" message (or an inline error) without leaving the page.

## Deploying to GitHub Pages

The site is preconfigured as a GitHub Pages **project site** for
`halliday-suzette/amazinglittlebites_website`, served at:

```
https://halliday-suzette.github.io/amazinglittlebites_website/
```

This is wired up via:

- `astro.config.mjs` sets `site` and `base: '/amazinglittlebites_website/'` so every generated
  link, script, and optimized image resolves under that subpath instead of the domain root.
- `public/.nojekyll` tells GitHub Pages not to run the output through Jekyll (which would
  otherwise ignore Astro's `_astro/` assets folder because it starts with an underscore).
- `.github/workflows/deploy.yml` builds the site with the official `withastro/action` on every
  push to `main` and publishes it with GitHub's `actions/deploy-pages`.

**One-time setup in GitHub:**

1. Push this repo to GitHub (already done, if you're reading this from the deployed repo).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions** (not "Deploy from a branch").
4. Push to `main` (or run the workflow manually from the **Actions** tab) — the site will build
   and deploy automatically. The first run also finishes registering the Pages site.

**If you switch to a custom domain later:** add a `public/CNAME` file containing the domain, set
`site` in `astro.config.mjs` to `https://your-domain.com`, and remove the `base` setting (a custom
domain serves from the root, not a `/amazinglittlebites_website/` subpath) — then update the
`favicon.png` href in `src/layouts/Layout.astro` back to a plain `"/favicon.png"` if you remove
`BASE_URL` usage. Re-run `npm run build` locally afterward to confirm no broken asset paths.

## English / Spanish (bilingual site)

The site is available in English (`/`) and Mexican Spanish (`/es/`) as two separate, real pages —
not a client-side text swap — so each language is independently indexable by search engines and
shareable as its own link. A slim "EN | ES" bar above the main nav lets visitors switch; it always
links to the equivalent page in the other language.

How it's wired up:

- **`src/i18n/translations.ts`** — a single dictionary file with an `en` and an `es` object
  covering every piece of UI copy (nav labels, headings, button text, form labels/validation
  messages, footer text, etc.). `getDictionary(lang)` returns the right one.
- **Every component** (`Nav`, `Hero`, `About`, `Services`, `Menu`, `HowItWorks`, `ServiceArea`,
  `QuoteForm`, `Footer`, `Layout`) accepts a `lang?: "en" | "es"` prop and pulls its text from that
  dictionary instead of hardcoding strings — the markup/styling is identical between languages,
  only the copy changes.
- **`src/pages/index.astro`** renders everything with `lang="en"`; **`src/pages/es/index.astro`**
  renders the exact same components with `lang="es"`.
- Menu item names (e.g. "Agua de Horchata", "Esquite Bar") are intentionally **not** translated in
  either language — they're the business's actual product names, kept authentic on both pages.
- The Formspree quote-request `event_type` field submits a canonical English value (e.g.
  `"Wedding"`) regardless of which language the visitor used, so J.C./Nichole always see
  consistent values in their inbox — only the on-page label is translated (e.g. "Boda").
- `Layout.astro` adds `hreflang`/canonical tags and `og:locale` (`es_MX`, not `es_ES` — Mexican
  Spanish, not Spain Spanish) so search engines and shared links treat the two pages correctly.

**To add or edit copy:** update the matching key in both the `en` and `es` objects in
`src/i18n/translations.ts` — components will pick up the change automatically on rebuild.

**To add a third language:** add a new locale object to `translations.ts` (matching the same
shape as `en`/`es`), extend the `Lang` type, add a new `src/pages/<code>/index.astro` mirroring
`src/pages/es/index.astro` with `lang="<code>"`, and add a third segment to the toggle bar in
`Nav.astro`.

## Updating social links

The footer (`src/components/Footer.astro`) has placeholder Instagram and Facebook icon links
(`href="#"`). Replace the `#` values with the business's real profile URLs once available.

## Project structure

```
src/
  assets/            Logo and other imported/optimized images
  components/        One component per page section (Nav, Hero, About, Services, Menu,
                      HowItWorks, ServiceArea, QuoteForm, Footer) — each takes a lang prop
  i18n/translations.ts  English + Spanish copy dictionary (see "English / Spanish" above)
  layouts/Layout.astro  Shared HTML shell, fonts, global styles, hreflang tags
  pages/index.astro     English page — assembles all sections with lang="en"
  pages/es/index.astro  Spanish page — same sections with lang="es"
  styles/global.css     Tailwind import + brand color/font theme tokens
public/
  favicon.jpg         Browser tab icon
  og-image.jpg         Social/link-preview share image
```
