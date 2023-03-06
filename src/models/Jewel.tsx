export interface Jewel {
  id: number;
  type: 'ring' | 'necklace' | 'bracelet';
  name: 'string';
  images: [string];
  description: string;
  material: 'string';
  sizes: [number];
  price: number;
}
