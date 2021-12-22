import { useCssVars } from 'vue';
import { computedSize, createBlock } from '@/utils';
import { defineComponent, SetupContext, Suspense } from 'vue-demi';
import { ListItem } from './ListItem';
import './styles/List.less';
import { ListProps } from './types';
import { ListContext } from './context';

type ListType = {
  <T>(props: ListProps): JSX.Element;
  props: typeof props;
  Item: typeof ListItem;
};

const props: DefineProps<ListProps> = {
  mode: String,
  gutter: [Number, String],
};

const defineList = <T,>() => {
  function setup(props: ListProps, { slots }: SetupContext) {
    const cls = createBlock('med-list');
    ListContext.provide(props);
    const gutter = computedSize(props.gutter, 0);
    useCssVars(() => ({
      'med-list-gutter': `${gutter.value / 2}px`,
    }));
    return () => {
      return (
        <Suspense>
          <div
            class={cls('list', {
              horizontal: props.mode === 'horizontal',
              vertical: props.mode === 'vertical',
              grid: props.mode === 'grid',
            })}
            style={{
              margin: `-${gutter.value / 2}px`,
            }}
          >
            {slots.default?.()}
          </div>
        </Suspense>
      );
    };
  }
  return defineComponent({
    name: 'List',
    inheritAttrs: false,
    props,
    setup,
  });
};

export const List = defineList<any>() as unknown as ListType;
List.Item = ListItem;
