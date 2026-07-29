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

**Rule: no English-only (or Spanish-only) text edits.** This site is bilingual (see "Bilingual"
below) — every change to user-facing copy must be made in both `en` and `es` in the same edit, no
exceptions. Before calling a copy change done: (1) confirm you edited both objects in
`src/i18n/translations.ts` (or both string literals, for the handful of intentionally-untranslated
proper nouns — see "Bilingual" for which is which), and (2) view or screenshot both `/` and `/es/`
to confirm the change actually landed on both pages, not just one.

This rule has a technical backstop, not just an instruction: `npm run build` automatically runs
`scripts/check-i18n-parity.mjs` first (wired up via npm's `prebuild` lifecycle hook — see
`package.json`), which recursively diffs the *shape* of `translations.ts`'s `en` and `es` objects
(same keys at every level, same array lengths) and fails the build with the exact offending path
if they've drifted apart. It does **not** check string content (that would defeat the point — the
languages are supposed to say different things), only structure. This also runs in CI, since the
GitHub Actions deploy workflow runs `npm run build` via `withastro/action`, so a parity break can't
reach production. Run `npm run check:i18n` to check it standalone without a full build. The script
imports `translations.ts` directly at runtime using Node's native TypeScript stripping (works on
Node ≥23.6 without any build step or extra dependency — this repo intentionally has no TypeScript
tooling otherwise, see the note in Commands above about no `astro check`). Because that's a
hard version floor, `package.json` declares `"engines": { "node": ">=23.6.0" }` and
`.github/workflows/deploy.yml` pins `withastro/action`'s `node-version: "24"` input explicitly —
without that pin the action's own default (Node 20 at time of writing) predates the ≥23.6 floor and
`prebuild` fails in CI with `ERR_UNKNOWN_FILE_EXTENSION` on `translations.ts`, even though the exact
same command succeeds locally on a newer Node. This is a real failure mode this project hit once:
verifying the script and the build locally is not sufficient proof it works in CI if the local Node
version and the CI-default Node version differ — check what Node version `withastro/action` (or any
other CI step) actually resolves to, don't assume it matches your dev machine.

## Big picture

This is a static one-page brochure site for "Amazing Little Bites," a dessert/snack cart catering
business, built with **Astro** (static output, no SSR/server) and **Tailwind CSS v4** (via
`@tailwindcss/vite`, CSS-first config — there is no `tailwind.config.js`). It deploys to **GitHub
Pages**, served at the custom domain `amazinglittlebites.com`, via GitHub Actions
(`.github/workflows/deploy.yml`, using `withastro/action` + `actions/deploy-pages`).

### Bilingual: two real pages, one dictionary

The site ships in English (`/`) and Mexican Spanish (`/es/`) as two separate static pages (not a
client-side text swap), so each is independently indexable/shareable. **Every text change must be
applied to both languages — see the rule in "Commands" above.** In practice that means:

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
  languages — they're the business's actual product names, not translated. The exception is a
  non-product entry like `menu.customAguaRequest` ("Make Your Own Aguas Request..." /
  "Solicitud de Aguas Personalizadas...") — that's descriptive/instructional text, not a dish
  name, so it goes through the dictionary and gets a real translation like everything else. When
  adding a new item to `Menu.astro`'s `snackCarts`/`hydrationBar` arrays, decide which category it
  is: a proper-noun product name (hardcode the same string, used as-is in both languages) or
  descriptive copy (add a dictionary key instead).
