import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Login from '@/view/Login'
import HomePage from '@/components/home_page'
import Layout from '@/layouts/layout'



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: "用户登录"
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        title: "用户登录"
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        title: "XXX管理系统"
      }
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout
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
