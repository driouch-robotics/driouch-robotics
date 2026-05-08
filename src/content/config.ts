import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    supervisor: z.string().optional(),
    club: z.string().optional(),
    institution: z.string().optional(),
    domain: z.string().optional(),
    coverImage: z.string().optional(),
    images: z.array(z.string()).optional(), // هادا السطر الجديد باش يقبل بزاف دالتصاور
    tags: z.array(z.string()).optional(),
    team: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