- Same-page anchor links (e.g. the Menu section's cross-reference to Services) must stay a bare
  fragment — `href="#services"`, never `href="/#services"`. Because each language is its own full
  page with its own copy of every section `id`, an absolute-rooted `/#services` would send a
  visitor on `/es/` away to the *English* root page instead of scrolling within `/es/` itself. A
  bare `#services` is already relative (no domain, no locale prefix) and always resolves against
  whichever language page it's rendered on — verified by clicking it on both `/` and `/es/` and
  confirming the URL stays `/#services` / `/es/#services` respectively, not jumping pages.
- The quote form's `event_type` field submits a canonical English `value` regardless of display
  language (so the business always gets consistent values in their inbox); only the visible
  `label` is translated. Follow this pattern for any other business-facing data field.
- `Layout.astro` sets `hreflang`/canonical links and `og:locale` (`es_MX` specifically, not
  `es_ES` — Mexican Spanish, not Spain Spanish) based on `lang`.
- To add a third locale: add a matching object to `translations.ts`, extend the `Lang` type, add
  `src/pages/<code>/index.astro`, and add a segment to the toggle bar in `Nav.astro`.

### GitHub Pages, custom domain

The site is served at the custom domain `https://amazinglittlebites.com`, set via `site` in
`astro.config.mjs` and `public/CNAME` — there is **no `base`** (a custom domain serves from the
root, unlike a `username.github.io/reponame/` project-page URL, which is what this site used
before the domain migration). Any root-absolute path should still go through
`import.meta.env.BASE_URL` (see the favicon link in `Layout.astro`, or `enHref`/`esHref` in
`Nav.astro`) rather than a bare `/`-prefixed string — `BASE_URL` just resolves to `/` now, but
this keeps the code portable if the site ever moves back to a project-page URL (see the README's
"Deploying to GitHub Pages" section for exactly what to change if that happens).
`public/.nojekyll` is required so GitHub Pages doesn't mangle Astro's `_astro/` output folder.

### Images

Real images (logo, favicon, OG share image) are imported through `astro:assets` (`<Image />`) so
they get optimized/hashed at build time — see `src/assets/logo.png` used by `Nav`/`Hero`/`Footer`.
When an image's rendered box must show the whole image uncropped (like the Hero logo), pass only
`width` (or only `height`) to `<Image />` and let Astro infer the other dimension from the source's
real aspect ratio — passing both dimensions with the wrong ratio causes silent cropping. The Menu
section deliberately has no per-item photos (see README "Adding real photos" for how to add them).

The current logo (`src/assets/logo.png`, also copied to `public/favicon.png`) has a genuine
transparent (RGBA) background — this is why it looks clean in the Nav/Hero/Footer against any
section background, but it's also why `public/og-image.jpg` is **not** just a copy of the logo: OG
share images don't reliably render alpha transparency across social platforms, so that file is a
separate, pre-composited flatten of the logo onto an opaque `cream` (`#fdf8f4`) 1200×630 canvas
(built with `sharp`, already resolvable in `node_modules` via Astro's own image deps — no new
dependency needed). If the logo is ever swapped again, regenerate `og-image.jpg` the same way
rather than copying the raw logo file over it, and keep `og:image:width`/`height` in
`Layout.astro` in sync with whatever canvas size you actually output.

### Photo carousel

`PhotoCarousel.astro` (rendered between `About` and `Services` on both `index.astro` and
`es/index.astro`) renders every image file in `src/assets/images/carousel/` as a swipeable,
auto-advancing carousel. The image list is **not hardcoded** — it's built at build time via
`import.meta.glob("../assets/images/carousel/*.{jpg,jpeg,png,webp,avif}", { eager: true })`, sorted
alphabetically by filename. Dropping a new image into that folder (or removing one) automatically
changes the carousel on the next build, no code change needed. Each image goes through `astro:assets`
`<Image />` for optimization (the same pipeline as the logo — see "Images" above), so a raw 2-3MB PNG
dropped into the folder gets compressed to a ~100-170KB WebP automatically.

Alt text is looked up by exact filename in `t.carousel.altByFile` (an object in `translations.ts`,
one entry per language) — this is why alt text is real, specific, and translated for the 5 images
that shipped with this feature, instead of generic. If a new image is added whose filename isn't a
key in `altByFile`, the component automatically falls back to `t.carousel.altFallback(n)` (e.g. "Amazing
Little Bites event photo 3" / "Foto de un evento de Amazing Little Bites 3") rather than failing —
but that fallback is a placeholder, not a real description, so treat "add a photo" and "write its
alt text in both `altByFile` entries" as one task, not two.

The carousel is vanilla JS (a `<script>` block in the component, no library): auto-advance every
4.5s, pauses on `mouseenter`/`focusin` (not just hover — keyboard focus pauses it too, since a
sighted keyboard user tabbing through prev/next/dots shouldn't fight an advancing carousel), real
touch swipe via `touchstart`/`touchmove`/`touchend` on the track element, and infinite wraparound
in both directions. It respects `prefers-reduced-motion`: when set, autoplay never starts and the
track's CSS `transition` is set to `none` (instant slide changes only on manual nav, no animation).
Verified with Playwright across mobile/tablet/desktop viewports, both languages, and a
`reducedMotion: "reduce"` browser context — see git history for the test script if this needs
re-verifying after a future change.

Adding this section changed the page's heading count — see the WCAG heading-count note below,
already updated to `7 h2` to include the carousel's "See Us in Action" / "Míranos en Acción" heading.

### Contact form

`QuoteForm.astro` posts to a live Formspree endpoint (`https://formspree.io/f/mykrnkjz`) via
`fetch`+JSON (not a form redirect), with client-side validation before submit. The validation/status
message strings are passed from Astro to the inline `<script>` via a `data-messages` attribute
(JSON-stringified dictionary), read with `JSON.parse` in the script — this pattern (not
`define:vars`) is how any other language-dependent value should reach client-side script in this
codebase.

### Analytics

`Layout.astro` loads [Plausible](https://plausible.io) (privacy-friendly, cookieless analytics) via
a script tag pair in `<head>`, right before the closing `</head>`: an async loader script
(`https://plausible.io/js/pa-QWaenrtT-XYAUD5cGXn6-.js`, site-ID baked into the URL) plus a small
inline `window.plausible` queue shim. Because every page routes through `Layout.astro`, this one
edit covers both `/` and `/es/` — unlike ordinary user-facing copy, this is not something the
bilingual-parity rule applies to (no visible/translatable text involved).

### Contact data (phone names/numbers) is duplicated, not centralized

`Hero.astro`, `Nav.astro`, `Footer.astro`, and `QuoteForm.astro` each declare their own identical
`PHONES` array literal (currently `Julio` at 714-783-6605 and `Nicole` at 714-783-6615) rather than
importing one shared source. This is a real, recurring maintenance cost — both prior name
corrections this project has needed (`Nichole` → `Nicole`, `J.C.` → `Julio`) required editing the
same 4 files. The names/numbers themselves are plain strings, not part of `translations.ts`,
because they're proper nouns that don't change between languages — `t.nav.callAria(name, display)`
and `t.hero.ctaCall(name, display)` just interpolate whatever `name` they're given, so a future
name/number change only needs the 4 `PHONES` literals updated, not the dictionary. If this data
changes a third time, consider actually centralizing it (e.g. a `src/data/contacts.ts` export)
instead of continuing to hand-edit 4 copies.

### Known layout gotchas (read before touching `Nav.astro`)

The nav bar has been the source of several real, previously-shipped bugs — keep all of these in
mind for any future nav changes:

1. A flex child that's allowed to `shrink` below its content's natural width does **not** visually
   truncate — with `whitespace-nowrap` and no `overflow-hidden`, the overflowing text renders
   *behind* whatever sibling comes next in paint order, invisible rather than clipped. This is why
   the logo+wordmark block is `shrink-0`: it must never shrink.
2. The nav's hamburger/full-links breakpoint is `lg` (1024px), not `md` (768px) — at `md`, the full
   desktop nav links + phone pills didn't have enough room and overflowed the page at real tablet
   widths (e.g. 768px iPad portrait). Don't move this back to `md` without re-verifying at
   768–900px widths with an actual browser, not just visual inspection of the markup.
3. The mobile phone-circle and hamburger buttons are visually 32px (`h-8 w-8`) but need a larger
   *tappable* area for touch comfort. Rather than growing the visible box (which reintroduces the
   320px-width overflow problem from gotcha #1/#2), they use a `relative` + `before:absolute
   before:-inset-*` pseudo-element to enlarge the invisible hit area without affecting layout flow.
   Gotcha within the gotcha: for the rightmost element (the hamburger), an equal `-inset-2` on all
   sides pushes the invisible hit-box past the viewport's right edge, which Chromium counts toward
   `document.scrollWidth` — causing real (if invisible) horizontal overflow. That's why the
   hamburger's expansion is asymmetric (`before:-left-2 before:-top-2 before:-bottom-2 before:right-0`,
   no rightward expansion). Any new edge-adjacent tap target needs the same asymmetric treatment,
   verified with `document.documentElement.scrollWidth` at 320px, not just visual inspection.

### Accessibility is an audited, real requirement here

This site was WAVE-audited and had real WCAG AA failures fixed (36 low-contrast errors, a missing
form label, a false-positive "possible heading"). Don't regress these:

- **Contrast is load-bearing, not aesthetic.** The `rose`/`rose-dark` hex values in
  `src/styles/global.css` were computed, not picked by eye, to clear 4.5:1 against both `cream` and
  `white` (and `rose` as a *background* clears 4.5:1 against white text too — it's used both ways).
  Before changing either value, or introducing any new text/background color pairing anywhere in
  the site, compute the actual WCAG contrast ratio (relative luminance formula) rather than
  eyeballing it — plain pink/light colors in this brand palette have repeatedly failed AA in
  practice. `blush` and `maroon` are already compliant as currently used; don't assume a new usage
  of them automatically is too.
- **Heading structure is exactly 1 `h1`, 7 `h2`, 8 `h3` across the page** (verified by counting
  actual rendered headings, not by reading component files in isolation). If you add/remove a
  section, keep this in mind — and if any bold/large non-heading text starts looking heading-like,
  prefer de-emphasizing its weight/size (as done for the Nav/Footer brand wordmark, `font-semibold`
  → `font-medium`) over either adding a spurious heading tag or leaving it ambiguous.
- **The Formspree honeypot field (`name="_gotcha"` in `QuoteForm.astro`) is `aria-hidden="true"`.**
  Don't add a visible label to it (defeats the point of a decoy field) and don't remove
  `aria-hidden` (an unlabeled input is an accessibility error) — this is the correct combination.

### Brand tokens

Colors/fonts are Tailwind v4 theme variables in `src/styles/global.css` (`@theme` block):
- `blush` (`#e8b4c0`) — light tint, backgrounds/borders only, not used as text.
- `rose` (`#a8496d`) / `rose-dark` (`#8f3a56`, hover state) — the main brand accent, used as both
  text color and button/section background; see the contrast note above before changing.
- `maroon` (`#5c2a3a`) — near-black-equivalent for this palette, safe as text almost anywhere.
- `cream` (`#fdf8f4`) — near-white page background.
- `font-display` (Playfair Display, for headings/buttons) and `font-body` (Inter).

Reuse these tokens rather than introducing new colors/fonts.
