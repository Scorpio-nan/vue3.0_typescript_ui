import { defineComponent } from 'vue-demi';

export interface IconProps {}
type IconType = {
  (props: IconProps): JSX.Element;
  props: typeof props;
};

const props: DefineProps<IconProps> = {};

const defineIcon = <T,>() => {
  const cp = defineComponent(function Icon(props: IconProps, { slots }) {
    return () => {
      return <>{slots.default?.()}</>;
    };
  });
  cp.props = props;
  cp.inheritAttrs = false;
  return cp;
};

export const Icon = defineIcon<any>() as unknown as IconType;
