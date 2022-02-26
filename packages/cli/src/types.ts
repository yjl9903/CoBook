import type { RawCoBookConfig } from '@cobook/shared';

export interface CoBookCliOption extends RawCoBookConfig {
  mode: 'dev' | 'prod';

  root: string;

  clientRoot: string;

  workerRoot: string;
}
