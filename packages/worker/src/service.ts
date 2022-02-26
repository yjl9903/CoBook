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

export async function listAccounts() {
  const accounts = await accountStore.list();
  return makeResponse({ accounts });
}
