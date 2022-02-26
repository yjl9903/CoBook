import type { Plugin } from 'vite';

export function createCoBookPlugin(): Plugin {
  return {
    name: 'cobook'
  };
}

export default createCoBookPlugin;
