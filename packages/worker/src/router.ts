import { Router } from 'itty-router';
import { makeErrorResponse } from './utils';

export function createRouter(builder: (router: Router<Request>) => void) {
  const router = Router();

  router.all('*', (req: Request) => {
    if (req.method !== 'OPTIONS') {
      const pass = req.headers.get('Authorization');
      if (!AUTH) {
        console.log('You must set AUTH!');
        return makeErrorResponse('Unauthorized', {}, { status: 401 });
      } else if (pass !== AUTH) {
        return makeErrorResponse('Unauthorized', {}, { status: 401 });
      }
    }
  });

  builder(router);

  router.options('*', () => addCorsHeaders(new Response(undefined, { status: 204 })));
  router.all('*', () => makeErrorResponse('Not Found', {}, { status: 404 }));

  return router;
}

function addCorsHeaders(response: Response) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set(
    'Access-Control-Allow-Headers',
    'authorization, referer, origin, content-type'
  );
  response.headers.set('Access-Control-Max-Age', '86400');
  return response;
}
