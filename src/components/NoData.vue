<template>
  <div class="NoData">
    <img src="../../public/imgs/icon-no-data.png" alt="">
    <p>当前暂无提交的订单记录</p>
  </div>
</template>
<script>
export default {
  name: 'NoData'
}
</script>
<style lang="scss" scoped>
  .NoData {
    text-align: center;
    font-size: 20px;
    color: #999;
    margin: 50px 0;
    img {
      width: 240px;
      height: 180px;
      margin-bottom: 30px;

    }
  }
</style>
