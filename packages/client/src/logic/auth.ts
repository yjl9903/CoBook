import { CoBookClient } from '@cobook/shared';
import { defineStore } from 'pinia';

import { baseURL } from '~cobook';
import { fingerprint } from './fingerprint';

export const useAuthStore = defineStore('authorization', {
  state: () => {
    return {
      fingerprint: '',
      pass: ''
    };
  },
  getters: {
    client: (state) => new CoBookClient(baseURL, state.pass, state.fingerprint)
  },
  persist: true
});

export async function authorized() {
  const store = useAuthStore();
  return store.pass !== '' && store.fingerprint !== '' && (await store.client.validate());
}

export async function login(pass: string) {
  const store = useAuthStore();
  store.fingerprint = (await fingerprint()).visitorId;
  const client = new CoBookClient(baseURL, pass, store.fingerprint);
  if (await client.validate()) {
    store.pass = pass;
    return true;
  } else {
    return false;
  }
}
