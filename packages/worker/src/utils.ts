interface ResponseOption {
  status: number;
}

export function makeResponse<T extends object>(
  resp: T | string,
  option: ResponseOption = { status: 200 }
) {
  const body = typeof resp === 'string' ? { message: resp } : resp;
  return new Response(JSON.stringify({ ...body, status: 'OK' }), {
    status: option.status,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}

export function makeErrorResponse(
  message: string,
  payload: object = {},
  option: ResponseOption = { status: 200 }
) {
  return makeResponse(
    {
      status: 'ERROR',
      message,
      ...payload
    },
    option
  );
}
