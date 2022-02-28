import type { Plugin } from 'vite';
import { debug as createDebug } from 'debug';
import { RawCoBookConfig, transformConfig } from '@cobook/shared';

const debug = createDebug('cobook:vite');

const VFileName = '~cobook';

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
      if (id === VFileName) {
        return {
          id: VFileName
        };
      }
    },
    load(id) {
      if (id === VFileName) {
        const code: string[] = [];
        for (const key in config) {
          // @ts-ignore
          const value = config[key];
          code.push(`export const ${key} = ${JSON.stringify(value)};`);
        }
        return code.join('\n');
      }
    }
  };
}

export default createCoBookPlugin;
