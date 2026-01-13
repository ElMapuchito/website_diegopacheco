import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),

  integrations: [tailwind(), icon(), sitemap()],
});