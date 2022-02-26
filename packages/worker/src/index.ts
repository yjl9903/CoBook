import { createRouter } from './router';

const router = createRouter((router) => {
  router.get('/', () => {
    return new Response('Hello.');
  });
});

addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request));
});
