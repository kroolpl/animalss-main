import { defineCollection, z } from 'astro:content';
import { blogImages } from '../assets/blog';

// Create a schema for valid image keys
const imageKeys = z.enum(Object.keys(blogImages) as [string, ...string[]]);

const poradyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    author: z.string(),
    image: imageKeys,
  })
});

export const collections = {
  'porady': poradyCollection,
}; 