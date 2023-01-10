import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://www.startops.us/',
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), react()] // Add renderers to the config
});