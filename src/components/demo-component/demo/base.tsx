import { DemoComponent } from 'med-components-antd';
import { defineComponent } from 'vue';

export default defineComponent(() => {
  const onOk = () => {
    console.log('base.tsx:5', 'ok');
  };
  return () => {
    return <DemoComponent value={1} onOk={onOk} />;
  };
});
