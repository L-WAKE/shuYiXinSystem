import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Login from '@/view/Login'
import Layout from '@/layouts/layout'
import nopage from '@/view/404'




Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        name: "用户登录"
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        name: "用户登录"
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        name: "首页"
      }
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      meta: {
        name: "XXX管理系统"
      }
    },
    {
      path: '*',
      name: '404',
      component: nopage,
      meta: {
        name: "404"
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = window.localStorage.getItem('login') ? true : false
  if (isLogin) {
    next()
  } else {
    if (to.path == '/Login') {
      next();
    } else {
      next('/Login')
    }
  }
})

export default router
