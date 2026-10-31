import { defineConfig } from 'astro/config';

// 掛在教學網 dorphinai.com/glossary 下（教學網以 rewrite 轉到本專案）
export default defineConfig({
  site: 'https://dorphinai.com',
  base: '/glossary',
  trailingSlash: 'ignore',
});
