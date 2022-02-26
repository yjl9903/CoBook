import { build, createServer, Plugin } from 'vite';
import type { CoBookOption } from './types';
import { RawBuildOptions, RawDevOptions } from './options';

export async function resolveViteOption(option: CoBookOption) {}

export async function createViteServer(option: CoBookOption, rawOptions: RawDevOptions) {
  const server = await createServer({
    root: option.clientRoot,
    logLevel: 'warn',
    plugins: [createPlugin(option)]
  });

  return server;
}

export async function buildVite(option: CoBookOption, rawOptions: RawBuildOptions) {
  await build({
    root: option.clientRoot,
    build: {
      emptyOutDir: rawOptions.emptyOutDir,
      outDir: rawOptions.outDir
    },
    plugins: [createPlugin(option)]
  });
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
