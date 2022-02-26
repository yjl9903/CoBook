import type { RawCoBookOption } from '@cobook/shared';

export interface CoBookOption extends RawCoBookOption {
  mode: 'dev' | 'prod';

  clientRoot: string;

  workerRoot: string;
}
