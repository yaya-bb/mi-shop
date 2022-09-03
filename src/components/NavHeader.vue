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
            <a href="javascript:;" v-if="username">{{username}}</a>
            <a href="javascript:;" v-if="!username" @click="login">登录</a>
            <a href="javascript:;" v-if="username" @click="logout">退出</a>
            <a href="javascript:;" v-if="username">我的订单</a>
            <!-- 绑定一个事件进行跳转 -->
            <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart iconfont">&#xe70c;</span>购物车{{cartCount}}</a>
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
              <div class="children">
                <ul>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7a15df55e98e4163390096ed05b1ef5.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b01bb7ee0f8c9865c11eeb2c483015e2.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">小米12S pro</div>
                      <div class="pro-price">4699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88ae9b85c5f8fbdae2ea98d58a045e1e.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">小米Civi 1S</div>
                      <div class="pro-price">2299元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d7a15df55e98e4163390096ed05b1ef5.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b01bb7ee0f8c9865c11eeb2c483015e2.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">小米12S pro</div>
                      <div class="pro-price">4699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88ae9b85c5f8fbdae2ea98d58a045e1e.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">小米Civi 1S</div>
                      <div class="pro-price">2299元</div>
                    </a>
                  </li>
                </ul>
                <!-- 用接口只需要一个li进行循环遍历 -->
                <!-- v-for需要+key，复用率更高些 -->
                <!-- <li class="product"
                    v-for="(item,index) in phoneList"
                    :key="index">
                    下面target的属性为打开一个新窗口
                    通过v-bind绑定数据可简写为：
                    一旦使用字符串则使用'',因为写的任何代码都是变量
                    ''里面拼接的是跳转的地址
                    <a v-bind:href="'/#/product/'+item.id" target="_blank">
                      <div class="pro-img">
                        动态渲染图片
                        <img :src="item.mainImg" :alt="item.subtitle">
                      </div>
                      <div class="pro-name">{{item.name}}</div>
                      <div class="pro-price">{{item.price | currency}}</div>
                    </a>
                </li> -->
              </div>
            </div>
            <div class="item-menu">
              <span>RedMi红米</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30969671b2829cbc625f018c6c998708.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">Remi Node 11SE</div>
                      <div class="pro-price">999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae5b5a8e24272dd4cdd77bf6d26954b6.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">Remi 10A</div>
                      <div class="pro-price">699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/418f4cb7536265cd99bdf8b2e88d1f84.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">Redmi K50 Pro</div>
                      <div class="pro-price">2999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30969671b2829cbc625f018c6c998708.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">Remi Node 11SE</div>
                      <div class="pro-price">999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae5b5a8e24272dd4cdd77bf6d26954b6.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">Remi 10A</div>
                      <div class="pro-price">699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/418f4cb7536265cd99bdf8b2e88d1f84.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">Redmi K50 Pro</div>
                      <div class="pro-price">2999元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-menu">
              <span>电视</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">Redmi智能电视X65 2022</div>
                      <div class="pro-price">2999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8871821795310769c1d3896c99b12381.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">小米电视6 65'' OLED</div>
                      <div class="pro-price">6699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">Redmi智能电视X65 2022</div>
                      <div class="pro-price">2999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8871821795310769c1d3896c99b12381.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">小米电视6 65'' OLED</div>
                      <div class="pro-price">6699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">Redmi智能电视X65 2022</div>
                      <div class="pro-price">2999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <!-- _blank打开一个新窗口 -->
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8871821795310769c1d3896c99b12381.png?thumb=1&w=200&h=138&f=webp&q=90">
                      </div>
                      <div class="pro-name">小米电视6 65'' OLED</div>
                      <div class="pro-price">6699元</div>
                    </a>
                  </li>
                </ul>
              </div>
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
// 进行解构
import { mapState } from 'vuex'
export default {
  name: 'NavHeader',
  data() {
    return {
      // 共享数据使用this.$store.state.+''
      phoneList: []
    }
  },
  // 因为有延迟，因此需要用computed计算属性
  // 写在需要显示的页面
  // 用于渲染数据
  computed: {
    // 将username定义为一个函数
    // username() {
    //   return this.$store.state.username
    // },
    // cartCount() {
    //   return this.$store.state.cartCount
    // },
    // 等同于上面两个
    ...mapState(['username', 'cartCount'])
  },
  // 定义一个过滤器金额格式化(日期格式化也会用到过滤器)
  // filters: {
  //   currency(val) {
  //     // val为空
  //     if (!val) return '0.00'
  //     return '￥' + val.toFixed(2) + '元'
  //   }
  // },
  mounted() {
    this.getProductList();
    // 获取当前路由的参数route
    let params = this.$route.params;
    // params为true并且处于login页面
    if (params && params.from === 'login') {
        // 保持购物车的数量，避免退出用户导致数据清零
        this.getCartCount();
      }
  },
  methods: {
    // 跳转到登录页面
    login() {
      this.$router.push('/login')
    },
    // 获得产品的列表
    getProductList() {
      this.axios.get('/products', {
        params: {
          categoryId: '100012'
        }
      }).then((res) => {
      // 判断长度，截取6个
        if (res.list.length >= 6) {
          this.phoneList = res.list.slice(0, 6)
        }
      })
    },
    goToCart() {
      // 取参数如何取呢:router.parent取参数
      // 跳转路由使用this.$router.push
      this.$router.push('/cart')
    },
        // 获取商品购物车的数量
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        // 保存到vuex里面
        this.$store.dispatch('saveCartCount', res)
      })
    },
    logout() {
      this.axios.post('/user/logout').then(() => {
        this.$message.success('退出成功')
        // .set:进行设置，expires:过期时间（与后台时间保持一致）-1即刻过期
        this.$cookie.set('userId', '', {expires: '-1'})
        // 清空数据
        this.$store.dispatch('saveUserName', '')
        this.$store.dispatch('saveCartCount', '0')
      })
    }
  }
}
</script>
<style lang = "scss">
  @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/config.scss';
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
          margin-right: 0;
          .icon-cart{
            @include bgImg(16px,12px);
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
      .container{
        position: relative;
        height: 112px;
        @include flex();
        .header-logo{
          display: inline-block;
          /* 可视化宽度和高度 */
          width: 55px;
          height: 55px;
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
              background-image: url('https://s02.mifile.cn/assets/static/image/logo-mi2.png');
              transition: margin .2s;
            }
            &:after{
              /* 需要占位 */
              content: ' ';
              display: inline-block;
              @include bgImg(55px,55px,55px);
            }
            &:hover:before{
              margin-left: -55px;
              /* 动画 */
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
              color: $colorA;
              .children {
                height: 220px;
                opacity: 1;
              }
            }
            .children {
              position: absolute;
              top: 90px;
              left: 0;
              width: 1226px;
              /* 默认高度为0 */
              height: 0;
              opacity: 0;
              overflow: hidden;
              border: 1px solid #e5e5e5;
              box-shadow: 0px .6px .6px 0px rgba(0, 0, 0, 0.11);
              z-index: 10;
              transition: height .5s;;
              background-color: #fff;
              .product{
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                a{
                  display: inline-block;
                }
                img{
                  height: 110px;
                  width: auto;
                  margin-top: 26px;
                }
                .pro-img{
                  height: 137px;
                }
                .pro-name{
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price{
                  color: $colorA;
                }
                &:before{
                /* 需要占位才会显示 */
                  content: ' ';
                  position: absolute;
                  top: 35px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
              }
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
