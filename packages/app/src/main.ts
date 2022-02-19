import { createApp } from 'vue';
import { registerSW } from 'virtual:pwa-register';
import App from './App.vue';

registerSW({});

createApp(App).mount('#app');
