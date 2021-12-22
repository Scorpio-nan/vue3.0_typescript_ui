import {
  defineComponent,
  reactive,
  ref,
  computed,
  unref,
  toRaw,
  watchEffect,
  onMounted,
  watch,
} from 'vue';
import { Tree as T } from 'ant-design-vue';
import { treeProps, TreeDataItem } from 'ant-design-vue/lib/tree/Tree';
import 'ant-design-vue/es/tree/style/index.less';
import {
  TreeState,
  TreeItem,
  FieldNames,
  CheckKeys,
  PropsCallback,
} from './types';
import { isArray, difference } from 'lodash-es';
import './style/index.less';

const Tree = defineComponent({
  name: 'ZyTree',
  inheritAttrs: true,
  props: Object.assign(
    {
      /**
       * 自定义参数
       */
      checkboxPosition: '',
    },
    treeProps(),
    T.props,
  ),
  emits: T.emits,
  setup(props, { attrs, slots, emit, expose }) {
    // console.log(props, slots, T);

    const state = reactive<TreeState>({
      checkStrictly: props.checkStrictly,
      expandedKeys: props.expandedKeys || [],
      selectedKeys: props.selectedKeys || [],
      checkedKeys: props.checkedKeys || [],
    });

    const searchState = reactive({
      startSearch: false,
      searchText: '',
      searchData: [] as TreeItem[],
    });

    const treeDataRef = ref<TreeItem[]>([]);

    const getFieldNames = computed((): Required<FieldNames> => {
      const { fieldNames } = props;
      return {
        children: 'children',
        title: 'title',
        key: 'key',
        ...fieldNames,
      };
    });

    const getAllKeys = (list?: TreeDataItem[]): KeyType[] => {
      const keys: string[] = [];
      const treeData = list || unref(treeDataRef);
      const { key: keyField, children: childrenField } = unref(getFieldNames);
      if (!childrenField || !keyField) return keys as KeyType[];

      for (let index = 0; index < treeData.length; index++) {
        const node = treeData[index];
        keys.push(node[keyField]!);
        const children = node[childrenField];
        if (children && children.length) {
          keys.push(...(getAllKeys(children) as string[]));
        }
      }
      return keys as KeyType[];
    };

    const getChildrenKeys = (
      nodeKey: string | number,
      list?: TreeDataItem[],
    ): KeyType[] => {
      const keys: KeyType[] = [];
      const treeData = list || unref(treeDataRef);
      const { key: keyField, children: childrenField } = unref(getFieldNames);
      if (!childrenField || !keyField) return keys;
      for (let index = 0; index < treeData.length; index++) {
        const node = treeData[index];
        const children = node[childrenField];
        if (nodeKey === node[keyField]) {
          keys.push(node[keyField]!);
          if (children && children.length) {
            keys.push(...getAllKeys(children));
          }
        } else {
          if (children && children.length) {
            keys.push(...getChildrenKeys(nodeKey, children));
          }
        }
      }
      return keys as KeyType[];
    };

    const getEnabledKeys = (list?: TreeDataItem[]): KeyType[] => {
      const keys: string[] = [];
      const treeData = list || unref(treeDataRef);
      const { key: keyField, children: childrenField } = unref(getFieldNames);
      if (!childrenField || !keyField) return keys as KeyType[];

      for (let index = 0; index < treeData.length; index++) {
        const node = treeData[index];
        node.disabled !== true &&
          node.selectable !== false &&
          keys.push(node[keyField]!);
        const children = node[childrenField];
        if (children && children.length) {
          keys.push(...(getEnabledKeys(children) as string[]));
        }
      }
      return keys as KeyType[];
    };

    const filterByLevel = (
      level = 1,
      list?: TreeDataItem[],
      currentLevel = 1,
    ) => {
      if (!level) {
        return [];
      }
      const res: (string | number)[] = [];
      const data = list || unref(treeDataRef) || [];
      for (let index = 0; index < data.length; index++) {
        const item = data[index];

        const { key: keyField, children: childrenField } = unref(getFieldNames);
        const key = keyField ? item[keyField] : '';
        const children = childrenField ? item[childrenField] : [];
        res.push(key);
        if (children && children.length && currentLevel < level) {
          currentLevel += 1;
          res.push(...filterByLevel(level, children, currentLevel));
        }
      }
      return res as string[] | number[];
    };

    const getBindValues = computed(() => {
      // console.log(props, '=======');
      return {
        blockNode: true,
        ...attrs,
        ...props,
        expandedKeys: state.expandedKeys,
        selectedKeys: state.selectedKeys,
        checkedKeys: state.checkedKeys,
        checkStrictly: state.checkStrictly,
        filedNames: unref(getFieldNames),
        'onUpdate:expandedKeys': (v: KeyType[]) => {
          state.expandedKeys = v;
          emit('update:expandedKeys', v);
        },
        'onUpdate:selectedKeys': (v: KeyType[]) => {
          state.selectedKeys = v;
          emit('update:selectedKeys', v);
        },
        onCheck: (v: CheckKeys, e: Record<string, any>) => {
          let currentValue = toRaw(state.checkedKeys) as KeyType[];
          if (isArray(currentValue) && searchState.startSearch) {
            const { key } = unref(getFieldNames);
            currentValue = difference(
              currentValue,
              getChildrenKeys(e.node.$attrs.node[key]),
            );
            if (e.checked) {
              currentValue.push(e.node.$attrs.node[key]);
            }
            state.checkedKeys = currentValue;
          } else {
            state.checkedKeys = v;
          }

          const rawVal = toRaw(state.checkedKeys);
          emit('check', rawVal, e);
        },
      };
    });

    function setExpandedKeys(keys: KeyType[]) {
      state.expandedKeys = keys;
    }

    function getExpandedKeys() {
      return state.expandedKeys;
    }
    function setSelectedKeys(keys: KeyType[]) {
      state.selectedKeys = keys;
    }

    function getSelectedKeys() {
      return state.selectedKeys;
    }

    function setCheckedKeys(keys: CheckKeys) {
      state.checkedKeys = keys;
    }

    function getCheckedKeys() {
      return state.checkedKeys;
    }

    function checkAll(checkAll: boolean) {
      state.checkedKeys = checkAll ? getEnabledKeys() : ([] as KeyType[]);
    }

    function expandAll(expandAll: boolean) {
      state.expandedKeys = expandAll ? getAllKeys() : ([] as KeyType[]);
    }

    watchEffect(() => {
      treeDataRef.value = props.treeData as TreeItem[];
    });

    onMounted(() => {
      const level = parseInt(props.defaultExpandLevel);
      if (level > 0) {
        state.expandedKeys = filterByLevel(level);
      } else if (props.defaultExpandAll) {
        expandAll(true);
      }
    });

    watchEffect(() => {
      state.expandedKeys = props.expandedKeys;
    });

    watchEffect(() => {
      state.selectedKeys = props.selectedKeys;
    });

    watchEffect(() => {
      state.checkedKeys = props.checkedKeys;
    });

    watch(
      () => props.value,
      () => {
        state.checkedKeys = toRaw(props.value || []);
      },
    );

    watchEffect(() => {
      state.checkStrictly = props.checkStrictly;
    });

    const instance: Record<string, any> = {
      setExpandedKeys,
      getExpandedKeys,
      setSelectedKeys,
      getSelectedKeys,
      setCheckedKeys,
      getCheckedKeys,
      checkAll,
      expandAll,
      filterByLevel: (level: number) => {
        state.expandedKeys = filterByLevel(level);
      },
    };

    expose(instance);

    const customerClass = (): string => {
      // console.log(props, '===');
      /**
       * icon 默认是显示在左边的, 这里有特殊需求, 要在右边显示
       */
      if (props.checkboxPosition === 'right') {
        return 'med-tree-container-boxright';
      }
      /**
       * 传入自定义icon的时候, 这里需要加上这个类名, 控制样式
       */
      if (props.showIcon) {
        return 'med-tree-container';
      }
      return '';
    };

    return () => {
      const scopeslot: Record<string, Function> = {};
      Object.keys(slots).map((slotKey: string) => {
        scopeslot[slotKey] = (record: PropsCallback) =>
          slots[slotKey]?.(record);
      });

      return (
        <div class={customerClass()}>
          <T {...unref(getBindValues)}>{scopeslot}</T>
        </div>
      );
    };
  },
});

export { Tree };
