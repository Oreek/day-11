import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    // Tell Astro where to look for blog posts
    loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
    // Schema of the data in each markdown file (using Zod)
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            heroImage: image().optional(),
        }),
});

// Export the collection
export const collections = { blog };