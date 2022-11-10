import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://leonism.github.io/astro-theme-main/',
  // base: '/my-repo',
  base: '/astro-theme-main',
});