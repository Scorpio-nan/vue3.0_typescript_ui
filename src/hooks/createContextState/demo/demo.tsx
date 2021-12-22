import { Button } from 'ant-design-vue';
import 'ant-design-vue/es/button/style/index.less';
import { createContextState, MaybeRef } from 'med-components-antd';
import { defineComponent, ref } from 'vue-demi';

const userStore = (id?: MaybeRef<number>) => {
  return ref(id);
};

const [provideUserStore, useUserStore] = createContextState(userStore);

export default defineComponent(() => {
  provideUserStore(-10);
  return () => {
    return (
      <>
        <div>
          <Parent initialId={1} />
        </div>
        <div>
          <Parent initialId={10} />
        </div>
        <div>
          <Child />
        </div>
      </>
    );
  };
});

const Parent = defineComponent({
  props: { initialId: Number },
  setup(props) {
    const id = provideUserStore(props.initialId);
    return () => (
      <>
        <div>
          父组件:
          <Button
            onClick={() => {
              id.value = (id.value ?? 0) + 1;
            }}
          >
            {id.value}
          </Button>
        </div>
        <Child />
        <Child />
      </>
    );
  },
});

const Child = defineComponent(() => {
  const id = useUserStore();
  return () => {
    if (!id) return <>没有id不展示</>;
    return (
      <Button
        onClick={() => {
          id.value = (id.value ?? 0) - 1;
        }}
      >
        子组件: {id.value}
      </Button>
    );
  };
});
