import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
    alias: '/h'
  },
  {
    path: '/profile',
    component: () => import('../views/Profile.vue') 
  },
  {
    // 动态路径参数
    path: '/user/:id',
    component: () => import('../views/User.vue'),
    name: 'user'
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router


// router.app 注册 router 的 Vue 实例

// router.mode 使用的模式 hash | history | abstract

// router.currentRoute 当前路由对应的路由信息对象

// router.START_LOCATION  路由初始地址

// router.beforeEach(to, from, next)

// router.beforeResolve(to ,from, next)

// router.afterEach(to, from)


// router.push(location, onComplete, onAbort )
// router.replace(location, obComplete, onAbort)
// router.go(n)
// router.back()
// router.forward()

// 一个路由对象表示当前激活的路由的状态信息，包含 URL 解析得到的信息和 URL 匹配到的路由记录
// 路由对象是不可变得，每次成功导航都会产生一个新的对象

// $route.path 对应当前路由的路径

// $route.params 包含路由参数的对象


// $route.query 路由查询参数对象

// $route.hash 路由的哈希值

// $route.fullPath 包含查询参数和 hash 值的完整路径

// $route.matched

// $route.name 路由的名称

// $route.redirectedFrom 重定向来源的路由名字

// beforeRouteEnter

// beforeRouteUpdate

// beforeRouteLeave