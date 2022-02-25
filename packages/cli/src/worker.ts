import type { WranglerConfig } from '@miniflare/shared';
import path from 'path';
import format from 'date-fns/format';
import { debug as createDebug } from 'debug';
import { Miniflare } from 'miniflare';

import type { CoBookOption } from './types';

const debug = createDebug('cobook:cli');

export async function initWorker(option: CoBookOption) {
  const wrangler = option.wrangler;

  if (!wrangler?.account_id) {
    throw new Error(`You must set account_id in wrangler`);
  }

  const config: WranglerConfig = {
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

  const mf = new Miniflare({
    scriptPath: path.join(option.workerRoot, 'index.js'),
    ...config
  });

  return mf;
}

function isDef<T>(obj: T | undefined | null): obj is T {
  return obj !== undefined && obj !== null;
}
