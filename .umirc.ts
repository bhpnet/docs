import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'BHP',
  favicon: 'https://docs.bhpnet.io/default.png',
  logo: 'https://docs.bhpnet.io/default.png',

  outputPath: 'docs-dist',
  description: 'BHP Documents',
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ],
  exportStatic: {},
  base: '/',
  publicPath: '/',
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
      {
        title: 'Concepts',
        children: ['guide/consensus', 'guide/genesis'],
      },
      {
        title: 'Explorer',
        children: ['guide/explorer'],
      },
      {
        title: 'Wallet',
        children: ['guide/wallet', 'guide/metamask'],
      },
    ],
    // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
    '/zh-CN/guide': [
      {
        title: '介绍',
        children: ['guide/index', 'guide/getting-started'],
      },
      {
        title: '概念',
        children: ['guide/consensus', 'guide/genesis'],
      },
      {
        title: '浏览器',
        children: ['guide/explorer'],
      },
      {
        title: '钱包',
        children: ['guide/wallet', 'guide/metamask'],
      },
    ],
    '/developer': [
      {
        title: 'Deploy',
        children: [
          'developer/install',
          'developer/fullnode',
          'developer/remix',
          'developer/truffle',
          'developer/blockscout',
          'developer/verify',
          'developer/local',
        ],
      },
      {
        title: 'Gbhp CLI Client',
        children: [
          'developer/cli/account',
          'developer/cli/attach',
          'developer/cli/console',
          'developer/cli/dump',
          'developer/cli/dumpconfig',
          'developer/cli/dumpgenesis',
          'developer/cli/export',
          'developer/cli/import',
          'developer/cli/init',
          'developer/cli/inspect',
          'developer/cli/js',
          'developer/cli/license',
          'developer/cli/removedb',
          'developer/cli/version',
        ],
      },
      {
        title: 'Tool',
        children: ['developer/tool'],
      },
    ],
    // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
    '/zh-CN/developer': [
      {
        title: '部署',
        children: [
          'developer/install',
          'developer/fullnode',
          'developer/remix',
          'developer/truffle',
          'developer/blockscout',
          'developer/verify',
          'developer/local',
        ],
      },
      {
        title: 'Gbhp 命令行客户端',
        children: [
          'developer/cli/account',
          'developer/cli/attach',
          'developer/cli/console',
          'developer/cli/dump',
          'developer/cli/dumpconfig',
          'developer/cli/dumpgenesis',
          'developer/cli/export',
          'developer/cli/import',
          'developer/cli/init',
          'developer/cli/inspect',
          'developer/cli/js',
          'developer/cli/license',
          'developer/cli/removedb',
          'developer/cli/version',
        ],
      },
      {
        title: '工具',
        children: ['developer/tool'],
      },
    ],
  },
});
