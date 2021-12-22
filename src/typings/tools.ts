export type PickValueType<T, R> = NonNullable<
  {
    [K in keyof T]: T[K] extends R ? K : never;
  }[keyof T]
>;
