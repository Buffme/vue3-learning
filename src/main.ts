import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { components, plugins } from './plugins/elementplus'

const app = createApp(App)

// 按需注册elementplus的组插件
components.forEach(component => {
  app.component(component.name, component)
})
plugins.forEach(plugin => {
  app.use(plugin)
});

app.use(router).use(store).mount('#app')
