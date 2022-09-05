import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import Index from '@/pages/index.vue'
// import Product from '@/pages/product.vue'
// import Detail from '@/pages/detail.vue'
// import Cart from '@/pages/cart.vue'
// import Login from '@/pages/login.vue'
// import Order from '@/pages/order.vue'
// import OrderConfirm from '@/pages/orderConfirm.vue'
// import OrderList from '@/pages/orderList.vue'
// import OrderPay from '@/pages/orderPay.vue'
// import alipay from '@/pages/alipay.vue'
// import { resolve } from 'core-js/fn/promise'

Vue.use(Router)

// 前端路由按需加载（只拉取需要的），目的防止首屏加载过慢，出现白屏
// 路由懒加载
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // 默认加载首页，所以不需要做按需加载，从其他页面开始
      component: Home,
      redirect: '/index',
      // 这样的方法会一开始把所有文件都加载出来，效率低
      children: [
        {
          // 重定向到首页
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/product/:id',
          name: 'product',
          // resolve是ES6中Promise语法，当成功的时候会得到一个resolve对象，抛出去就认为你是成功的了
          // 通过require去加载页面的组件，里面用resolve把参数抛出去
          // 这样可以实现产品站的按需加载
          // 这是一个箭头函数，当访问产品站的时候，会变相的通过箭头函数require把它加载进来
          // component: resolve => require(['@/pages/index.vue'], resolve)
          // 这个方法需要安装插件 @babel-plugin-syntax-dynamic-important
          component: () => import('@/pages/product.vue')
        },
        {
          path: '/detail/:id',
          name: 'detail',
          // component: resolve => require(['@/pages/detail.vue'], resolve)
          component: () => import('@/pages/detail.vue')

        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // component: resolve => require(['@/pages/login.vue'], resolve)
      component: () => import('@/pages/login.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/pages/cart.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/pages/order.vue'),
      children: [
        {
          path: 'list',
          name: 'order-list',
          component: () => import('@/pages/orderList.vue')
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          component: () => import('@/pages/orderConfirm.vue')
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: () => import('@/pages/orderPay.vue')
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: () => import('@/pages/alipay.vue')
        }
      ]
    }
  ]
})
