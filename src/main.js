import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import store from './store/store'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css'
import * as echarts from 'echarts';

Vue.prototype.$echarts = echarts

Vue.use(Antd)

Vue.prototype.$axios = axios
Vue.config.productionTip = false




// 跳转时修改标题
router.beforeEach((to, from, next) => {
  if (to.meta.name) {
    document.title = to.meta.name
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
