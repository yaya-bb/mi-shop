<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import Loading from '../components/Loading.vue';
export default {
  name: 'alipay',
  components: {
    Loading
  },
  data() {
    return {
      orderId: this.$route.query.orderNo,
      content: '',
      loading: true
    }
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      // 调接口
      // 收到后返回数据写在then里面
      this.axios.post('/pay', {
        orderId: this.orderId,
          orderName: 'Vue高仿小米商城',
          // 单位元
          amount: 0.01,
          // 1.支付宝， 2.微信
          payType: 1
      }).then((res) => {
        this.content = res.content;
        setTimeout(() => {
          // 表示提交第一个表单到服务器去
          document.forms[0].submit();
        }, 100)
      })
    }
  }
}
</script>
