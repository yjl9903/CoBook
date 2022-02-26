import path from 'path';
import { readFileSync, existsSync } from 'fs';
import { debug as createDebug } from 'debug';
import { load } from 'js-yaml';

import type { RawCoBookOption } from '@cobook/shared';
import type { CoBookOption } from './types';

const debug = createDebug('cobook:cli');

export interface RawBuildOptions {
  outDir: string;
  emptyOutDir: boolean;
  force: boolean;
}

export interface RawDevOptions {
  port: number;
  host: boolean;
}

export async function resolveOption(
  mode: CoBookOption['mode'],
  root: string = process.cwd()
): Promise<CoBookOption> {
  root = path.resolve(process.cwd(), root);
  debug(`root      : ${root}`);
  const clientRoot = await getClientRoot(root);
  const workerRoot = await getWorkerRoot(root);
  debug(`clientRoot: ${clientRoot}`);
  debug(`workerRoot: ${workerRoot}`);

  const config = getConfig(root);
  debug(config);

  return {
    mode,
    root,
    clientRoot,
    workerRoot,
    ...config
  };
}

function getConfig(root: string): RawCoBookOption {
  return load(readFileSync(path.join(root, 'cobook.yml'), 'utf-8')) as any;
}

async function getClientRoot(root: string) {
  const paths = [
    path.join(root, 'client'),
    path.join(__dirname, '../../client'),
    path.join(__dirname, '../client')
  ];
  for (const p of paths) {
    if (existsSync(path.join(p, 'package.json'))) {
      return p;
    }
  }
  throw new Error('Can not find web app');
}

async function getWorkerRoot(root: string) {
  const paths = [
    path.join(root, 'worker'),
    path.join(root, 'worker/dist'),
    path.join(__dirname, '../../worker/dist'),
    path.join(__dirname, '../worker')
  ];
  for (const p of paths) {
    if (existsSync(path.join(p, 'index.js'))) {
      return p;
    }
  }
  throw new Error('Can not find web app');
}
