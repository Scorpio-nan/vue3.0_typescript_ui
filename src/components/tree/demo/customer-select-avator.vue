<template>
  <Tree
    v-model:checkedKeys="checkedKeys"
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    :tree-data="list"
    :showIcon="true"
    :checkable="true"
    :showLine="true"
    checkboxPosition="right"
    :fieldNames="{
      children: 'children',
      title: 'name',
      key: 'id',
    }"
  >
    <template #icon="{ avatar, type }">
      <img :src="avatar" alt="" v-if="avatar" />
      <img
        v-else-if="!avatar && type == '2'"
        src="https://portrait.gitee.com/uploads/avatars/user/3188/9566243_xionan_1638875580.png!avatar60"
        alt=""
      />
    </template>
  </Tree>
</template>

<script lang="ts" setup>
import { Tree } from 'med-components-antd';
import { ref, watch } from 'vue';
import { data } from './data';

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
