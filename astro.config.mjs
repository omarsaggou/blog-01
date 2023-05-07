import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  site: 'https://astro-blog-cip.netlify.app',
  integrations: [react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap(), tailwind(), partytown()]
});