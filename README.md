---
home: true
contributors: true
---

## 底层类库

- [vue3](https://github.com/vuejs/vue-next)
- [antd-design-vue](https://github.com/vueComponent/ant-design-vue)
- [vueuse](https://github.com/vueuse/vueuse)

## 目录规范

注意大小写

```bash
├─ package.json
├─ docs/                            // 文档首页
|  ├─ menu.js                       // 文档目录
├─ src/
|  ├─ index.ts
│  ├─ components/                   // 组件目录
│  │  ├─ index.ts                   // 导出所有组件
│  │  ├─ table/                     // 单个组件目录
│  │  │  ├─ styles/                 // 样式
│  │  │  ├─ __tests__/              // 单元测试
│  │  │  ├─ demo/                   // demo页面，展示文档相关内容
│  │  │  │  ├─ demo.vue             // 展示组件基本用法
│  │  │  │  ├─ xxx.vue              // 展示组件用法2
│  │  │  ├─ index.ts                // 导出单个组件对外暴露的所有接口
│  │  │  ├─ index.md                // 文档入口
│  │  │  ├─ Table.tsx               // 组件定义（文件名大驼峰）
│  │  │  ├─ TableColumn.tsx         // 子组件
│  ├─ hooks/
│  ├─ utils/
│  ├─ devtools/                     // vue-devtools 自定义扩展功能（需要devtools大于6.0版本）
│  ├─ typings/                      // 全局的类型定义
```

## 开发规范

1. 采用提交 pr 的方式进行代码贡献，需要大于一半成员人数的点赞才能 merge
2. 使用 .tsx 开发，禁止使用 template
3. 使用 `componsition-api + provide/inject` 的方式，不允许使用 全局变量（包括但不限于 window 对象，全局唯一 localStorage, sessionStorage 等）,需要操作 storage 请使用 hooks 下的相关函数。
4. 禁止擅自引用其他类库，有需要请提出申请。
5. 禁止出现调用/引用外部数据源的操作
6. 尽可能的少用 any 类型，props 禁止 any，如有必要请用 `unknown` 替代
7. 禁止 props 类型为 `vnode` / `JSX.Element` 类型
8. demo 代码用 `template + setup` 形式书写
9. demo 中必须写成 `import { XXX } from 'med-components-antd'`;
10. 组件要尽可能的解耦，如果接收的数据为数组类型的，尽量底层有一个单个数据操作的子组件。例如 table 组件可以拆分成 table 和 table-row
11. 使用 `BEM` 命名, utils 中有 工具类
12. 使用 `vue-demi` 替代 `vue` 导入
