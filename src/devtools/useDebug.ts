import { getCurrentInstance } from 'vue-demi';

export function useDebug(name: string, value: any) {
  const instance = getCurrentInstance() as any;
  if (!instance) return;
  if (!instance.provides) {
    instance.provides = {};
  }
  instance.provides[name] = value;
}
