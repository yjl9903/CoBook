import path from 'path';
import { existsSync } from 'fs';
import { debug as createDebug } from 'debug'
import { build, createServer, mergeConfig, Plugin, UserConfig } from 'vite';

import type { CoBookCliOption } from './types';
import { RawBuildOptions, RawDevOptions } from './options';

const debug = createDebug('cobook:cli');

export async function resolveViteOption(option: CoBookCliOption) {
  const config: UserConfig = {};
  if (existsSync(path.join(option.root, 'public'))) {
    config.publicDir = path.join(option.root, 'public');
    config.server = {
      fs: {
        allow: [path.join(option.root, 'public')]
      }
    }
  }
  debug(config);
  return config;
}

export async function createViteServer(option: CoBookCliOption, rawOptions: RawDevOptions) {
  const server = await createServer(
    mergeConfig({
      root: option.clientRoot,
      logLevel: 'warn',
      plugins: [createPlugin(option)]
    }, resolveViteOption(option))
  );

  return server;
}

export async function buildVite(option: CoBookCliOption, rawOptions: RawBuildOptions) {
  await build(
    mergeConfig({
      root: option.clientRoot,
      build: {
        emptyOutDir: rawOptions.emptyOutDir,
        outDir: rawOptions.outDir
      },
      plugins: [createPlugin(option)]
    }, resolveViteOption(option))
  );
}

function createPlugin(option: CoBookCliOption): Plugin {
  return {
    name: 'cobook:config',
    config(config) {
      debug(config);
      // @ts-ignore
      config.cobook = option;
    }
  };
}
