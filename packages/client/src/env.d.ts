/// <reference types="vite/client" />

declare const __FingerprintJS__: string | undefined;

declare const __GITHUB_SHA__: string | undefined;

declare const __VERSION__: string | undefined;

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '~icons/*' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'virtual:pwa-register' {
  const registerSW: (option: any) => {};
}

declare module '~cobook' {
  import type { ColorItem, Template } from '@cobook/shared';

  const name: string;

  const baseURL: string;

  const template: Template[];

  const categories: ColorItem[];

  const tags: ColorItem[];
}
