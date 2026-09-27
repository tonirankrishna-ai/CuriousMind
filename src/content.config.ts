import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const comics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/comics' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    genre: z.enum(['origin', 'adventure', 'mystery', 'suspense', 'horror']).optional(),
    featured: z.boolean().default(false),
  }),
});

const photos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string(),
    category: z.enum(['all', 'street', 'nature', 'people', 'places']).default('all'),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    status: z.enum(['completed', 'ongoing', 'planned']).default('planned'),
    github: z.string().optional(),
    demo: z.string().optional(),
    videoUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    videoId: z.string(),
    duration: z.string().optional(),
    category: z.enum(['process', 'animation', 'comics', 'photography']).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { comics, photos, projects, videos };
