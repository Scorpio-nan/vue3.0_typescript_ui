import { createBlock } from '@/utils';
import 'ant-design-vue/es/checkbox/style/index.less';
import { defineComponent, SetupContext, useCssVars } from 'vue-demi';
import { ListContext } from './context';
import './styles/ListItem.less';
import { ListItemEvents, ListItemProps } from './types';

type ListItemType = {
  (props: ListItemProps & EmitsToProps<ListItemEvents>): JSX.Element;
  props: typeof props;
  emits: ListItemEvents;
};

const props: DefineProps<ListItemProps> = {
  style: null,
  width: Number,
  height: Number,
};

const defineListItem = <T,>() => {
  const setup = async (
    props: ListItemProps,
    { slots, emit }: SetupContext<ListItemEvents>,
  ) => {
    const cls = createBlock('med-list');
    const listProps = ListContext.inject();
    if (!listProps) {
      throw new Error('list-item必须用在list内');
    }
    const deleteHandler = () => {
      emit('delete');
    };
    return () => {
      const { style = {} } = props;
      if (listProps.mode !== 'vertical' && props.width) {
        style.width = `${props.width}px`;
      }
      return (
        <div class={cls('item')} onClick={deleteHandler} style={style}>
          {slots.default?.({
            mode: listProps.mode,
            width: props.width,
            height: props.height,
          })}
        </div>
      );
    };
  };
  return defineComponent({
    name: 'ListItem',
    inheritAttrs: false,
    props,
    setup,
  });
};

export const ListItem = defineListItem<any>() as unknown as ListItemType;
