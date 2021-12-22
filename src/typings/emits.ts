import { EmitsOptions, ObjectEmitsOptions } from 'vue-demi';

declare global {
  type EmitsToProps<T extends EmitsOptions> = T extends string[]
    ? {
        [K in string & `on${Capitalize<T[number]>}`]?: (...args: any[]) => any;
      }
    : T extends ObjectEmitsOptions
    ? {
        [K in string &
          `on${Capitalize<string & keyof T>}`]?: K extends `on${infer C}`
          ? T[Uncapitalize<C>] extends null
            ? (...args: any[]) => any
            : (
                ...args: T[Uncapitalize<C>] extends (...args: infer P) => any
                  ? P
                  : never
              ) => any
          : never;
      }
    : Record<string, unknown>;

  type GetRequired<T> = {
    [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K];
  };
  type GetOptional<T> = {
    [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];
  };
  type VuePropType<T> = T extends boolean ? typeof Boolean : any;

  // type DefineProps<P> = Required<
  //   {
  //     [K in keyof GetOptional<P>]: VuePropType<GetOptional<P>[K]>;
  //   } & {
  //     [K in keyof GetRequired<P>]: {
  //       type: VuePropType<GetRequired<P>[K]> | null;
  //       required: true;
  //       default?: any;
  //     };
  //   }
  // >;
  type DefineProps<P> = Required<{
    [K in keyof P]: VuePropType<P[K]>;
  }>;
}
