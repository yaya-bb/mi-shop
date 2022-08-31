<template>
  <div class="product">
    <product-param>
      <!-- 用v-slot去定义加载哪个插槽 -->
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
  </div>
</template>
<script>
import ProductParam from '../components/ProductParam.vue'
export default {
  name: 'product',
  components: {
    ProductParam
  }
}
</script>
<style lang="scss" scoped>
  .product {
    .h {
      height: 150px;
    }
    button {
      margin-left: 10px;
    }
  }
</style>
