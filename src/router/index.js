import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Login from '@/view/Login'
import Layout from '@/layouts/layout'
import nopage from '@/view/404'
import user from '@/view/user/index'
import role from '@/view/role/index'
import index from '@/view/index/index'
import myApply from '@/view/flow/myApply'
import myTodo from '@/view/flow/myTodo'
import myHave from '@/view/flow/myHave'





Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { name: "用户登录" }
    }, {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: { name: "用户登录" }
    }, {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: { name: "首页" }
    }, {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      redirect: '/Layout/index',//默认展示页
      children: [
        {
          path: '/Layout/index',
          name: '/Layout/index',
          component: index,
          meta: { name: "XXX管理系统" },
        }, {
          path: '/Layout/user',
          name: '/Layout/user',
          component: user,
          meta: { name: "用户管理" },
        }, {
          path: '/Layout/role',
          name: '/Layout/role',
          component: role,
          meta: { name: "角色管理" },
        }, {
          path: '/Layout/flow',
          name: '/Layout/flow',
          component: myApply,
          redirect: '/Layout/flow/myApply',//默认展示页
          children: [
            {
              path: '/Layout/flow/myApply',
              name: '/Layout/flow/myApply',
              component: myApply,
              meta: { name: "我的申请" }
            }, {
              path: '/Layout/flow/myTodo',
              name: '/Layout/flow/myTodo',
              component: myTodo,
              meta: { name: "我的代办" }
            }, {
              path: '/Layout/flow/myHave',
              name: '/Layout/flow/myHave',
              component: myHave,
              meta: { name: "我的已办" }
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: nopage,
      meta: { name: "404" }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = window.localStorage.getItem('login') == 'true' ? true : false
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
