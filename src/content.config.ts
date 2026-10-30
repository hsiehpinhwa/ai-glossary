import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import list from '../data/term-list.json';

const categoryIds = list.categories.map((c) => c.id) as [string, ...string[]];

// Relation vocabulary. Symmetric ones must appear on both terms (checked by evals/run.mjs).
export const RELATIONS = ['is-a', 'part-of', 'uses', 'runs', 'enables', 'prerequisite', 'contrasts', 'related'] as const;

const terms = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/terms' }),
  schema: z.object({
    term: z.string(),
    zh: z.string(),
    aliases: z.array(z.string()).default([]),
    category: z.enum(categoryIds),
    summary: z.string().max(60),
    when_to_use: z.array(z.string()).min(2).max(4),
    related: z.array(z.object({ slug: z.string(), rel: z.enum(RELATIONS) })).min(2),
    diagram_caption: z.string(),
    disambiguation: z.string().optional(),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).min(1),
    needs_verification: z.array(z.string()).default([]),
    last_verified: z.coerce.date(),
    added_in: z.string().default('v1'),
  }),
});

export const collections = { terms };
