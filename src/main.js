import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import store from './store/store'
import axios from 'axios'
import api from "./api/index"
import './common/css/common.css'
import 'ant-design-vue/dist/antd.css'
import * as echarts from 'echarts'
import VueI18n from 'vue-i18n'

// 从语言包文件中导入语言包对象
import i18n_zh from '../src/assets/international/i18n_zh'
import i18n_en from '../src/assets/international/i18n_en'

//
Vue.prototype.$api = api
Vue.prototype.$echarts = echarts
Vue.use(VueI18n)
Vue.use(Antd)

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$store = store

const messages = {
  zh: {
    ...i18n_zh
  },
  en: {
    ...i18n_en
  },
}

const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages
})


new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
