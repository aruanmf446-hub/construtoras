// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.config.ts';

const deploymentUrl = new URL(site.url);
const deploymentBase = deploymentUrl.pathname.replace(/\/$/, '');

export default defineConfig({
  site: deploymentUrl.origin,
  base: deploymentBase || '/',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  image: { responsiveStyles: false },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
  // three.js is a lazy, on-demand chunk (3D section only) — it never loads with the page.
  vite: { build: { chunkSizeWarningLimit: 800 } },
});
