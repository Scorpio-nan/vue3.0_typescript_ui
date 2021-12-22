import { Context, Hookable } from '@vue/devtools-api';

export const showName = (name: symbol, initial = '') =>
  `Symbol(${name.description ?? initial})`;

export type InspectComponentHandler = Parameters<
  Hookable<Context>['inspectComponent']
>[0];
