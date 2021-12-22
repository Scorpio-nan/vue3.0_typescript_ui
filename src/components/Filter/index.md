---
map:
  path: /components/Filter
editLink: true
---

# Filter

此筛选器组件，仅提供布局功能，筛选项和按钮以及状态，都通过插槽传入。
带图文档地址：[筛选器](https://wiki.medcloud.cn/pages/viewpage.action?pageId=90910733)

<demo src="./demo/base_1.vue"
  title="单行布局"
  desc="单行，按钮右对齐"></demo>

<demo src="./demo/base_2.vue"
  title="多行布局"
  desc="两行布局，筛选器按钮跟随item右对其"></demo>

<demo src="./demo/base_3.vue"
  title="按钮单独一行"
  desc="按钮单独一行右对齐"></demo>

## FilterProps

| 名称         | 类型      | 必填 | 默认值  | 说明                 |
| ------------ | --------- | ---- | ------- | -------------------- |
| isSingleLine | `Boolean` |      | `false` | 按钮是否单独另起一行 |

## Slot

| 名称                     | scoped                            | 说明           |
| ------------------------ | --------------------------------- | -------------- |
| filterContent \| default | `(item: T, index: number): VNode` | 筛选内容部分   |
| filterButton             | `(item: T, index: number): VNode` | 筛选器按钮部分 |

