import path from 'path';
import { existsSync } from 'fs';
import { debug as createDebug } from 'debug';

const debug = createDebug('cobook:cli');

export interface CommonOptions {
  root: string;
}

export interface RawBuildOptions {
  outDir: string;
  emptyOutDir: boolean;
  force: boolean;
}

export interface RawDevOptions {
  port: number;
  host: boolean;
}

export async function resolveOptions(root: string = process.cwd()) {
  const clientRoot = await getClientRoot(root);
  const workerRoot = await getWorkerRoot(root);
  debug(`clientRoot: ${clientRoot}`);
  debug(`workerRoot: ${workerRoot}`);

  return {
    clientRoot,
    workerRoot
  };
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

async function prepareWorkerRoot(root: string) {}
