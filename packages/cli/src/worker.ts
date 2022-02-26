import type { WranglerConfig } from '@miniflare/shared';
import path from 'path';
import { writeFileSync, unlinkSync } from 'fs';
import format from 'date-fns/format';
import { Miniflare } from 'miniflare';
import json2toml from 'json2toml';
import execa from 'execa';
import { debug as createDebug } from 'debug';

import { version } from '../package.json';

import type { CoBookOption } from './types';
import { isDef } from './utils';

const debug = createDebug('cobook:cli');

type Require = 'name' | 'account_id' | 'type' | 'compatibility_date';

type ResolvedWranglerConfig = Required<Pick<WranglerConfig, Require>> &
  Omit<WranglerConfig, Require>;

export function resolveWorkerOption(option: CoBookOption): ResolvedWranglerConfig {
  const wrangler = option.wrangler;

  if (!wrangler?.account_id) {
    throw new Error(`You must set account_id in wrangler`);
  }

  const config: ResolvedWranglerConfig = {
    name: wrangler.name ?? 'cobook-worker',
    account_id: wrangler.account_id!,
    type: wrangler.type ?? 'javascript',
    compatibility_date: wrangler.compatibility_date ?? format(new Date(), 'yyyy-MM-dd')
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

  debug(config);

  return config;
}

export async function initWorker(option: CoBookOption) {
  const wrangler = resolveWorkerOption(option);

  const mf = new Miniflare({
    scriptPath: path.join(option.workerRoot, 'index.js'),
    ...wrangler
  });

  return mf;
}

export async function publishWorker(option: CoBookOption) {
  const wrangler = resolveWorkerOption(option);
  const toml = json2toml(wrangler);
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
