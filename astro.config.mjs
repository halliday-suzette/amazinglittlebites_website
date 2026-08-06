import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Deployed via GitHub Pages on the custom domain https://amazinglittlebites.com
// No `base` needed: a custom domain serves from the root, not a /reponame/ subpath.
export default defineConfig({
  site: 'https://amazinglittlebites.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
