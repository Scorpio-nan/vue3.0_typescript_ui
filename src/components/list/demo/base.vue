<template>
  <div>
    切换布局:
    <RadioGroup v-model:value="mode">
      <RadioButton value="horizontal">horizontal</RadioButton>
      <RadioButton value="vertical">vertical</RadioButton>
      <RadioButton value="grid">grid</RadioButton>
    </RadioGroup>
    <div style="border: 1px solid #eee">
      <List :mode="mode" :gutter="10">
        <list-item v-for="(item, index) in items" :key="item.id" :width="100">
          <Hero v-model="items[index]" />
        </list-item>
      </List>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RadioGroup, RadioButton } from 'ant-design-vue';
import 'ant-design-vue/es/button/style/index.less';
import 'ant-design-vue/es/radio/style/index.less';
import { List, ListItem, ListProps } from 'med-components-antd';
import { ref } from 'vue';
import Hero from './Hero.vue';

const mode = ref<ListProps['mode']>('grid');

const items = ref([
  { id: 1, name: '图片名称1' },
  { id: 2, name: '图片名称2' },
  { id: 3, name: '图片名称3' },
  { id: 4, name: '图片名称4' },
  { id: 5, name: '图片名称5' },
  { id: 6, name: '图片名称6' },
  { id: 7, name: '图片名称7' },
  { id: 8, name: '图片名称8' },
  { id: 9, name: '图片名称9' },
  { id: 10, name: '图片名称10' },
]);
</script>
