import { Router } from 'itty-router';

export const router = Router()

router.options('*', () => addCorsHeaders(new Response(undefined, { status: 204 })))

router.all('*', () => new Response('Not Found.', { status: 404 }))

function addCorsHeaders(response: Response) {
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'authorization, referer, origin, content-type')
  response.headers.set('Access-Control-Max-Age', '3600')
  return response;
}
