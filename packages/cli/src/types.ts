import type { WranglerConfig } from '@miniflare/shared';

export interface RawCoBookOption {
  template?: Template[];

  wrangler?: WranglerConfig;
}

export interface CoBookOption extends RawCoBookOption {
  clientRoot: string;

  workerRoot: string;
}

export interface Template {
  name: string;
  tags: string[];
}
