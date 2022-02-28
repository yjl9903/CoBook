import type { Plugin } from 'vite';
import { debug as createDebug } from 'debug';
import { RawCoBookConfig, transformConfig } from '@cobook/shared';

const debug = createDebug('cobook:vite');

export function createCoBookPlugin(): Plugin {
  let config: Omit<Required<RawCoBookConfig>, 'wrangler'>;

  return {
    name: 'cobook',
    enforce: 'pre',
    configResolved(resolvedConfig) {
      // @ts-ignore
      config = transformConfig(resolvedConfig.cobook);
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
