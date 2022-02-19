import { createApp } from 'vue';
import { registerSW } from 'virtual:pwa-register';
import App from './App.vue';
import { router } from './router'

registerSW({});

createApp(App).use(router).mount('#app');
