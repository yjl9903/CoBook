import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to) => {
  if (!!to.meta.title) {
    // @ts-ignore
    document.title = to.meta.title;
  }
});
