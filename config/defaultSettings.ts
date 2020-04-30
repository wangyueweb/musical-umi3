export interface DefaultSettings {
  /**
   * primary color of ant design
   */
  navTheme: string; // theme for nav menu
  primaryColor: string; // primary color of ant design
  layout: string;  // nav menu position: sidemenu or topmenu
  contentWidth: string; // layout of content: Fluid or Fixed, only works when layout is topmenu
  fixedHeader: boolean; // sticky header
  autoHideHeader: boolean; // auto hide header
  fixSiderbar: boolean; // sticky siderbar
  title: string;
  pwa: boolean;
  menu: {
    disableLocal: boolean,
  };
  // Your custom iconfont Symbol script Url
  // eg：//at.alicdn.com/t/font_1039637_btcrd5co4w.js
  // 注意：如果需要图标多色，Iconfont 图标项目里要进行批量去色处理
  // Usage: https://github.com/ant-design/ant-design-pro/pull/3517
  iconfontUrl: string;
  colorWeak: boolean;
}

export default {
  navTheme: 'dark',
  primaryColor: '#1890FF',
  layout: 'sidemenu',
  contentWidth: 'Fluid',
  fixedHeader: false,
  autoHideHeader: false,
  fixSiderbar: false,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'Ant Design Pro',
  pwa: false,
  iconfontUrl: '',
} as DefaultSettings;
