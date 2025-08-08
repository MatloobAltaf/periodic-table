export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  period: number;
  group: number;
  category: ElementCategory;
  electronConfiguration: string;
  meltingPoint?: number;
  boilingPoint?: number;
  density?: number;
  discoveryYear?: number;
  discoveredBy?: string;
  applications: string[];
  description: string;
  state: 'solid' | 'liquid' | 'gas' | 'unknown';
  shells: number[];
}

export type ElementCategory = 
  | 'alkali-metals'
  | 'alkaline-earth-metals'
  | 'transition-metals'
  | 'post-transition-metals'
  | 'metalloids'
  | 'nonmetals'
  | 'halogens'
  | 'noble-gases'
  | 'lanthanides'
  | 'actinides';

export interface FilterOptions {
  category?: ElementCategory;
  state?: 'solid' | 'liquid' | 'gas' | 'unknown';
  discoveryPeriod?: 'ancient' | 'medieval' | 'modern' | 'contemporary';
}