/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  effectScope,
  inject,
  InjectionKey,
  onUnmounted,
  provide,
} from 'vue-demi';

export function createContextState<T extends (...args: any[]) => any>(
  stateFactory: T,
) {
  const injectKey: InjectionKey<ReturnType<T>> = Symbol();
  const provider = (...params: Parameters<T>) => {
    const scope = effectScope(true);
    const data = scope.run(() => stateFactory(...params)) as ReturnType<T>;
    provide(injectKey, data);
    onUnmounted(scope.stop);
    return data;
  };
  const injection = () => {
    return inject(injectKey);
  };
  return [provider, injection] as const;
}
