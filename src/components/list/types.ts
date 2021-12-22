import { CSSProperties } from 'vue-demi';

export interface ListProps {
  gutter?: number | string;
  mode?: 'vertical' | 'grid' | 'horizontal';
}
export interface ListItemProps {
  style?: CSSProperties;
  width?: number;
  height?: number;
}
export type ListItemEvents = {
  delete?: () => void;
};
