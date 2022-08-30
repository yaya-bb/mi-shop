<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import storage from './storage/index.js'
export default {
  name: 'App',
  mounted() {
    // storage.clear('a')
    // 进行获取
    this.getUser()
    this.getCartCount()
  },
  methods: {
    // 如果还没登录，将接口放在navheader就没有意义为空，最终还需要在登录页面把数据存储进去
    // 因此在App.vue入口获取一次以及拉取一次，然后在navheader取一次
    // 拉取用户信息
    getUser() {
      this.axios.get('/user').then((res) => {
        // 保存到vuex里面
        // 如果不加的话刷新后数据不会被保存（为了防止刷新）
        // 因此需要在app.vue再存储一次
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    // 获取商品购物车的数量
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res) => {
        // 保存到vuex里面
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/reset.scss";
  @import "./assets/scss/button.scss";
</style>
