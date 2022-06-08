const Home = () => import('@/view/home')
const nopage = () => import('@/view/404')
const Layout = () => import('@/layouts/layout')
const Login = () => import('@/view/Login')
const myHave = () => import('@/view/flow/myHave')
const myTodo = () => import('@/view/flow/myTodo')
const myApply = () => import('@/view/flow/myApply')
const index = () => import('@/view/index/index')
const role = () => import('@/view/role/index')
const user = () => import('@/view/user/index')

const dynamicRotuer = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { name: "用户登录" }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: { name: "用户登录" }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: { name: "首页" }
  },
  {
    path: '/Layout',
    name: 'Layout',
    component: Layout,
    redirect: '/Layout/index',//默认展示页
    children: [
      {
        path: '/Layout/index',
        name: 'index',
        component: index,
        meta: { name: "XXX管理系统" },
      }, {
        path: '/Layout/user',
        name: 'user',
        component: user,
        icon: "pie-chart",
        meta: { name: "用户管理" },
      }, {
        path: '/Layout/role',
        name: 'role',
        component: role,
        icon: "desktop",
        meta: { name: "角色管理" },
      },
      {
        path: '/Layout/myApply',
        name: 'myApply',
        icon: "pie-chart",
        component: myApply,
        meta: { name: "我的申请" }
      }, {
        path: '/Layout/myTodo',
        name: 'myTodo',
        icon: "pie-chart",
        component: myTodo,
        meta: { name: "我的代办" }
      }, {
        path: '/Layout/myHave',
        name: 'myHave',
        icon: "pie-chart",
        component: myHave,
        meta: { name: "我的已办" }
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

export default dynamicRotuer
