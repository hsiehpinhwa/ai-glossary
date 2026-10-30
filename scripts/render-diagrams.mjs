// Render diagrams/<slug>.mmd to src/generated/diagrams/<slug>.svg with the Lumen palette.
// Runs locally (needs Chromium + network for fonts); the SVGs are committed so Vercel never renders.
// Usage: node scripts/render-diagrams.mjs [slug ...]
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

// Playwright is preinstalled globally in the authoring environment, not a project dependency.
const { chromium } = createRequire(import.meta.url)('playwright');

const root = path.resolve(import.meta.dirname, '..');
const srcDir = path.join(root, 'diagrams');
const outDir = path.join(root, 'src/generated/diagrams');
fs.mkdirSync(outDir, { recursive: true });

const only = process.argv.slice(2);
const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.mmd'))
  .filter((f) => !only.length || only.includes(f.replace(/\.mmd$/, '')));

const mermaidJs = fs.readFileSync(path.join(root, 'node_modules/mermaid/dist/mermaid.min.js'), 'utf8');
const config = {
  startOnLoad: false,
  theme: 'base',
  securityLevel: 'strict',
  flowchart: { htmlLabels: false, curve: 'basis', padding: 12, nodeSpacing: 36, rankSpacing: 44 },
  sequence: { mirrorActors: false },
  themeVariables: {
    fontFamily: '"Radio Canada", "Noto Sans TC", sans-serif',
    fontSize: '15px',
    background: '#F2F0E8',
    primaryColor: '#F2F0E8',
    primaryTextColor: '#0E1A1B',
    primaryBorderColor: '#0E1A1B',
    secondaryColor: '#CFE2E0',
    tertiaryColor: '#F2F0E8',
    lineColor: '#0E1A1B',
    textColor: '#0E1A1B',
    clusterBkg: '#CFE2E0',
    clusterBorder: '#3A4F52',
    edgeLabelBackground: '#F2F0E8',
    actorBkg: '#F2F0E8', actorBorder: '#0E1A1B', signalColor: '#0E1A1B', noteBkgColor: '#CFE2E0', noteBorderColor: '#3A4F52',
  },
};

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(`<!doctype html><html><head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Radio+Canada:wdth,wght@75..100,400..700&family=Noto+Sans+TC:wght@400;700&display=block">
</head><body><div id="probe" style="font-family:'Radio Canada','Noto Sans TC';font-weight:400">Aa 中文 <b>粗體</b></div></body></html>`);
await page.addScriptTag({ content: mermaidJs });
await page.evaluate(async () => { await document.fonts.ready; });
await page.evaluate((c) => window.mermaid.initialize(c), config);

let failed = 0;
for (const f of files) {
  const slug = f.replace(/\.mmd$/, '');
  const code = fs.readFileSync(path.join(srcDir, f), 'utf8');
  try {
    const svg = await page.evaluate(async ({ slug, code }) => {
      const { svg } = await window.mermaid.render('d-' + slug, code);
      return svg;
    }, { slug, code });
    const hash = createHash('sha1').update(code).digest('hex').slice(0, 12);
    // Source hash lets evals detect an SVG that is stale against its .mmd.
    fs.writeFileSync(path.join(outDir, slug + '.svg'), `<!-- src:${hash} -->\n` + svg);
    console.log('ok  ', slug);
  } catch (e) {
    failed++;
    console.error('FAIL', slug, String(e.message || e).split('\n')[0]);
  }
}
await browser.close();
process.exit(failed ? 1 : 0);
