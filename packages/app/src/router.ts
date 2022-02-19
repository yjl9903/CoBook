import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';

export const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '上传'
      }
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

routes.beforeEach((to) => {
  if (!!to.meta.title) {
    // @ts-ignore
    document.title = to.meta.title;
  }
});
