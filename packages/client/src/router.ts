import { createRouter, createWebHistory } from 'vue-router';

import { name } from '~cobook';

import { authorized } from './logic/auth';

import Home from './pages/Home/index.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./pages/Login.vue'),
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./pages/About.vue'),
      meta: {
        title: '关于'
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

router.beforeEach(async (to) => {
  if (to.name === 'Login') {
    return true;
  } else if (await authorized()) {
    return true;
  } else {
    return { name: 'Login' };
  }
});

router.beforeEach((to) => {
  if (!!to.meta.title) {
    // @ts-ignore
    document.title = to.meta.title + ' - ' + name;
  } else {
    document.title = name;
  }
});
