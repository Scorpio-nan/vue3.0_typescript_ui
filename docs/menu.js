module.exports = [
  // { text: '介绍', link: '/' },
  {
    text: 'demo组件',
    children: [
      {
        text: 'Demo',
        link: '/components/demo-component/',
      },
    ],
  },
  {
    text: '通用',
    children: [
      { text: 'ConfigProvider', link: '/components/config-provider/' },
    ],
  },
  {
    text: '布局',
    children: [
      { text: 'List', link: '/components/list/' },
      { text: 'Filter', link: '/components/Filter/' },
    ],
  },
  {
    text: '数据输入',
    children: [],
  },
  {
    text: '数据展示',
    children: [{ text: 'Tree', link: '/components/tree/' }],
  },
  {
    text: 'hooks',
    children: [
      { text: 'createContextState', link: '/hooks/createContextState/ ' },
    ],
  },
];
