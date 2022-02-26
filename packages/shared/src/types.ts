import type { WranglerConfig } from '@miniflare/shared';

export interface RawCoBookConfig {
  template?: Template[];

  tags?: Array<string | ColorItem>;

  categories?: Array<string | ColorItem>;

  wrangler?: WranglerConfig;
}

export interface ColorItem {
  name: string;

  color: string;
}

export interface Template {
  name: string;

  icon: string;

  category: string;

  tags?: string[];

  amount?: number;

  description?: string;
}
