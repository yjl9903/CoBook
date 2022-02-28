import { createApp } from 'vue';
import { Cell, CellGroup, Button, Image } from 'vant';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { registerSW } from 'virtual:pwa-register';
import 'uno.css';

import App from './App.vue';
import { router } from './router';
import Tag from './components/Tag.vue';
import Category from './components/Category.vue';

registerSW({});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
  .component('Category', Category)
  .component('Tag', Tag)
  .use(Cell)
  .use(CellGroup)
  .use(Button)
  .use(Image)
  .use(router)
  .use(pinia)
  .mount('#app');

{
  // Fix mobild scale
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });
  document.addEventListener('dblclick', function (e) {
    e.preventDefault();
  });
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  let lastTouchEnd = 0;
  document.addEventListener(
    'touchend',
    function (event) {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    false
  );
}
