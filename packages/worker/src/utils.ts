interface ResponseOption {
  status: number;
}

export function makeResponse<T extends object>(resp: T, option: ResponseOption = { status: 200 }) {
  return new Response(JSON.stringify({ ...resp, status: 'OK' }), {
    status: option.status,
    headers: {
      'content-type': 'application/json'
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
