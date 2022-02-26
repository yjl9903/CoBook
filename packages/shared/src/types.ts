import type { WranglerConfig } from '@miniflare/shared';

export interface RawCoBookOption {
  template?: Template[];

  wrangler?: WranglerConfig;
}

export interface Template {
  name: string;

  tags: string[];
}
