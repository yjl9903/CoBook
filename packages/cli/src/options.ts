import path from 'path';
import { existsSync } from 'fs';

export interface RawBuildOptions {
  outDir: string;
  emptyOutDir: boolean;
  force: boolean;
}

export interface RawDevOptions {
  port: number;
  host: boolean;
}

export async function resolveOptions() {
  return {
    appRoot: await getAppRoot(),
    workerRoot: await getWorkerRoot()
  };
}

async function getAppRoot() {
  const paths = [path.join(__dirname, '../../app'), path.join(__dirname, '../app')];
  for (const p of paths) {
    if (existsSync(path.join(p, 'package.json'))) {
      return p;
    }
  }
  throw new Error('Can not find web app');
}

async function getWorkerRoot() {
  const paths = [path.join(__dirname, '../../worker/dist'), path.join(__dirname, '../worker')];
  for (const p of paths) {
    if (existsSync(path.join(p, 'index.js'))) {
      return p;
    }
  }
  throw new Error('Can not find web app');
}
