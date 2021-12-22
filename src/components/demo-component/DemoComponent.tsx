import { Button, Input } from 'ant-design-vue';
import { defineComponent, SetupContext } from 'vue-demi';
import 'ant-design-vue/es/input/style/index.less';
import 'ant-design-vue/es/button/style/index.less';

export interface InputProps<T = string | number> {
  value?: T;
}
type InputEmits<T = string | number> = {
  ok: (v: T) => void;
};
type InputType = {
  <T = string | number>(
    props: InputProps<T> & EmitsToProps<InputEmits<T>>,
  ): JSX.Element;
  props: typeof props;
  emits: InputEmits<string | number>;
};

const props: DefineProps<InputProps> = {
  value: null,
};

const defineInput = <T extends string | number>() => {
  return defineComponent({
    props,
    inheritAttrs: false,
    setup(props: InputProps<T>, { emit, slots }: SetupContext<InputEmits<T>>) {
      const onInput = (e: Event) => {
        emit('ok', (e.target as any).value);
      };
      return () => {
        return (
          <>
            <Button type="primary">按钮</Button>
            <Input value={props.value} onInput={onInput} />
          </>
        );
      };
    },
  });
};

export const DemoComponent = defineInput() as unknown as InputType;
