import { ConfigProvider } from 'med-components-antd';
import { defineComponent } from 'vue-demi';
import { useConfig } from '../useConfig';

const Child = defineComponent({
  setup() {
    const config = useConfig();
    return () => {
      return (
        <p>
          当前配置信息:
          <pre>{JSON.stringify(config, null, 2)}</pre>
        </p>
      );
    };
  },
});

export default defineComponent({
  setup() {
    return () => (
      <ConfigProvider projectName="med-components">
        <Child />
      </ConfigProvider>
    );
  },
});
