import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://jixiaoqi.com',
  base: '/',
  integrations: [mdx(), sitemap(), react()],
  output: "server",
  adapter: vercel({
    analytics: true,
    split: true
  })
});
