import DefaultTheme from 'vitepress/theme'
import DevTools from '@/devtools'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(DevTools)
    return app;
  }
}