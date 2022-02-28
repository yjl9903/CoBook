import { AccountItem } from '@cobook/shared';
import { KvStore } from './store';
import { makeResponse, makeErrorResponse } from './utils';

const accountStore = new KvStore(ACCOUNT, 'account');

export async function createAccount(item: AccountItem) {
  if (await accountStore.get(item.timestamp)) {
    return makeErrorResponse('Duplicate timestamp');
  } else {
    await accountStore.put(item.timestamp, item);
    return makeResponse(item);
  }
}

export async function updateAccount(timestamp: string | undefined, item: AccountItem) {
  if (timestamp && (await accountStore.get(timestamp))) {
    if (item.timestamp !== timestamp) {
      await accountStore.remove(timestamp);
    }
    await accountStore.put(item.timestamp, item);
    return makeResponse(item);
  } else {
    return makeErrorResponse('Not Found');
  }
}

export async function deleteAccount(timestamp?: string) {
  if (timestamp && (await accountStore.get(timestamp))) {
    await accountStore.remove(timestamp);
    return makeResponse({});
  } else {
    return makeErrorResponse('Not Found');
  }
}

export async function listAccounts() {
  const accounts = await accountStore.list();
  return makeResponse({ accounts });
}
