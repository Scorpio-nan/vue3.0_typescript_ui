import { ConfigContext } from './ConfigProvider';

export function useConfig() {
  return ConfigContext.inject();
}
