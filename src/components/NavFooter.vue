<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">小米商城</a><span>|</span>
      <a href="javascript:;">MIUI</a><span>|</span>
      <a href="javascript:;">米家</a><span>|</span>
      <a href="javascript:;">米聊</a>
    </div>
    <!-- 版权部分 -->
    <div class="copyright">
      © mi.com 京ICP证110507号 京ICP备10046444号
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavFooter'
}
</script>
<style lang="scss" scoped>
 .footer {
   height: 234px;
   border-top: 4px solid #FF7301;
   background-color: #333;
   color: #999;
   font-size: 16px;
   text-align: center;
   .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 100%;
    }
   }
   .footer-link {
    a {
      // a链接的优先级大于父级的优先级
      color: #999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
   }
 }
</style>
