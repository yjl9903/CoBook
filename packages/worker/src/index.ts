import { Request } from 'itty-router';

import { createRouter } from './router';
import { createLog, listLogs } from './service';
import { makeResponse } from './utils';

const router = createRouter((router) => {
  router.get('/', () => {
    return makeResponse('Hello, this is CoBook.');
  });

  router.get('/account/log', async () => {
    return listLogs();
  });

  // TODO: valiate
  router.post('/account/log', async (request: Request) => {
    const content = await request.json!();
    return createLog(content);
  });
});

addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request));
});
