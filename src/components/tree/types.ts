import type { TreeDataItem } from 'ant-design-vue/es/tree/Tree';

export type CheckKeys =
  | KeyType[]
  | { checked: string[] | number[]; halfChecked: string[] | number[] };

export interface TreeState {
  expandedKeys: KeyType[];
  selectedKeys: KeyType[];
  checkedKeys: CheckKeys;
  checkStrictly: boolean;
}

export interface TreeItem extends TreeDataItem {
  icon?: any;
}

export interface FieldNames {
  children?: string;
  title?: string;
  key?: string;
}

export type KeyType = string | number;

export interface PropsCallback {
  active: boolean;
  checkable: boolean | undefined;
  checked: boolean | undefined;
  children: Array<any>;
  data: any;
  dataRef: any;
  disableCheckbox: boolean | undefined;
  disabled: boolean | undefined;
  expanded: boolean | undefined;
  halfChecked: boolean | undefined;
  id?: string | number;
  isLeaf?: boolean | undefined;
  key?: string | number;
  loading?: boolean;
  name?: string;
  selectable?: boolean;
  selected: boolean | undefined;
}

export interface TreeActionType {
  checkAll: (checkAll: boolean) => void;
  expandAll: (expandAll: boolean) => void;
  setExpandedKeys: (keys: KeyType[]) => void;
  getExpandedKeys: () => KeyType[];
  setSelectedKeys: (keys: KeyType[]) => void;
  getSelectedKeys: () => KeyType[];
  setCheckedKeys: (keys: CheckKeys) => void;
  getCheckedKeys: () => CheckKeys;
  filterByLevel: (level: number) => void;
}
