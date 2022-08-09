<template>
  <div>
    <div class="header">
      <div class="nav-topbar">
        <div class="container">
          <div class="topbar-menu">
            <a href="javascript:;">小米商城</a>
            <a href="javascript:;">MUI</a>
            <a href="javascript:;">云服务</a>
            <a href="javascript:;">协议规则</a>
          </div>
          <div class="topbar-user">
            <a href="javascript:;">登录</a>
            <a href="javascript:;">注册</a>
            <a href="javascript:;" class="my-cart"><img :src="src1" class="icon-cart">购物车</a>
          </div>
        </div>
      </div>
      <div class="nav-header">
        <!-- 先定义大结构 -->
        <div class="container">
          <div class="header-logo">
            <a href="/#/index"></a>
          </div>
          <div class="header-menu"></div>
          <div class="header-search"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavHeader',
  data() {
    return {
      src1: require('D:/web/test/mi-shop/public/imgs/icon-cart-checked.png')
    }
  }
}
</script>
<style lang = "scss">
  @import './../assets/scss/base.scss';
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333;
      color: #B0B0B0;
      .container{
        display: flex;
        /* 元素之间有间隔而且间隔距离都一样 */
        justify-content: space-between;
        /* 该属性用于控制子元素在侧轴（默认为y轴）上的排列方式，在子元素为单项时使用 */
        align-items: center;
        a{
          /* 行内块元素，既能够设置宽高，又不独自占据一行 */
          display:inline-block;
          color:#B0B0B0;
          margin-right:17px;
        }
        .my-cart{
          width:110px;
          background-color:#FF6600;
          text-align:center;
          color:#ffffff;
          .icon-cart{
            display: inline-block;
            width: 16px;
            height: 12px;
            background-size: contain;
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .container{
        .header-logo{
          display: inline-block;
          /* 可视化宽度和高度 */
          width: 55px;
          height: 55px;
          background-color:#FF6600;
          a{
            display: inline-block;
            /* 实际宽度为图片宽度两倍 */
            width: 110px;
            height: 55px;
          }
        }
      }
    }
  }

</style>
