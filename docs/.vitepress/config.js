const base = process.env.NODE_ENV === 'production' ? '/med-components' : '';
const { resolve } = require('path');
const menu = require('../menu');

module.exports = {
  title: 'med-components-antd',
  description: '',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'med-components'
    [`med-components-antd`]: resolve('./src'),
    [`@`]: resolve('./src'),
  },
  base,
  themeConfig: {
    logo: '../logo.png',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'med-components-antd',
        description: '',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        contributors: true,
        editLink: true,
        sidebar: menu,
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },

    // docsRepo: 'https://gitlab.medcloud.cn/infra/med-components-antd',
    docsBranch: 'dev',
    docsDir: 'src',
    // editLinkPattern: ':repo/edit/:branch/:path',

    repo: 'https://gitlab.medcloud.cn/infra/med-components-antd',
    repoLabel: 'Gitlab',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
