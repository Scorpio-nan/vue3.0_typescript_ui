import { createContext } from '@/hooks/Context';
import { ListProps } from './types';

export interface ListContextProps extends ListProps {}

export const ListContext = createContext<ListContextProps | undefined>(
  undefined,
);
