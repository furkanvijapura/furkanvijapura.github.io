import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    app: z.string(),
    category: z.string(),
    role: z.string(),
    constraints: z.array(z.string()),
    stack: z.array(z.string()),
    storeUrl: z.string().url(),
    playStoreUrl: z.string().url().optional(),
    pressUrl: z.string().url().optional(),
    sourceNote: z.string(),
  }),
});

export const collections = { caseStudies };
