import { defineStore } from 'pinia';

import { AccountItem, AccountPayload } from '@cobook/shared';

import { useAuthStore } from './auth';

export const useAccountStore = defineStore('account', {
  state() {
    return {
      accounts: [] as AccountItem[]
    };
  },
  actions: {
    async init() {
      const authStore = useAuthStore();
      const accounts = await authStore.client.list();
      this.accounts = accounts;
    },
    async push(payload: AccountPayload) {
      const authStore = useAuthStore();
      const account = await authStore.client.create({
        amount: payload.amount,
        category: payload.category,
        tags: payload.tags,
        description: payload.description
      });
      this.accounts.push(account);
    },
    async update(timestamp: string, account: AccountItem) {
      const authStore = useAuthStore();
      const result = await authStore.client.update(timestamp, account);
      const id = this.accounts.findIndex((a) => a.timestamp === timestamp);
      if (id !== -1) {
        this.accounts.splice(id, 1);
        this.accounts.push(result);
        this.accounts.sort((lhs, rhs) => lhs.timestamp.localeCompare(rhs.timestamp));
      }
      return result;
    },
    async delete(account: AccountItem) {
      const authStore = useAuthStore();
      const flag = await authStore.client.delete(account.timestamp);
      if (flag) {
        const id = this.accounts.findIndex((a) => a.timestamp === account.timestamp);
        if (id !== -1) {
          this.accounts.splice(id, 1);
        } else {
          // Error
        }
        return flag;
      } else {
        return false;
      }
    }
  },
  persist: true
});
