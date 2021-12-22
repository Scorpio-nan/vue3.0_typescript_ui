<template>
  <Filter isSingleLine>
    <Form layout="inline" :model="formState" ref="formRef">
      <FormItem label="活码名称">
        <Input v-model:value="formState.name" placeholder="请输入活码名称" />
      </FormItem>
      <FormItem label="活码数量">
        <Input v-model:value="formState.num" placeholder="请输入活码数量" />
      </FormItem>
      <FormItem label="码类型">
        <Select v-model:value="formState.type" placeholder="请选择">
          <SelectOption value="1">哈哈1</SelectOption>
          <SelectOption value="1">哈哈2</SelectOption>
        </Select>
      </FormItem>
      <FormItem label="状态">
        <Select v-model:value="formState.state" placeholder="请选择">
          <SelectOption value="1">有</SelectOption>
          <SelectOption value="2">无</SelectOption>
        </Select>
      </FormItem>
      <FormItem label="活码数量">
        <Input v-model:value="formState.num" placeholder="请输入活码数量" />
      </FormItem>
    </Form>
    <template #filterButton>
      <!-- 多行情况下，查询和重置写这里-->
      <Button type="primary" html-type="submit">查询</Button>
      <Button :style="{ marginLeft: '8px' }" @click="resetForm">重置</Button>
      <!-- 多行情况下，查询和重置写这里-->
    </template>
  </Filter>
</template>
<script lang="ts" setup>
import { Filter } from 'med-components-antd';
import {
  Form,
  FormItem,
  Input,
  Select,
  SelectOption,
  Button,
} from 'ant-design-vue';
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

const resetForm = () => {
  formState.name = '';
  formState.type = undefined;
  formState.state = undefined;
  formState.num = 0;
};
</script>
