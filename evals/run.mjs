// Content evals: structure, length, relation-graph consistency, diagram freshness, zh-TW usage.
// Usage: node evals/run.mjs [--partial] [--json]
//   --partial  allow terms in data/term-list.json that are not written yet (warnings, not errors)
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import yaml from 'js-yaml';
import OpenCC from 'opencc-js';
import { countUnits } from '../src/lib/count.mjs';

const root = path.resolve(import.meta.dirname, '..');
const partial = process.argv.includes('--partial');
const asJson = process.argv.includes('--json');
const list = JSON.parse(fs.readFileSync(path.join(root, 'data/term-list.json'), 'utf8'));
const listed = new Map(list.terms.map((t) => [t.slug, t]));
const termDir = path.join(root, 'src/content/terms');
const mmdDir = path.join(root, 'diagrams');
const svgDir = path.join(root, 'src/generated/diagrams');

const LIMITS = { summaryMax: 40, introMin: 180, introMax: 220, relatedMin: 3 };
const RELATIONS = ['is-a', 'part-of', 'uses', 'runs', 'enables', 'prerequisite', 'contrasts', 'related'];
const SYMMETRIC = ['contrasts'];
// Mainland vocabulary that reads as non-Taiwanese in Traditional script.
const MAINLAND = { 信息: '資訊', 軟件: '軟體', 程序: '程式', 默認: '預設', 用戶: '使用者', 文檔: '文件', 網絡: '網路', 服務器: '伺服器', 代碼: '程式碼', 接口: '介面', 視頻: '影片', 項目: '專案', 調用: '呼叫', 運行: '執行', 質量: '品質', 數據庫: '資料庫', 內存: '記憶體', 硬件: '硬體', 屏幕: '螢幕', 鼠標: '滑鼠', 搜索: '搜尋', 創建: '建立', 支持: '支援' };
const SLOP = ['總而言之', '值得注意的是', '在當今', '扮演著重要的角色', '扮演重要角色', '賦能', '一站式', '不可或缺', '革命性', '顛覆', '眾所周知'];
const toTw = OpenCC.Converter({ from: 'cn', to: 'tw' });

const issues = []; // { slug, level: 'error'|'warn', check, msg }
const add = (slug, level, check, msg) => issues.push({ slug, level, check, msg });

function parse(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  return { data: yaml.load(m[1]), body: m[2].trim(), raw };
}

// Strip labels so only node ids remain, then pick the ids that are glossary slugs.
export function diagramRefs(code, slugs) {
  let s = code.replace(/%%.*$/gm, '')
    .replace(/"[^"]*"/g, ' ')
    .replace(/\|[^|]*\|/g, ' ')
    .replace(/--[^->\n]*?-->/g, '-->').replace(/-\.[^\n]*?\.->/g, '-->').replace(/==[^=>\n]*?==>/g, '-->');
  for (let i = 0; i < 4; i++) s = s.replace(/\[[^\[\]]*\]|\([^()]*\)|\{[^{}]*\}/g, ' ');
  s = s.replace(/^\s*(flowchart|graph|sequenceDiagram|stateDiagram(-v2)?|classDiagram|direction)\b.*$/gm, ' ');
  const ids = new Set(s.match(/[a-z0-9]+(?:-[a-z0-9]+)*/g) || []);
  return [...ids].filter((id) => slugs.has(id));
}

const files = fs.readdirSync(termDir).filter((f) => f.endsWith('.md'));
const terms = new Map();
for (const f of files) {
  const slug = f.replace(/\.md$/, '');
  const p = parse(path.join(termDir, f));
  if (!p) { add(slug, 'error', 'frontmatter', '無法解析 frontmatter'); continue; }
  terms.set(slug, p);
}
const allSlugs = new Set([...listed.keys(), ...terms.keys()]);

// 1. Coverage against the canonical list
for (const slug of listed.keys()) if (!terms.has(slug)) add(slug, partial ? 'warn' : 'error', 'coverage', '名單中的名詞尚未撰寫');
for (const slug of terms.keys()) if (!listed.has(slug)) add(slug, 'error', 'coverage', '條目不在 data/term-list.json，新增名詞請先加入名單');

