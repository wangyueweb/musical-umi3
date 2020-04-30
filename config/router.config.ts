export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    // authority: ['user', 'admin'],
    routes: [
      { path: '/', component: './index', title: '首页', authority: ['user'], },
      { path: '/me', component: './me', title: '个人中心' },

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
            component: './user/login',
            authority: ['guest']
          },
          {
            name: 'register-result',
            path: '/user/register-result',
            component: './user/register-result',
          },
          {
            name: 'register',
            path: '/user/register',
            component: './user/register',
          },
          {
            component: '404',
          },
        ],
      },

      { component: '404' },
    ],
  },
];
