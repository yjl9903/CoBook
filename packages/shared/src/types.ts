import type { WranglerConfig } from '@miniflare/shared';

export interface RawCoBookConfig {
  template?: Template[];

  tags?: Array<string | ColorItem>;

  categories?: Array<string | ColorItem>;

  wrangler?: WranglerConfig & { kv: string };
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

export interface AccountItem {
  amount: number;

  category: string;

  tags: string[];

  description: string;

  fingerprint: string;

  timestamp: string;
}
