<template>
  <div class="OrderHeader">
    <!-- 因为都用了浮动，所以会塌陷，需要清除浮动 -->
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>
          {{title}}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'OrderHeader',
  props: {
    title: String
  },
  computed: {
    ...mapState(['username'])
  }
}
</script>
<style lang="scss" scoped>
  .order-header {
    padding: 30px 0;
    .header-logo {
      float: left;
    }
    .title,.username {
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title {
      font-size: 28px;
      color: #333;
      float: left;
      margin-left: 54px;
      span {
        font-size: 14px;
        margin-left: 17px;
        font-weight: bold;
      }
    }
    .username {
      float: right;
      a {
        color: #666;
        font-size: 16px;
      }
    }
  }
</style>
