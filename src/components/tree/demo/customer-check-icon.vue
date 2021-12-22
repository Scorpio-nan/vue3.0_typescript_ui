<template>
  <Tree
    v-model:checkedKeys="checkedKeys"
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    :tree-data="list"
    :showIcon="true"
    :fieldNames="{
      children: 'children',
      title: 'name',
      key: 'id',
    }"
  >
    <template #icon="{ disableCheckbox }">
      <CheckCircleOutlined v-if="!disableCheckbox" style="color: #57a200" />
      <MinusCircleOutlined v-else style="color: #e5e5e5" />
    </template>
  </Tree>
</template>

<script lang="ts" setup>
import { Tree } from 'med-components-antd';
import { ref, watch } from 'vue';
import { data } from './data';
import {
  CheckCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons-vue';

const checkedKeys = ref<string[]>(['0']);
const expandedKeys = ref<string[]>(['0', '1', '0-0', '0-1']);
const selectedKeys = ref<string[]>(['0']);

const list = ref(data);

watch(expandedKeys, () => {
  console.log('expandedKeys', expandedKeys);
});
watch(selectedKeys, () => {
  console.log('selectedKeys', selectedKeys);
});
watch(checkedKeys, () => {
  console.log('checkedKeys', checkedKeys);
});
</script>
