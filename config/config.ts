import { defineConfig } from 'umi';
import pageRoutes from './router.config';
// import defaultSettings from './defaultSettings';
import theme from './theme';

// const { primaryColor } = defaultSettings;

// ref: https://umijs.org/config/
export default defineConfig({
  // treeShaking: true,

  // // Theme for antd
  // // https://ant.design/docs/react/customize-theme-cn
  // theme: {
  //   'primary-color': primaryColor,
  // },

  // define: {
  //   APP_TYPE: process.env.APP_TYPE || '',
  // },
  // // history: 'hash', // 默认是 browser
  // ignoreMomentLocale: true,
  // lessLoaderOptions: {
  //   javascriptEnabled: true,
  // },
  // disableRedirectHoist: true,
  // outputPath: './dist',
  // hash: true,
  // manifest: {
  //   basePath: '/',
  // },
  // extraBabelPlugins:[
  //   ['import', { libraryName: 'antd-mobile', style: true }]  //按需加载antd-mobile样式文件
  // ],
  hash: true,
  mock: {
    exclude: ['mock/**/_*.[jt]s'],
  },
  theme,
  antd: {},
  dva: {},
  routes: pageRoutes,
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
  },
});
