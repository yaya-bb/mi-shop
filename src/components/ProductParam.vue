<template>
<!-- 动态绑定class -->
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <!-- 父组件进行调用 -->
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-bar',
  // 接收用父组件传来的参数
  props: {
    title: String
  },
  data() {
    return {
      // 默认为不需要定位
      isFixed: false
    }
  },
  mounted() {
    // 组件吸顶实现
    // 先进行绑定滚动监听
    // 事件方法用initHeight，单独拖出来的原因：为了在移除事件后可以被监测到
    // 如果定义的是function，在事件移除的时候/在组件销毁的时候，事件是不会被移除的
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight() {
      // 获取页面Y轴的偏移量
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop > 152;
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>
<style lang="scss" scoped>
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  // @import './../assets/scss/reset.scss';
  .nav-bar{
    height:70px;
    line-height:70px;
    border-top:1px solid $colorH;
    background-color:$colorG;
    z-index:10;
    &.is_fixed{
      position:fixed;
      top:0;
      width:100%;
      box-shadow: 0 5px 5px $colorE;
    }
    .container{
      @include flex();
      .pro-title{
        font-size:$fontH;
        color:$colorB;
        font-weight:bold;
      }
      .pro-param{
        font-size:$fontJ;
        span{
          margin:0 20px;
        }
        a{
          color:$colorC;
        }
      }
    }
  }
</style>
