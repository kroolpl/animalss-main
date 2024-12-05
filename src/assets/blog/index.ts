import type { ImageMetadata } from 'astro';

// Import blog images
import snack from './snack.jpg';
import puppies from './puppies.jpg';
import kotpies from './kotpies.jpg';
import animalsss from './animalsss.jpg';

export const blogImages: Record<string, ImageMetadata> = {
  'snack': snack,
  'puppies': puppies,
  'kotpies': kotpies,
  'animalsss': animalsss,
} as const;

export type BlogImageKey = keyof typeof blogImages; 