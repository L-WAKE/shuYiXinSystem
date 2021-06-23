// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import store from './store/store'
import axios from 'axios'

import api from './api'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)

Vue.prototype.$axios = axios
Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.config.productionTip = false
// 跳转时修改标题
router.beforeEach((to, from, next) => {
  if (to.meta.name) {
    document.title = to.meta.name
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