// 2. Per-term checks
for (const [slug, { data: d, body, raw }] of terms) {
  for (const k of ['term', 'zh', 'category', 'summary', 'when_to_use', 'related', 'diagram_caption', 'sources', 'last_verified'])
    if (d[k] === undefined || d[k] === '' || d[k] === null) add(slug, 'error', 'fields', `缺少欄位 ${k}`);
  if (listed.has(slug) && d.category !== listed.get(slug).category) add(slug, 'error', 'fields', `類別 ${d.category} 與名單 ${listed.get(slug).category} 不符`);

  const su = countUnits(d.summary || '');
  if (su > LIMITS.summaryMax) add(slug, 'error', 'length', `簡述 ${su} 字，上限 ${LIMITS.summaryMax}`);
  const iu = countUnits(body);
  if (iu < LIMITS.introMin || iu > LIMITS.introMax) add(slug, 'error', 'length', `介紹 ${iu} 字，需在 ${LIMITS.introMin}–${LIMITS.introMax}`);
  if (body.split(/\n\s*\n/).length > 1) add(slug, 'warn', 'length', '介紹超過一段');

  const rel = Array.isArray(d.related) ? d.related : [];
  if (rel.length < LIMITS.relatedMin) add(slug, 'error', 'relations', `相關名詞 ${rel.length} 個，至少 ${LIMITS.relatedMin}`);
  const seen = new Set();
  for (const r of rel) {
    if (!RELATIONS.includes(r.rel)) add(slug, 'error', 'relations', `未知關係 ${r.rel}`);
    if (r.slug === slug) add(slug, 'error', 'relations', '關係指向自己');
    if (seen.has(r.slug)) add(slug, 'error', 'relations', `重複關係 ${r.slug}`);
    seen.add(r.slug);
    if (!allSlugs.has(r.slug)) add(slug, 'error', 'relations', `相關名詞 ${r.slug} 不存在於名單`);
    else if (!terms.has(r.slug)) add(slug, partial ? 'warn' : 'error', 'relations', `相關名詞 ${r.slug} 尚未撰寫`);
  }

  for (const s of d.sources || []) if (!/^https:\/\//.test(s.url || '')) add(slug, 'error', 'sources', `來源不是 https：${s.url}`);
  if ((d.needs_verification || []).length) add(slug, 'warn', 'facts', `⚠️ 需查證 ${d.needs_verification.length} 項：${d.needs_verification.join('；')}`);

  // Diagram: exists, references only related terms, rendered SVG is fresh
  const mmd = path.join(mmdDir, slug + '.mmd');
  if (!fs.existsSync(mmd)) add(slug, 'error', 'diagram', '缺少 diagrams/' + slug + '.mmd');
  else {
    const code = fs.readFileSync(mmd, 'utf8');
    const refs = diagramRefs(code, allSlugs).filter((x) => x !== slug);
    const relSet = new Set(rel.map((r) => r.slug));
    for (const x of refs) if (!relSet.has(x)) add(slug, 'error', 'diagram', `圖例引用 ${x}，但它不在 related`);
    if (refs.length < 2) add(slug, 'warn', 'diagram', `圖例只引用 ${refs.length} 個相關名詞（節點 id 要用 slug）`);
    const svg = path.join(svgDir, slug + '.svg');
    const hash = createHash('sha1').update(code).digest('hex').slice(0, 12);
    if (!fs.existsSync(svg)) add(slug, 'error', 'diagram', '圖例尚未渲染（npm run diagrams）');
    else if (!fs.readFileSync(svg, 'utf8').startsWith(`<!-- src:${hash} -->`)) add(slug, 'error', 'diagram', '圖例 SVG 與 .mmd 不同步，請重跑 npm run diagrams');
  }

  // Language: Traditional script, Taiwanese vocabulary, no filler phrases
  const text = [d.summary, d.zh, body, d.diagram_caption, d.disambiguation, ...(d.when_to_use || [])].filter(Boolean).join('\n');
  const conv = toTw(text);
  const simp = new Set();
  for (let i = 0; i < text.length; i++) if (text[i] !== conv[i]) simp.add(text[i]);
  if (simp.size) add(slug, 'error', 'zh-tw', `含簡體字：${[...simp].join('')}`);
  for (const [cn, tw] of Object.entries(MAINLAND)) if (text.includes(cn)) add(slug, 'warn', 'zh-tw', `用語「${cn}」，台灣慣用「${tw}」`);
  for (const p of SLOP) if (text.includes(p)) add(slug, 'warn', 'style', `套話「${p}」`);
}

// 3. Graph-level checks
const incoming = new Map([...terms.keys()].map((s) => [s, 0]));
for (const [slug, { data }] of terms) for (const r of data.related || []) {
  if (incoming.has(r.slug)) incoming.set(r.slug, incoming.get(r.slug) + 1);
  if (SYMMETRIC.includes(r.rel) && terms.has(r.slug)) {
    const back = (terms.get(r.slug).data.related || []).find((x) => x.slug === slug);
    if (!back || back.rel !== r.rel) add(slug, 'error', 'relations', `${r.rel} 是對稱關係，${r.slug} 也要寫 ${r.rel} ${slug}`);
  }
}
for (const [slug, n] of incoming) if (n === 0) add(slug, partial ? 'warn' : 'error', 'relations', '沒有任何名詞連到它（孤兒節點）');

// Report
const errors = issues.filter((i) => i.level === 'error');
const warns = issues.filter((i) => i.level === 'warn');
const summary = { written: terms.size, listed: listed.size, errors: errors.length, warnings: warns.length };
fs.mkdirSync(path.join(root, 'evals/out'), { recursive: true });
fs.writeFileSync(path.join(root, 'evals/out/content-report.json'), JSON.stringify({ summary, issues }, null, 1));
if (asJson) console.log(JSON.stringify({ summary, issues }, null, 1));
else {
  const byCheck = {};
  for (const i of issues) (byCheck[i.check] ??= []).push(i);
  for (const [k, v] of Object.entries(byCheck)) {
    const shown = v.filter((i) => i.level === 'error' || !(k === 'coverage' || /尚未撰寫|孤兒/.test(i.msg)));
    const hidden = v.length - shown.length;
    console.log(`\n[${k}] ${v.filter((i) => i.level === 'error').length} errors, ${v.filter((i) => i.level === 'warn').length} warnings${hidden ? ` (${hidden} 個未撰寫相關的警告已省略)` : ''}`);
    for (const i of shown) console.log(`  ${i.level === 'error' ? '✗' : '!'} ${i.slug}: ${i.msg}`);
  }
  console.log(`\n寫好 ${summary.written}/${summary.listed} · ${summary.errors} errors · ${summary.warnings} warnings`);
}
process.exit(errors.length ? 1 : 0);
