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
        requireSignin: false,
        layout: "BLANK",
      },
      {
        path: '/dashboard/analysis',
        component: '@/pages/dashboard/analysis',
        title: 'analysis',
        access: 'canReadDashboardAnalysis',
        requireSignin: true,
        layout: "PRO_LAYOUT",
      },
      { path: '/products', component: '@/pages/products' },
      {
        path: '/user',
        component: '../layouts/UserLayout',
        requireSignin: false,
        layout: "BLANK",
        routes: [
          // {
          //   path: '/user',
          //   redirect: '/user/login',
          // },
          {
            name: 'login',
            path: '/user/login',
            component: '@/pages/user/login',
            requireSignin: false,
            layout: "BLANK",
          },
          {
            name: 'loginPage',
            path: '/user/login/login2',
            component: '@/pages/user/login/login2',
            requireSignin: false,
            layout: "BLANK",
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
