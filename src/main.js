import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入字体图标
import 'assets/fonts/iconfont.css'

// 导入全局样式表
import 'assets/css/global.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
