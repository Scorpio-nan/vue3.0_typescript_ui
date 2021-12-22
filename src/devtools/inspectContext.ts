import { InspectComponentHandler, showName } from './utils';

export const inspectContext: InspectComponentHandler = (payload) => {
  const { provides } = payload.componentInstance;
  const ownSymbols = Object.getOwnPropertySymbols(provides).reduce((p, key) => {
    return {
      ...p,
      [key]: provides[key],
    };
  }, {} as Record<string | symbol, any>);
  const contexts = {
    ...ownSymbols,
    ...Object.getPrototypeOf(provides),
  };
  [...Object.keys(contexts), ...Object.getOwnPropertySymbols(contexts)].forEach(
    (name, index) => {
      const ctxValue = provides[name];
      payload.instanceData.state.push({
        type: 'Provided',
        key: typeof name === 'string' ? name : showName(name, index.toString()),
        value: ctxValue,
      });
    },
  );
};
