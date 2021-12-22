<template>
  <div>
    <div style="margin-bottom: 20px">
      <button @click="expandAll(true)">展开全部</button> &nbsp;
      <button @click="expandAll(false)">折叠全部</button> &nbsp; <br />
      <button @click="checkAll(true)">选择全部</button> &nbsp;
      <button @click="checkAll(false)">取消选择全部</button> &nbsp; <br />
      <button @click="setExpandedKeys()">设置展开项</button> &nbsp;
      <button @click="getExpandedKeys()">获取展开项</button> &nbsp;<br />
      <button @click="setCheckedKeys()">设置选中项</button> &nbsp;
      <button @click="getCheckedKeys()">获取选中项</button> &nbsp;
    </div>
    <Tree
      v-model:checkedKeys="checkedKeys"
      v-model:expandedKeys="expandedKeys"
      v-model:selectedKeys="selectedKeys"
      ref="treeRef"
      :tree-data="list"
      checkable
      :fieldNames="{
        children: 'children',
        title: 'name',
        key: 'id',
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import { Tree } from 'med-components-antd';
import { ref, watch, unref } from 'vue';
import { data } from './data';
import type { TreeActionType } from 'med-components-antd';

const checkedKeys = ref<string[]>(['0']);
const expandedKeys = ref<string[]>(['0', '1', '0-0', '0-1']);
const selectedKeys = ref<string[]>(['0']);
const list = ref(data);
const treeRef = ref<TreeActionType>();

watch(expandedKeys, () => {
  console.log('expandedKeys', expandedKeys);
});
watch(selectedKeys, () => {
  console.log('selectedKeys', selectedKeys);
});
watch(checkedKeys, () => {
  console.log('checkedKeys', checkedKeys);
});

function getTree() {
  const tree = unref(treeRef);
  if (!tree) {
    throw new Error('tree is null!');
  }
  return tree as TreeActionType;
}

/**
 * 展开/折叠全部
 */
const expandAll = (checkall: boolean): void => {
  const tree = getTree();
  tree.expandAll(checkall);
};

/**
 * 选择/取消选择全部
 */
const checkAll = (checkall: boolean): void => {
  const tree = getTree();
  tree.checkAll(checkall);
};

/**
 * 设置展开项的 keys
 */
const setExpandedKeys = (): void => {
  const tree = getTree();
  tree.setExpandedKeys(['0', '1', '3', '0-1']);
};

/**
 * 获取展开项的 keys
 */
const getExpandedKeys = (): void => {
  const tree = getTree();
  const keys = tree.getExpandedKeys();
  alert(JSON.stringify(keys));
};

/**
 * 设置选中项
 */
const setCheckedKeys = (): void => {
  const tree = getTree();
  tree.setCheckedKeys(['0-1', '1', '3-0-1']);
};

/**
 * 获取选中项
 */
const getCheckedKeys = (): void => {
  const tree = getTree();
  const keys = tree.getExpandedKeys();
  alert(JSON.stringify(keys));
};
</script>
