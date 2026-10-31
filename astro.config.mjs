import { defineConfig } from 'astro/config';

// 掛在教學網 dorphinai.com/glossary 下（教學網以 rewrite 轉到本專案）。
// 輸出直接放在 dist/glossary，讓 /glossary/ 由靜態檔案本身提供，不靠 rewrite。
export default defineConfig({
  site: 'https://dorphinai.com',
  base: '/glossary',
  trailingSlash: 'ignore',
  outDir: './dist/glossary',
});
