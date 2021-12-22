---
map:
  path: /components/tree
editLink: true
contributors: true
---

# Tree

贡献者: 元

<demo src="./demo/base.vue"
  language="vue"
  title="基本"
  desc="tree 组件基础用法"></demo>

<demo src="./demo/customer-check-icon.vue"
  language="vue"
  title="自定义icon"
  desc="tree 组件自定义选中和 disable 的 icon "></demo>

<demo src="./demo/customer-select-avator.vue"
  language="vue"
  title="自定义icon"
  desc="tree 组件自定义 icon 和 chexbox 的位置"></demo>

<demo src="./demo/customer-refs-event.vue"
  language="vue"
  title="自定义icon"
  desc="tree 组件调用自定义事件"></demo>

## Descripttion

这个树组件, 是用 `ant-design-vue` 二次封装, Props 和 Emits 基本上是和 `ant-design-vue` 一致, 扩展了一个参数和一些事件, 以及样式控制, 方便业务调用和 ui 收拢;

## Props

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th width="140">值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>checkboxPosition</td>
      <td>树组件的 checkbox 选择框在右边</td>
      <td>String</td>
      <td>' '  |  'right'</td>
    </tr>
  </tbody>
</table>

[与 ant-design-vue Tree props 一致](https://next.antdv.com/components/tree-cn#API)

## Events

[与 ant-design-vue 一致](https://next.antdv.com/components/tree-cn#API)
