import { Request } from 'itty-router';

import { createRouter } from './router';
import { createAccount, deleteAccount, listAccounts, updateAccount } from './service';
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
    const content = await request.json!();
    return createAccount(content);
  });

  router.put('/account', async (request: Request) => {
    const content = await request.json!();
    return updateAccount(content);
  });

  router.delete('/account/:id', async (request: Request) => {
    const id = request.params?.id;
    return deleteAccount(id);
  });
});

addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request));
});
