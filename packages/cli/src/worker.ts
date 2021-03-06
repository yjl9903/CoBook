import type { WranglerConfig } from '@miniflare/shared';
import path from 'path';
import { writeFileSync, unlinkSync } from 'fs';
import format from 'date-fns/format';
import { Miniflare } from 'miniflare';
import { stringify } from '@iarna/toml';
import execa from 'execa';
import { debug as createDebug } from 'debug';

import { version } from '../package.json';

import type { CoBookCliOption } from './types';
import { isDef } from './utils';

const debug = createDebug('cobook:cli');

const DefaultKVNamespace = 'ACCOUNT';

type Require =
  | 'name'
  | 'account_id'
  | 'type'
  | 'compatibility_date'
  | 'vars'
  | 'kv_namespaces'
  | 'durable_objects';

type ResolvedWranglerConfig = Required<Pick<WranglerConfig, Require>> &
  Omit<WranglerConfig, Require>;

export function resolveWorkerOption(option: CoBookCliOption): ResolvedWranglerConfig {
  const wrangler = option.wrangler;

  if (!wrangler?.account_id) {
    throw new Error(`You must set account_id in wrangler!`);
  }
  if (!wrangler?.kv) {
    throw new Error(`You must set kv in wrangler!`);
  }
  if (!wrangler?.url) {
    throw new Error(`You must set url in wrangler!`);
  }
  if (!process.env.AUTH) {
    if (option.mode === 'dev') {
      process.env.AUTH = '123456';
      debug(`You must set environment variables: AUTH!`);
      debug(`Default AUTH: ${process.env.AUTH}`);
    } else {
      throw new Error(`You must set environment variables: AUTH!`);
    }
  }

  const config: ResolvedWranglerConfig = {
    name: wrangler.name ?? 'cobook-worker',
    account_id: wrangler.account_id!,
    type: wrangler.type ?? 'javascript',
    compatibility_date: wrangler.compatibility_date ?? format(new Date(), 'yyyy-MM-dd'),
    vars: {
      AUTH: process.env.AUTH
    },
    kv_namespaces: [
      {
        binding: DefaultKVNamespace,
        id: wrangler.kv
      }
    ],
    durable_objects: {
      bindings: []
    }
  };

  if (isDef(wrangler.zone_id)) {
    config.zone_id = wrangler.zone_id;
  }
  if (isDef(wrangler.workers_dev)) {
    config.workers_dev = wrangler.workers_dev;
  }
  if (isDef(wrangler.route)) {
    config.route = wrangler.route;
  }
  if (isDef(wrangler.routes)) {
    config.routes = wrangler.routes;
  }
  if (isDef(wrangler.compatibility_flags)) {
    config.compatibility_flags = wrangler.compatibility_flags;
  }
  if (isDef(wrangler.vars)) {
    for (const key in wrangler.vars) {
      config.vars[key] = wrangler.vars[key];
    }
  }
  if (isDef(wrangler.kv_namespaces)) {
    config.kv_namespaces.push(...wrangler.kv_namespaces);
  }
  if (isDef(wrangler.durable_objects?.bindings)) {
    config.durable_objects.bindings.push(...wrangler.durable_objects.bindings);
  }

  debug(config);

  return config;
}

export async function initWorker(port: number, option: CoBookCliOption) {
  const wrangler = resolveWorkerOption(option);
  option.wrangler!.url = `http://localhost:${port}`;

  const mf = new Miniflare({
    scriptPath: path.join(option.workerRoot, 'index.js'),
    bindings: wrangler.vars,
    kvNamespaces: [DefaultKVNamespace],
    port,
    watch: true,
    ...wrangler
  });

  return mf;
}

export async function publishWorker(option: CoBookCliOption) {
  const wrangler = resolveWorkerOption(option);
  // @ts-ignore
  const toml = stringify(wrangler);
  const wranglerPath = path.join(option.workerRoot, 'wrangler.toml');
  writeFileSync(wranglerPath, toml, 'utf-8');
  debug(toml);

  const pkg = {
    name: wrangler.name,
    version,
    private: true,
    main: './index.js'
  };
  const pkgPath = path.join(option.workerRoot, 'package.json');
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf-8');
  debug(pkg);

  console.log(`$ wrangler publish`);
  await execa('wrangler', ['publish'], {
    cwd: option.workerRoot,
    stdio: 'inherit',
    env: { CF_ACCOUNT_ID: option?.wrangler?.account_id }
  });

  unlinkSync(wranglerPath);
  unlinkSync(pkgPath);
}
