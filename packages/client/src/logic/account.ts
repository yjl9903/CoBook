import { defineStore } from 'pinia';

import { AccountItem, AccountPayload, DELETE, INSERT, LogItem, UPDATE } from '@cobook/shared';

import { tags } from '~cobook';
import { useAuthStore } from './auth';

const tagSet = new Set(tags.map((t) => t.name));

export const useAccountStore = defineStore('account', {
  state() {
    return {
      _accounts: [] as AccountItem[],
      logs: [] as LogItem[]
    };
  },
  getters: {
    accounts(): AccountItem[] {
      return this._accounts.sort((lhs, rhs) => lhs.timestamp.localeCompare(rhs.timestamp));
    }
  },
  actions: {
    excute(log: LogItem) {
      this.logs.push(log);
      if (log.command === INSERT) {
        log.item.tags = log.item.tags.filter((t) => tagSet.has(t));
        this._accounts.push({ ...log.item });
        return log.item;
      } else if (log.command === UPDATE) {
        for (let i = this._accounts.length - 1; i >= 0; i--) {
          const item = this._accounts[i];
          if (item.timestamp === log.old.timestamp) {
            log.item.tags = log.item.tags.filter((t) => tagSet.has(t));
            this._accounts[i] = { ...log.item };
            return log.item;
          }
        }
        return undefined;
      } else if (log.command === DELETE) {
        for (let i = this._accounts.length - 1; i >= 0; i--) {
          const item = this._accounts[i];
          if (item.timestamp === log.old.timestamp) {
            this._accounts.splice(i, 1);
            return undefined;
          }
        }
        return undefined;
      }
    },
    async init() {
      const authStore = useAuthStore();
      const logs = await authStore.client.list();

      let cur = 0;
      // diff logs
      while (
        cur < logs.length &&
        cur < this.logs.length &&
        this.logs[cur].timestamp === logs[cur].timestamp
      ) {
        cur++;
      }

      if (cur === this.logs.length) {
        while (cur < logs.length) {
          this.excute(logs[cur]);
          cur++;
        }
      } else {
        // crash
      }
    },
    async push(payload: AccountPayload) {
      const authStore = useAuthStore();
      const log = authStore.client.makeInsertLog({
        amount: payload.amount,
        category: payload.category,
        tags: payload.tags,
        description: payload.description
      });
      this.excute(log);
      await authStore.client.create(log);
    },
    async update(timestamp: string, account: AccountItem) {
      const authStore = useAuthStore();
      const old = this._accounts.find((a) => a.timestamp === timestamp);
      if (!!old) {
        const log = authStore.client.makeUpdateLog(old, account);
        this.excute(log);
        await authStore.client.update(log);
      }
    },
    async delete(account: AccountItem) {
      const authStore = useAuthStore();
      const log = authStore.client.makeDeleteLog(account);
      this.excute(log);
      await authStore.client.delete(log);
    }
  },
  persist: true
});
