import { createRouter } from './router';
import { createAccount, listAccounts } from './service';

const router = createRouter((router) => {
  router.get('/', () => {
    return new Response('Hello, this is CoBook.');
  });

  router.get('/accounts', async () => {
    return listAccounts();
  });

  // TODO: valiate
  router.post('/account', async (request: Request) => {
    const content = await request.json<any>();
    return createAccount(content);
  });
});

addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request));
});
