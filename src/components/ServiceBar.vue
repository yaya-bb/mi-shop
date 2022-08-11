<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting iconfont">&#xe715;</span>预约请求服务</li>
        <li><span class="icon-7day iconfont">&#xe61f;</span>7天无理由退货</li>
        <li><span class="icon-15day iconfont">&#xe606;</span>15天免费退换货</li>
        <li><span class="icon-post iconfont">&#xe600;</span>满150元免费包邮</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ServiceBar'
}
</script>
<style lang="scss">
  @import './../assets/scss/mixin.scss';
  .service {
    padding: 33px 0;
    color: #666;
    font-size: 16px;
    li {
      display: inline-block;
      width: 24.6%;
      text-align: center;
      border-right: 1px solid #e5e5e5;
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 8px;
      }
      .icon-setting {
        @include bgImg(20px,20px);
      }
      .icon-7day {
        @include bgImg(20px,20px);
      }
      .icon-15day {
        @include bgImg(20px,20px);
      }
      .icon-post {
        @include bgImg(20px,20px);
      }
    }
  }
</style>
