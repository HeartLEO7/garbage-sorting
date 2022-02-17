import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
const Home = () => import('../views/Home/index.vue')
// 登录
const Login = () => import('../views/Login/index.vue')
// 礼品兑换
const Exchange = () => import('../views/Exchange/index.vue')
const ExchangeDetail = () => import('../views/Exchange/detail.vue')
// 个人中心
const Personal = () => import('../views/Personal/index.vue')
const Record = () => import('../views/Personal/PersonalComponent/record.vue')
const Message = () => import('../views/Personal/PersonalComponent/message.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/exchange', component: Exchange, children: [] },
  { path: '/exchange_detail', component: ExchangeDetail },
  {
    path: '/personal',
    component: Personal,
    children: [
      { path: '/record', component: Record },
      { path: '/message', component: Message }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const token = localStorage.token
  if (!token && to.path === '/personal') return next('/login')
  next()
})

export default router
