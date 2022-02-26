import { build, createServer } from 'vite';
import type { CoBookOption } from './types';
import { RawBuildOptions, RawDevOptions, resolveOption } from './options';

export async function resolveViteOption(option: CoBookOption) {}

export async function createViteServer(option: CoBookOption, rawOptions: RawDevOptions) {
  const server = await createServer({
    root: option.clientRoot,
    logLevel: 'warn'
  });

  return server;
}

export async function buildVite(option: CoBookOption, rawOptions: RawBuildOptions) {
  await build({
    root: option.clientRoot,
    build: {
      emptyOutDir: rawOptions.emptyOutDir,
      outDir: rawOptions.outDir
    }
  });
}
