import { createApp } from 'vue';
import { Cell, CellGroup, Button } from 'vant';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { registerSW } from 'virtual:pwa-register';
import 'uno.css';

import App from './App.vue';
import { router } from './router';

registerSW({});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(Cell).use(CellGroup).use(Button).use(router).use(pinia).mount('#app');
