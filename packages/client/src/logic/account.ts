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
    }
  },
  persist: true
});
