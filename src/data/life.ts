import data from './life.json';

/** Types for the editable Life photo journal at src/data/life.json. */
export type LifePhoto = {
  src: string;
  alt?: string;
  location?: string;
  caption?: string;
};
export type LifeAlbum = {
  slug: string;
  title: string;
  category: 'Travel' | 'Campus' | 'Teaching';
  subtitle: string;
  intro: string;
  cover: string;
  coverAlt?: string;
  photos: LifePhoto[];
};
export const albums = data as LifeAlbum[];
