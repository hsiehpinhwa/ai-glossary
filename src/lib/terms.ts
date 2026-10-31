import fs from 'node:fs';
import path from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';
import list from '../../data/term-list.json';

export type Term = CollectionEntry<'terms'>;
export const categories = list.categories;

export const REL_ZH: Record<string, string> = {
  'is-a': '是一種', 'part-of': '屬於', uses: '使用', runs: '執行', enables: '促成',
  prerequisite: '先備', contrasts: '對照', related: '相關',
};

// Display order follows data/term-list.json; terms not in the list (added later) go last in their category.
export async function getTerms(): Promise<Term[]> {
  const all = await getCollection('terms');
  const order = new Map(list.terms.map((t, i) => [t.slug, i]));
  return all.sort((a, b) => (order.get(a.id) ?? 1e6) - (order.get(b.id) ?? 1e6) || a.id.localeCompare(b.id));
}

export function diagramSvg(slug: string): string | null {
  const p = path.join(process.cwd(), 'src/generated/diagrams', slug + '.svg');
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8').replace(/^<!--.*?-->\n/, '') : null;
}

// 站內連結都要加上 base（/glossary）
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (path: string) => BASE + path;
