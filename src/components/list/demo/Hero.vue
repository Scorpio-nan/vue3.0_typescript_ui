<template>
  <div class="hero">
    <h4>{{ props.modelValue.name }}</h4>
  </div>
</template>
<script lang="ts" setup>
/* eslint-disable no-undef */

interface ItemProps {
  modelValue: {
    id: number;
    name: string;
  };
}

const props = defineProps<ItemProps>();
</script>
<style scoped lang="less">
.hero {
  border: 1px solid #eee;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 10px;
  h4 {
    margin: 0;
    padding: 0;
  }
}
</style>
