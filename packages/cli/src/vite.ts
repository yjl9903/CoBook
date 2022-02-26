import { build, createServer, mergeConfig, Plugin, UserConfig } from 'vite';
import { existsSync } from 'fs';
import path from 'path';

import type { CoBookOption } from './types';
import { RawBuildOptions, RawDevOptions } from './options';

export async function resolveViteOption(option: CoBookOption) {
  const config: UserConfig = {};
  if (existsSync(path.join(option.root, 'public'))) {
    config.publicDir = path.join(option.root, 'public');
  }
  return config;
}

export async function createViteServer(option: CoBookOption, rawOptions: RawDevOptions) {
  const server = await createServer(
    mergeConfig(resolveViteOption(option), {
      root: option.clientRoot,
      logLevel: 'warn',
      plugins: [createPlugin(option)]
    })
  );

  return server;
}

export async function buildVite(option: CoBookOption, rawOptions: RawBuildOptions) {
  await build(
    mergeConfig(resolveViteOption(option), {
      root: option.clientRoot,
      build: {
        emptyOutDir: rawOptions.emptyOutDir,
        outDir: rawOptions.outDir
      },
      plugins: [createPlugin(option)]
    })
  );
}

function createPlugin(option: CoBookOption): Plugin {
  return {
    name: 'cobook:config',
    config(config) {
      // @ts-ignore
      config.cobook = option;
    }
  };
}
