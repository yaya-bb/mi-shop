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
            <a href="javascript:;" class="my-cart"><span class="icon-cart iconfont">&#xe70c;</span>购物车</a>
          </div>
        </div>
      </div>
      <div class="nav-header">
        <!-- 先定义大结构 -->
        <div class="container">
          <div class="header-logo">
            <a href="/#/index"></a>
          </div>
          <div class="header-menu">
            <div class="item-menu">
              <span>小米手机</span>
              <div class="children"></div>
            </div>
            <div class="item-menu">
              <span>RedMi红米</span>
              <div class="children"></div>
            </div>
            <div class="item-menu">
              <span>电视</span>
              <div class="children"></div>
            </div>
          </div>
          <div class="header-search">
            <div class="wrapper">
              <input type="text" name="keyword">
              <!-- 写javascript脚本防止跳转 -->
              <a class="search iconfont">&#xe651;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavHeader'
}
</script>
<style lang = "scss">
  @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333;
      color: #B0B0B0;
      .container{
        /* 调用方法，格式@include 方法() */
        @include flex();
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
            @include bgImg(16px,12px);
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
      .container{
        height: 112px;
        @include flex();
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
            /* scss/sass属性--伪类*/
            &:before{
              /* 需要占位 */
              content: ' ';
              display: inline-block;
              @include bgImg(55px,55px,55px);
              background-image: url('/public/imgs/mi-logo.png');
              transition: margin .2s;
            }
            &:after{
              /* 需要占位 */
              content: ' ';
              display: inline-block;
              @include bgImg(55px,55px,55px);
              background-image: url('/public/imgs/mi-home.png');
            }
            &:hover:before{
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
        .header-menu {
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu {
            display: inline-block;
            color: #333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span {
              /* cursor属性定义鼠标指针放在一个元素边界范围内时所用的光标的形状属性值*/
              /* pointer光标呈现为指示链接的指针（小手的效果） */
              cursor: pointer;
            }
            &:hover {
              color: #B0B0B0;
            }
          }
        }
        .header-search {
          width: 319px;
          .wrapper {
            height: 50px;
            border: 1px solid #E0E0E0;
            /* display: flex可以控制图标 */
            display: flex;
            align-items: center;
            input {
              border: none;
              box-sizing: border-box;
              border-right: 1px solid #E0E0E0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            .search{
              @include bgImg(18px,18px);
              margin-left: 18px;
            }
          }
        }
      }
    }
  }

</style>
