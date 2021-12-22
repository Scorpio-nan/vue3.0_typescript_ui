// yarn build 用到的vite配置

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  optimizeDeps: {
    include: [],
    exclude: [],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [vue(), vueJsx()],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'med-components'
    [`med-components-antd`]: resolve('./src'),
    '@': resolve('./src'),
  },
  build: {
    minify: true,
    lib: {
      entry: resolve('./src/index.ts'),
      name: 'med-components-antd',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};
