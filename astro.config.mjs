import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed as a GitHub Pages project site: https://halliday-suzette.github.io/amazinglittlebites_website/
// `site` + `base` must match the repo name so generated links/assets resolve under that subpath.
export default defineConfig({
  site: 'https://halliday-suzette.github.io',
  base: '/amazinglittlebites_website/',
  vite: {
    plugins: [tailwindcss()],
  },
});
