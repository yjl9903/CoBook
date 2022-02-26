import { CoBookClient } from '@cobook/shared';
import { defineStore } from 'pinia';

import { baseURL } from '~cobook';
import { fingerprint } from './fingerprint';

const usePassStore = defineStore('authorization', {
  state: () => {
    return {
      pass: ''
    };
  },
  persist: true
});

export async function authorized() {
  const store = usePassStore();
  return store.pass !== '';
}

export async function login(pass: string) {
  const store = usePassStore();
  const client = new CoBookClient(baseURL, pass, (await fingerprint()).visitorId);
  if (await client.validate()) {
    store.pass = pass;
    return true;
  } else {
    return false;
  }
}
