export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    // wrappers: ['@/pages/Authorized'],
    routes: [
      {
        path: '/',
        component: '@/pages/index',
        title: '首页',
        authority: ['user'],
      },
      {
        path: '/dashboard/analysis',
        component: '@/pages/dashboard/analysis',
        title: 'analysis',
        access: 'canReadAnalysis',
      },
      { path: '/products', component: '@/pages/products' },
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            path: '/user',
            redirect: '/user/login',
          },
          {
            name: 'login',
            path: '/user/login',
            component: '@/pages/user/login',
            authority: ['guest'],
          },
          { component: '@/pages/404' },
          // {
          //   name: 'register-result',
          //   path: '/user/register-result',
          //   component: './user/register-result',
          // },
          // {
          //   name: 'register',
          //   path: '/user/register',
          //   component: './user/register',
          // },
        ],
      },
    ],
  },
];
