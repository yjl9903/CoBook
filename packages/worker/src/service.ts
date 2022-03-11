import type { LogItem } from '@cobook/shared';

import { KvStore } from './store';
import { makeResponse, makeErrorResponse } from './utils';

const logStore = new KvStore(ACCOUNT, 'log');

export async function createLog(log: LogItem) {
  if (await logStore.get(log.timestamp)) {
    return makeErrorResponse('Duplicate timestamp');
  } else {
    await logStore.put(log.timestamp, log);
    return makeResponse(log);
  }
}

export async function listLogs() {
  const logs = await logStore.list();
  return makeResponse({ logs, timestamp: new Date().toISOString() });
}
