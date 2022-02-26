import type { Plugin } from 'vite';
import { debug as createDebug } from 'debug';

const debug = createDebug('cobook:vite');

export function createCoBookPlugin(): Plugin {
  let config;
  
  return {
    name: 'cobook',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      debug(config);
    }
  };
}

export default createCoBookPlugin;
