// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
// 样式也需引入
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
import 'styles/iconfont.css'
// import ElementUI from 'element-ui' // element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'// element-ui的css
// Vue.component(Message);
// Vue.use(ElementUI) // 使用elementUI
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
// 将这个对象扩展进来
// Vue.use(VueLazyload, {
//   // 全局配置
//   loading: '/imgs/loading-svg/loading-bars.svg'
// })
Vue.config.productionTip = false
Vue.prototype.$message = Message

// 发请求需要设置基础值，baseURL根据前端的跨域方式做调整
// CORS跨域、JSONP跨域用http:://www....;接口代理直接写/api
// 开发阶段用mock
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall'
axios.defaults.baseURL = '/api'
// 超出时间一定要进行设置
axios.defaults.timeout = 8000
// 接口错误拦截————拦截器,response是axios的插件并不代表接口返回来的值
// function拦截业务异常
axios.interceptors.response.use(function(response) {
  // 取到接口的值
  let res = response.data
  // 哈希路由:#/+''
  let path = location.hash
  // 状态码等于0表示成功

  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    // 在首页不进行跳转，除首页外的页面需要跳转到登录页面
    if (path !== '#/index') {
      // 接口错误机制拦截，10表示未登录，则跳转到登录界面
      window.location.href = '/#/login'
    } else {
      // alert(res.msg)
      Message.warning(res.msg)
      // 使用promise.reject抛出异常
      return Promise.reject(res)
    }
  }
}, (error) => {
  // err拦截http协议状态码请求异常
  let res = error.response;
  Message.error(res.data.message);
  // 抛出异常，接口就不会进入到then里面
  return Promise.reject(error);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
