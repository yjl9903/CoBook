/// <reference types="vite/client" />

declare const __FingerprintJS__: string | undefined;

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'virtual:pwa-register' {
  const registerSW: (option: any) => {};
}

declare module '~cobook' {
  import type { Template } from '@cobook/shared';

  const name: string;

  const baseURL: string;

  const template: Template[];
}
