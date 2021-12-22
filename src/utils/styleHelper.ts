import { MaybeRef } from '@vueuse/shared';
import { computed, ComputedRef, unref } from 'vue-demi';

export function computedSize(
  size: MaybeRef<string | number | undefined>,
  defaultSize: number,
): ComputedRef<number>;
export function computedSize(
  size?: MaybeRef<string | number | undefined>,
  defaultSize?: number,
): ComputedRef<number | undefined>;
export function computedSize(
  size?: MaybeRef<string | number | undefined>,
  defaultSize?: number,
) {
  return computed(() => {
    const value = unref(size) ?? defaultSize;
    if (typeof value === 'string') {
      return Number(value);
    } else {
      return value;
    }
  });
}
