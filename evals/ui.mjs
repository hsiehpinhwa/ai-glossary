// UI evals against a built site (npm run build first). Starts `astro preview`, then checks with Playwright:
//  - every tile opens its panel; summary and intro render, then the diagram (stage order by animation delay)
//  - no horizontal page scroll at 375 / 768 / 1280
//  - every tile works without JavaScript (it is a link to an existing term page)
//  - keyboard: Enter/Space opens, Escape closes and returns focus
// Usage: node evals/ui.mjs [--base http://localhost:4321]
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const { chromium } = createRequire(import.meta.url)('playwright');
const root = path.resolve(import.meta.dirname, '..');
const argBase = process.argv.indexOf('--base');
let base = argBase > -1 ? process.argv[argBase + 1] : null;
let server;
if (!base) {
  base = 'http://localhost:4399/glossary';
  server = spawn('npx', ['astro', 'preview', '--port', '4399'], { cwd: root, stdio: 'ignore' });
  for (let i = 0; i < 50; i++) { try { await fetch(base); break; } catch { await new Promise((r) => setTimeout(r, 200)); } }
}

const fails = [];
const fail = (check, msg) => fails.push({ check, msg });
const browser = await chromium.launch();

try {
  // Panels open with the right order of content
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(base + '/');
  const slugs = await page.$$eval('.tile', (ts) => ts.map((t) => t.dataset.slug));
  for (const slug of slugs) {
    await page.click(`.tile[data-slug="${slug}"]`);
    const r = await page.evaluate((slug) => {
      const tile = document.querySelector(`.tile[data-slug="${slug}"]`);
      const panel = document.getElementById('panel-' + slug);
      if (!panel || panel.hidden) return { err: 'panel 沒有打開' };
      const delay = (sel) => parseFloat(getComputedStyle(panel.querySelector(sel)).animationDelay) || 0;
      return {
        expanded: tile.getAttribute('aria-expanded'),
        sum: !!panel.querySelector('.sum')?.textContent.trim(),
        intro: (panel.querySelector('.intro')?.textContent.trim().length || 0) > 100,
        svg: !!panel.querySelector('.fig svg'),
        order: delay('.stage-1') <= delay('.stage-2') && delay('.stage-2') < delay('.stage-3'),
        below: panel.getBoundingClientRect().top >= tile.getBoundingClientRect().bottom - 1,
      };
    }, slug);
    if (r.err) { fail('panel', `${slug}: ${r.err}`); continue; }
    if (r.expanded !== 'true') fail('a11y', `${slug}: aria-expanded 沒有變 true`);
    if (!r.sum || !r.intro) fail('panel', `${slug}: 簡述或介紹沒有出現`);
    if (!r.svg) fail('panel', `${slug}: 沒有圖例`);
    if (!r.order) fail('panel', `${slug}: 圖例沒有排在文字之後出現`);
    if (!r.below) fail('panel', `${slug}: panel 沒有開在方塊下方`);
  }

  // Keyboard
  await page.goto(base + '/');
  const first = slugs[0];
  await page.focus(`.tile[data-slug="${first}"]`);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(400); // panel grows from 0fr over --mo-trans
  if (!(await page.isVisible('#panel-' + first))) fail('keyboard', 'Enter 沒有打開 panel');
  await page.keyboard.press('Escape');
  const focused = await page.evaluate(() => document.activeElement?.dataset?.slug);
  if (focused !== first) fail('keyboard', 'Escape 之後焦點沒有回到方塊');

  // Overflow at three widths, panel open
  for (const w of [375, 768, 1280]) {
    const p = await browser.newPage({ viewport: { width: w, height: 800 } });
    for (const url of ['/', '/graph', `/terms/${first}`]) {
      await p.goto(base + url);
      if (url === '/') await p.click(`.tile[data-slug="${first}"]`);
      await p.waitForTimeout(300);
      const sw = await p.evaluate(() => document.documentElement.scrollWidth);
      if (sw > w) fail('layout', `${url} 在 ${w}px 寬有水平捲動（${sw}px）`);
    }
    await p.close();
  }

  // Without JavaScript every tile is a working link
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const nj = await ctx.newPage();
  await nj.goto(base + '/');
  const hrefs = await nj.$$eval('.tile', (ts) => ts.map((t) => t.getAttribute('href')));
  for (const h of hrefs) {
    const res = await fetch(new URL(h, base));
    if (!res.ok) fail('no-js', `${h} 回應 ${res.status}`);
  }
  const hiddenText = await nj.evaluate(() => getComputedStyle(document.querySelector('h1')).opacity);
  if (hiddenText === '0') fail('no-js', '無 JS 時標題不可見');
  await ctx.close();
  console.log(`檢查 ${slugs.length} 個方塊`);
} finally {
  await browser.close();
  server?.kill();
}

fs.mkdirSync(path.join(root, 'evals/out'), { recursive: true });
fs.writeFileSync(path.join(root, 'evals/out/ui-report.json'), JSON.stringify(fails, null, 1));
for (const f of fails) console.log(`✗ [${f.check}] ${f.msg}`);
console.log(fails.length ? `${fails.length} 個 UI 問題` : 'UI 檢查全部通過');
process.exit(fails.length ? 1 : 0);
