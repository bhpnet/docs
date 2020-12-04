import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'BHP',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  description:'BHP Documents',
  locales:[['en-US', 'English'], ['zh-CN', '中文']],
  ssr: {},
  exportStatic: {},
  base: '/doc',
  publicPath: '/doc/',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs: {
    // 多语言 key 值需与 locales 配置中的 key 一致
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/bhpnet/bhp',
      },
    ],
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/bhpnet/bhp',
      },
    ],
  },
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/guide': [
      {
        title: 'Introduction',
        children: ['guide/index', 'guide/getting-started'],
      },
    ],
    // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
    '/zh-CN/guide': [
      {
        title: '介绍',
        children: ['guide/index', 'guide/getting-started'],
      }
    ],
  },
});
