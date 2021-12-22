import { createContext } from '@/hooks/Context';
import { defineComponent, Suspense } from 'vue-demi';

// 定义组件props
export interface IProps {
  projectName?: string;
  iconfont?: string;
}
// 定义组件emits
type ConfigProviderEmits = {};

export type ConfigProviderProps = IProps & EmitsToProps<ConfigProviderEmits>;
// 完整组件定义
type ConfigProviderType = {
  (props: ConfigProviderProps): JSX.Element;
  props: typeof props;
  emits: ConfigProviderEmits;
};
// 实现组件props
const props: DefineProps<IProps> = {
  projectName: String,
  iconfont: String,
};

export const ConfigContext = createContext<IProps>(
  {
    projectName: 'med',
  },
  'ConfigProvider',
);

const defineConfigProvider = <T,>() => {
  const cp = defineComponent(function ConfigProvider(
    props: ConfigProviderProps,
    { slots },
  ) {
    ConfigContext.provide(props);
    return () => {
      return (
        <Suspense>
          {{
            default: () => <>{slots.default?.()}</>,
            fallback: () => <>loading</>,
          }}
        </Suspense>
      );
    };
  });
  cp.props = props;
  cp.inheritAttrs = false;
  return cp;
};

export const ConfigProvider =
  defineConfigProvider<any>() as unknown as ConfigProviderType;
