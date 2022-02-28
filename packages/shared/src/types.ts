import type { WranglerConfig } from '@miniflare/shared';

export interface RawCoBookConfig {
  name: string;

  template?: Template[];

  tags?: Array<string | TagItem>;

  categories?: Array<string | CategoryItem>;

  wrangler?: WranglerConfig & { url: string; kv: string };
}

export interface TagItem {
  name: string;

  color: string;
}

export interface CategoryItem {
  name: string;

  color: string;

  icon: string;
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
