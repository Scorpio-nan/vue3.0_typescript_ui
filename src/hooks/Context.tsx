import { inject, InjectionKey, provide } from 'vue-demi';

export function createContext<T>(initialValue: T, description?: string) {
  const injectKey: InjectionKey<T> = Symbol(description);
  return {
    inject() {
      return inject(injectKey, initialValue);
    },
    provide(val: T) {
      return provide(injectKey, val);
    },
  };
}
