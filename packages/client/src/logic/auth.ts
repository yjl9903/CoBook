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

const useValidStore = defineStore('authorization/valid', {
  state: () => {
    return {
      ok: false
    };
  }
});

export async function authorized() {
  const valid = useValidStore();
  if (valid.ok) return true;
  const store = useAuthStore();
  const flag = store.pass !== '' && store.fingerprint !== '' && (await store.client.validate());
  valid.ok = flag;
  return flag;
}

export async function login(pass: string) {
  const valid = useValidStore();
  const store = useAuthStore();
  store.fingerprint = (await fingerprint()).visitorId;
  const client = new CoBookClient(baseURL, pass, store.fingerprint);
  if (await client.validate()) {
    valid.ok = true;
    store.pass = pass;
    return true;
  } else {
    return false;
  }
}
