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

## Updating social links

The footer (`src/components/Footer.astro`) has placeholder Instagram and Facebook icon links
(`href="#"`). Replace the `#` values with the business's real profile URLs once available.

## Project structure

```
src/
  assets/            Logo and other imported/optimized images
  components/        One component per page section (Nav, Hero, About, Services, Menu,
                      HowItWorks, ServiceArea, QuoteForm, Footer)
  layouts/Layout.astro  Shared HTML shell, fonts, global styles
  pages/index.astro     Assembles all sections into the single page
  styles/global.css     Tailwind import + brand color/font theme tokens
public/
  favicon.png         Browser tab icon
```
