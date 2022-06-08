
import router from "./index"
import dynamicRotuer from "./router-all-dynamic"

let isAddRouter = false;
router.beforeEach((to, from, next) => {
  if (to.meta.name) {
    document.title = to.meta.name
  }
  if (!isAddRouter) {
    isAddRouter = true
    router.addRoutes(dynamicRotuer)
    // 这一行就是解决问题的最终办法, 重新进当前路由
    next({ ...to, replace: true })
  } else {
    next()
  }
})

