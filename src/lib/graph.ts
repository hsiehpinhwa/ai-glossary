import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide, forceX, forceY } from 'd3-force';
import { categories, type Term } from './terms';

export interface GNode { id: string; label: string; zh: string; cat: string; x: number; y: number; deg: number }
export interface GLink { s: GNode; t: GNode }

// Layout runs at build time with a seeded random source, so the SVG is static and stable between builds.
// Each category is pulled toward its own sector of an ellipse, so the sky reads as nine constellations.
export function layout(terms: Term[], W: number, H: number, opts = { spread: 0.36, charge: -320, collide: 34, link: 70 }) {
  const ids = new Set(terms.map((t) => t.id));
  const catIndex = new Map(categories.map((c, i) => [c.id, i]));
  const nodes = terms.map((t) => {
    const a = ((catIndex.get(t.data.category) ?? 0) / categories.length) * Math.PI * 2 - Math.PI / 2;
    return { id: t.id, label: t.data.term, zh: t.data.zh, cat: t.data.category, ax: W / 2 + Math.cos(a) * W * opts.spread, ay: H / 2 + Math.sin(a) * H * opts.spread, x: 0, y: 0, deg: 0 };
  });
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const seen = new Set<string>();
  const raw: { source: string; target: string }[] = [];
  for (const t of terms) for (const r of t.data.related) {
    if (!ids.has(r.slug)) continue;
    const k = [t.id, r.slug].sort().join('|');
    if (seen.has(k)) continue;
    seen.add(k); raw.push({ source: t.id, target: r.slug });
    byId.get(t.id)!.deg++; byId.get(r.slug)!.deg++;
  }
  let seed = 1; const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const sim = forceSimulation(nodes as any).randomSource(rand)
    .force('link', forceLink(raw as any).id((d: any) => d.id).distance(opts.link).strength(0.4))
    .force('charge', forceManyBody().strength(opts.charge))
    .force('collide', forceCollide(opts.collide))
    .force('x', forceX((d: any) => d.ax).strength(0.07))
    .force('y', forceY((d: any) => d.ay).strength(0.07))
    .force('center', forceCenter(W / 2, H / 2))
    .stop();
  for (let i = 0; i < 400; i++) sim.tick();
  for (const n of nodes) { n.x = Math.max(40, Math.min(W - 40, n.x)); n.y = Math.max(30, Math.min(H - 30, n.y)); }
  const links: GLink[] = raw.map((l: any) => ({ s: byId.get(l.source.id ?? l.source)!, t: byId.get(l.target.id ?? l.target)! }));
  return { nodes: nodes as GNode[], links };
}
