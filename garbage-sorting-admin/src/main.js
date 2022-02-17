import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

// 配置请求拦截器，如果token存在则拥有访问数据的权限  访问后端接口时统一带token  后端自己配置了express-jwt
axios.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.token
  return config
}, (err) => {
  console.log('request拦截器出错', err)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
