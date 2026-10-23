// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://openwavesdesign.com',
  trailingSlash: 'always',
  // Ad landing pages under /lp/ are noindex, so keep them out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/lp/') })],
});
