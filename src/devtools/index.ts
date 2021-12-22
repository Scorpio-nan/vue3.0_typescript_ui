import { setupDevtoolsPlugin } from '@vue/devtools-api';
import { App } from 'vue-demi';
import { inspectContext } from './inspectContext';

export default {
  install(app: App) {
    setupDevtoolsPlugin(
      {
        id: 'med-model-devtools',
        label: 'med-model',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        app,
      },
      (api) => {
        api.on.inspectComponent(inspectContext);
      },
    );
  },
};
