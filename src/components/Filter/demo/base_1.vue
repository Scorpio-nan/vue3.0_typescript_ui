<template>
  <Filter isSingleLine>
    <Form layout="inline" :model="formState" ref="formRef">
      <FormItem label="任务类型名称">
        <Input v-model:value="formState.name" placeholder="请输入" />
      </FormItem>
    </Form>
    <template #filterButton>
      <Button type="primary" html-type="submit">新建</Button>
    </template>
  </Filter>
</template>
<script lang="ts" setup>
import { Filter } from 'med-components-antd';
import { Form, FormItem, Input, Button } from 'ant-design-vue';
import { ref, reactive, UnwrapRef } from 'vue';
import 'ant-design-vue/es/form/style/index.less';
import 'ant-design-vue/es/select/style/index.less';
import 'ant-design-vue/es/input/style/index.less';
import 'ant-design-vue/es/date-picker/style/index.less';
import 'ant-design-vue/es/button/style/index.less';

interface FormState {
  name: string;
  type: undefined;
  state: undefined;
  num: number;
}

const formState: UnwrapRef<FormState> = reactive({
  name: '',
  type: undefined,
  state: undefined,
  num: 0,
});
const formRef = ref();
</script>
