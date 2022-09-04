<template>
  <div>
    <!-- 动态渲染title名称 -->
    <!-- <order-header v-bind:title="title">
      <template v-slot:tip>
        <span class="tips">{{tip}}</span>
      </template>
    </order-header> -->
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
// import OrderHeader from '../components/OrderHeader.vue'
import ServiceBar from '../components/ServiceBar.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  name: 'order',
  data() {
    return {
      title: '',
      tip: ''
    }
  },
  components: {
    // OrderHeader,
    NavFooter,
    ServiceBar
  },
  mounted() {
    // let path = this.$route.path;
    // 只有刷新后才会进行变化，纯跳转头部顶部不会变化
    // if (path == '/order/confirm') {
    //   this.title = '订单确认';
    //   this.tip = '请认真填写收货地址'
    // } else if (path == '/order/list') {
    //   this.title = '订单列表';
    //   this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>'
    // } else if (path == '/order/pay') {
    //   this.title = '订单支付';
    //   this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>'
    // } else {
    //   this.title = '订单支付';
    //   this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>'
    // }
  }
}
</script>
<style lang="scss" scoped>
  .tips {
    font-size: 12px;
    font-weight: normal;
    color: #333333;
  }
</style>
