import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import store from '../store/store'
import dynamicRotuer from "./router-all-dynamic"

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { name: "用户登录" }
  }
]

const router = new Router({ routes })

let isAddRouter = false;
router.beforeEach((to, from, next) => {
  if (to.meta.name) {
    document.title = to.meta.name
  }
  if (!isAddRouter) {
    isAddRouter = true
    //生成菜单
    store.commit("SET_MEUN", dynamicRotuer)
    router.addRoutes(dynamicRotuer)
    next({ ...to, replace: true })
  } else {
    next()
  }
})

/*解决重复点击路由报错问题*/
// const vueRouterPush = Router.prototype.push
// Router.prototype.push = function push(to) {
//   return vueRouterPush.call(this, to).catch(err => err)
// }
// const vueRouterReplace = Router.prototype.replace
// Router.prototype.replace = function replace(to) {
//   return vueRouterReplace.call(this, to).catch(err => err)
// }

export default router
