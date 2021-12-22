export const defaultPrefix = {
  element: '--',
  modifier: '-',
  modifierValue: '-',
};

interface ElementModify {
  (element: string, modify?: string, ...rest: any[]): string[];
  (element: string, modify?: string[], ...rest: any[]): string[];
  (element: string, modify?: Record<string, any>, ...rest: any[]): string[];
}

export const createBlock = <B extends string>(
  block: B,
  prefix = defaultPrefix,
) => {
  const m: ElementModify = (
    element: string,
    modify: any = {},
    ...rest: string[]
  ) => {
    const modifyObj =
      typeof modify === 'string'
        ? { [modify]: true }
        : Array.isArray(typeof modify)
        ? modify.reduce((p: Record<string, true>, k: string) => {
            p[k] = true;
            return p;
          }, {} as Record<string, true>)
        : modify;
    const keys = Object.keys(modifyObj);
    const classNames = keys.length
      ? keys.map((key) => {
          const val = modifyObj[key];
          if (val === false) {
            return null;
          } else {
            let s = block + prefix.element + element + prefix.modifier + key;
            if (val !== true) {
              s += prefix.modifierValue + val;
            }
            return s;
          }
        })
      : [];
    return [
      block,
      block + prefix.element + element,
      ...classNames,
      ...rest,
    ] as string[];
  };
  return m;
};
