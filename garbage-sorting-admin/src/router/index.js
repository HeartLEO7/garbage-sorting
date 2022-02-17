import Vue from 'vue'
import VueRouter from 'vue-router'

// 登录
const Login = () => import('../views/Login/index.vue')
// 后台主页面
const Home = () => import('../views/Home/index.vue')
// 学生中心
const StuList = () => import('../views/Student/list.vue')
const StuAdd = () => import('../views/Student/add.vue')
const StuEdit = () => import('../views/Student/edit.vue')
// 清洁工中心
const CleanerList = () => import('../views/Cleaner/list.vue')
const CleanerAdd = () => import('../views/Cleaner/add.vue')
const CleanerEdit = () => import('../views/Cleaner/edit.vue')
// 楼幢管理
const HygienicList = () => import('../views/Build/hygienic_list.vue')
const SortList = () => import('../views/Build/sort_list.vue')
const BuildAdd = () => import('../views/Build/add.vue')
const BuildEdit = () => import('../views/Build/edit.vue')
const BuildDetail = () => import('../views/Build/detail.vue')
// 礼品管理
const GiftList = () => import('../views/Exchange/gift_list.vue')
const GiftAdd = () => import('../views/Exchange/gift_add.vue')
const GiftEdit = () => import('../views/Exchange/gift_edit.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/stu_list', component: StuList },
      { path: '/stu_add', component: StuAdd },
      { path: '/stu_edit/:id', component: StuEdit },
      { path: '/build_hygienic_list', component: HygienicList },
      { path: '/build_sort_list', component: SortList },
      { path: '/build_add', component: BuildAdd },
      { path: '/build_edit/:id', component: BuildEdit },
      { path: '/build_detail/:id', component: BuildDetail },
      { path: '/cleaner_list', component: CleanerList },
      { path: '/cleaner_add', component: CleanerAdd },
      { path: '/cleaner_edit/:id', component: CleanerEdit },
      { path: '/gift_list', component: GiftList },
      { path: '/gift_add', component: GiftAdd },
      { path: '/gift_edit/:id', component: GiftEdit }

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
  if (!token) return next('/login')
  next()
})

export default router
