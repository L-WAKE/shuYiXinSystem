import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'admin',
    password: 123456,
    sidebarMenu: []
  },
  mutations: {
    SET_MEUN(state, menu) {
      state.sidebarMenu = menu
    },
    CLEAR_MENU(state) {
      state.sidebarMenu = []
    }
  },
  actions: {},
  getters: {}
})
