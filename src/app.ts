import { RequestConfig, request as API } from 'umi';

import { API_HOST } from '@/config';
import { getToken } from '@/helpers';

// powered by https://umijs.org/plugins/plugin-initial-state
// IInvalidInitState will be used to redirect page in layout
export function getInitialState() {
  console.log('getInitialState', getToken());
  if (!getToken()) {
    Promise.resolve('LOGIN_REQUIRED');
  }

  console.log(1113);
  return API('/user', {
    method: 'get',
  }).then(
    res => {
      console.log(123213, res);
      if (res.success) {
        return res.data;
      }
      return 'LOGIN_REQUIRED';
    },
    () => 'LOGIN_REQUIRED',
  );
}

interface APPHeaders {
  Authorization: string;
}

// powered by https://umijs.org/plugins/plugin-request
// have token specifid in custom header
export const request: RequestConfig = {
  prefix: API_HOST,
  middlewares: [
    (ctx, next) => {
      const token = getToken();
      if (!token) {
        return next();
      }
      if (!ctx.req.options.headers) {
        ctx.req.options.headers = {};
      }
      (ctx.req.options.headers as APPHeaders &
        HeadersInit).Authorization = token;

      return next();
    },
  ],
};
