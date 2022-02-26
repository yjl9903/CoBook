import { createRouter } from './router';
import { createAccount, listAccounts } from './service';
import { makeResponse } from './utils';

const router = createRouter((router) => {
  router.get('/', () => {
    return makeResponse('Hello, this is CoBook.');
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
