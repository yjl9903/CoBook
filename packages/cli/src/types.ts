import type { RawCoBookOption } from '@cobook/shared';

export interface CoBookOption extends RawCoBookOption {
  mode: 'dev' | 'prod';

  root: string;

  clientRoot: string;

  workerRoot: string;
}
