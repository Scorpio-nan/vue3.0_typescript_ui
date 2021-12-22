<template>
  <DemoComponent :value="123" @ok="onChange" />
</template>

<script lang="ts" setup>
import { DemoComponent } from 'med-components-antd';

const onChange = (v: string) => {
  console.log('base.vue:8', v);
};
</script>
