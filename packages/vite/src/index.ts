import type { Plugin } from 'vite';
import { debug as createDebug } from 'debug';
import { RawCoBookOption } from '@cobook/shared';

const debug = createDebug('cobook:vite');

export function createCoBookPlugin(): Plugin {
  let config: Omit<Required<RawCoBookOption>, 'wrangler'> | undefined = undefined;

  return {
    name: 'cobook',
    configResolved(resolvedConfig) {
      // @ts-ignore
      config = resolvedConfig.cobook;
      if (!config) {
        config = {
          template: [],
          categories: [],
          tags: []
        };
      }
      debug(config);
    },
    resolveId(id) {
      if (id === '~cobook') {
        return '~cobook.json';
      }
    },
    load(id) {
      if (id === '~cobook.json') {
        return JSON.stringify(config, null, 2);
      }
    }
  };
}

export default createCoBookPlugin;
