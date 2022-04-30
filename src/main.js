// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//  引入Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
//  将模板放到el中
//  给实例注册组件导入的根组件App
//  将组件放到模板中

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
