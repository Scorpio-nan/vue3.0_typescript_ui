---
map:
  path: /components/demo-component
editLink: true
contributors: true
---

# DemoComponent

贡献者: 华清峰

这是一个 demo 组件,用来演示如何开发一个组件,可以复制本组件目录然后改成你的组件名字

<demo src="./demo/base.vue"
  language="vue"
  title="基本"
  desc="这是一个 demo 组件"></demo>

## Props

| 参数  | 类型                       | 必传 | 描述 | 默认值 |
| ----- | -------------------------- | ---- | ---- | ------ |
| value | `T extends string\|number` |    | 值   |

## Events

| 事件 | 类型             | 描述 |
| ---- | ---------------- | ---- |
| ok   | `(v: T) => void` |
