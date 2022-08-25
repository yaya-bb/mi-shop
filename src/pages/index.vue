<template>
  <div class="index">
    <div class="container">
      <div class="nav-menu">
        <ul class="menu-wrap">
          <li class="menu-item">
            <a href="javascript:;">
              手机
              <span class="iconfont">&#xe665;</span>
            </a>
            <div class="children">
              <ul
                v-for="(item, i) in menuList"
                :key="i">
                <li
                  v-for="(sub, j) in item"
                  :key="j">
                  <a v-bind:href=" sub ? '/#/product/' +  sub.id : ''">
                    <img v-bind:src=" sub ? sub.img : 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52ef2b0a20fdb016f11d717e63f460db.png?thumb=1&w=33&h=33&f=webp&q=90'" alt="">
                    {{sub ? sub.name : 'Xiaomi MIX Fold2'}}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">
              电视
              <span class="iconfont">&#xe665;</span>
            </a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">
              笔记本 平板
              <span class="iconfont">&#xe665;</span>
              </a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">
              出行 穿戴
              <span class="iconfont">&#xe665;</span>
            </a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">
              家电
              <span class="iconfont">&#xe665;</span>
            </a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">
              智能 路由器
              <span class="iconfont">&#xe665;</span>
            </a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">
              电源 配件
              <span class="iconfont">&#xe665;</span>
              </a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">
              健康 儿童
              <span class="iconfont">&#xe665;</span>
              </a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">
              生活 箱包
              <span class="iconfont">&#xe665;</span>
              </a>
            <div class="children"></div>
          </li>
        </ul>
      </div>
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <swiper-slide
            v-for="(item,index) in slideList"
            :key="index">
            <img :src="item.img">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="(item, index) in adsList"
          :key="index">
          <img :src="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <!-- 加：为动态绑定 -->
        <a href="/#/product/30">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33973edd8c6c8177f8431daf679e8eb5.jpg?thumb=1&w=1022&h=100&f=webp&q=90" alt="">
        </a>
      </div>
      <!-- 商品内容区域 -->
    </div>
    <div class="product-box">
        <div class="container">
          <h2>手机
            <a href="" class="more">查看更多
              <span class="iconfont">&#xe665;</span>
            </a>
          </h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/#/product/35">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fef86f3a976842446ec7c3f315cf253f.jpg?thumb=1&w=195&h=512&f=webp&q=90" alt="">
              </a>
            </div>
            <div class="list-box">
              <div class="list" v-for="(arr, k) in phoneList" :key="k">
                <div class="item" v-for="(item, q) in arr" :key="q">
                  <!-- 假设偶数为新品，用三元表达式判断 -->
                  <span :class="{'new-pro' : q % 2 == 0}">新品</span>
                  <div class="item-img">
                    <!-- <img :src="item.mainImage" alt=""> -->
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a687e796bb4879cd0e93867177f800da.png?thumb=1&w=167&h=167&f=webp&q=90" alt="">
                  </div>
                  <div class="item-info">
                    <h3>Xiaomi MIX Fold 2</h3>
                    <!-- <h3>{{item.name}}</h3>
                    <p>{{item.subtitle}}</p>
                    <p class="price">{{item.price}}</p> -->
                    <p>超轻薄折叠机身设计，小米自研微水滴形态转轴</p>
                    <p class="price" @click="addCart(item.id)">8999元
                      <!-- <span class="iconfont">&#xe70c;</span> -->
                    </p>
                  </div>
                </div>
              </div>
              <div class="list"></div>
            </div>
          </div>
        </div>
      </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      v-on:submit="goToCart"
      v-on:cancel="showModal=false">
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
      </modal>
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ServiceBar from '../components/ServiceBar.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'index',
  components: {
    ServiceBar,
    swiper,
    swiperSlide,
    Modal
  },
  // 定义一个过滤器金额格式化(日期格式化也会用到过滤器)
  // filters: {
  //   currency(val) {
  //     // val为空
  //     if (!val) return '0.00'
  //     return '￥' + val.toFixed(2) + '元'
  //   }
  // },

  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: false,
          shadow: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      menuList: [
        [
          {
            id: 30,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52ef2b0a20fdb016f11d717e63f460db.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi MIX Fold2'
          },
          {
            id: 31,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Note 11T Pro+'
          },
          {
            id: 32,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd1f0b06757ab64cb320a9a545f616ef.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Redmi 10A'
          },
          {
            id: 33,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae8f6a46838f737d69290f12fd95de35.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi 12'
          }
        ],
        [
          {
            id: 34,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52ef2b0a20fdb016f11d717e63f460db.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi MIX Fold2'
          },
          {
            id: 35,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Note 11T Pro+'
          },
          {
            id: 36,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd1f0b06757ab64cb320a9a545f616ef.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Redmi 10A'
          },
          {
            id: 37,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae8f6a46838f737d69290f12fd95de35.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi 12'
          }
        ],
        [
          {
            id: 38,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52ef2b0a20fdb016f11d717e63f460db.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi MIX Fold2'
          },
          {
            id: 39,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Note 11T Pro+'
          },
          {
            id: 40,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd1f0b06757ab64cb320a9a545f616ef.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Redmi 10A'
          },
          {
            id: 41,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae8f6a46838f737d69290f12fd95de35.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi 12'
          }
        ],
        [
          {
            id: 42,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52ef2b0a20fdb016f11d717e63f460db.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi MIX Fold2'
          },
          {
            id: 43,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Note 11T Pro+'
          },
          {
            id: 44,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd1f0b06757ab64cb320a9a545f616ef.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Redmi 10A'
          },
          {
            id: 45,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae8f6a46838f737d69290f12fd95de35.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi 12'
          }
        ],
        [
          {
            id: 46,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52ef2b0a20fdb016f11d717e63f460db.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi MIX Fold2'
          },
          {
            id: 47,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Note 11T Pro+'
          },
          {
            id: 48,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd1f0b06757ab64cb320a9a545f616ef.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Redmi 10A'
          },
          {
            id: 49,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae8f6a46838f737d69290f12fd95de35.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi 12'
          }
        ],
        [
          {
            id: 50,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/52ef2b0a20fdb016f11d717e63f460db.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi MIX Fold2'
          },
          {
            id: 51,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Note 11T Pro+'
          },
          {
            id: 52,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd1f0b06757ab64cb320a9a545f616ef.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Redmi 10A'
          },
          {
            id: 53,
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae8f6a46838f737d69290f12fd95de35.png?thumb=1&w=33&h=33&f=webp&q=90',
            name: 'Xiaomi 12'
          }
        ]
      ],
      adsList: [
        {
          id: 33,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32a62196b9af47752c96e7a50c86417c.jpg?w=632&h=340'
        },
        {
          id: 34,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5668146e20fc025caa756a0f8a3c7da4.jpg?w=632&h=340'
        },
        {
          id: 35,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c13d0d11b38ec17fa5d83bc6ba5912.jpg?w=632&h=340'
        },
        {
          id: 36,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5668146e20fc025caa756a0f8a3c7da4.jpg?w=632&h=340'
        }
      ],
      slideList: [
        {
          id: ' 44',
          img: ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/23ab407e0e0f7654a2112afc26a38d4b.jpg?thumb=1&w=1022&h=383&f=webp&q=90'
        },
        {
          id: ' 45',
          img: ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6f6c0c0eb8ede475c8858bc1370cfe9.jpg?thumb=1&w=1022&h=383&f=webp&q=90'
        },
        {
          id: ' 46',
          img: ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cdd149cb0fc40637a84b1fc5971f662.jpg?w=2452&h=920'
        },
        {
          id: ' 47',
          img: ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/36b45c624f42fa81732457e3f9773dbd.jpg?thumb=1&w=1022&h=383&f=webp&q=90'
        },
        {
          id: ' 48',
          img: ' https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4cfa4e9a0f10a79ed068f26adf846bfa.jpg?thumb=1&w=1022&h=383&f=webp&q=90'
        }
      ],
      phoneList: [
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ],
      showModal: false
    }
  },
  // 使用接口实现
  // 初始化商品
  // mounted() {
  //     // 加载商品列表
  //     this.init()
  // },
  methods: {
    init() {
      // 加载商品列表
      // res用来接收结果
      this.axios.get('/products', {
        // get用params传参
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res) => {
        res.list = res.list.slice(6, 14)
        // slice不会改变原数组
        // 生成二维数组(0,4)为第一个数组,(4,8)为第二个数组
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    },
    addCart(id) {
      this.showModal = true
      // this.axios.post('/carts',{
      //   productId: id,
      //   selected: true
      // }).then(() => {
      // }).catch(() => {
      //   this.showModal = true;
      // })
    },
    goToCart() {
      this.$router.push('/carts')
    }
  }
}
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .index {
    .container {
      position: relative;
      .nav-menu {
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 3px 0;
        background-color: #55585a7a;
        box-sizing: border-box;
        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            a {
              position: relative;
              display: block;
              font-size: 16px;
              color: #fff;
              padding-left: 30px;
              &:after {
                content: ' ';
                @include bgImg(10px,15px);
              }
              .iconfont {
                position: absolute;
                right: 32px;
              }
            }
            &:hover {
              background-color:$colorA;
              .children {
                display: block;
              }
            }
            .children {
              // 默认不给看见
              display: none;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid $colorH;
              ul {
                display: flex;
                // 两边对齐
                justify-content: space-between;
                height: 75px;
                li {
                  height: 75px;
                  // 文字居中
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                }
                a {
                  color: $colorB;
                  font-size: 14px;
                }
                img {
                  width: 42px;
                  height: 35px;
                  // 文字和图片是居中的
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
      .swiper-box {
        height: 451px;
        .swiper-button-prev {
        left: 274px;
        }
        img {
          width: 100%;
          height: 451px;
        }
      }
      .ads-box {
        @include flex();
        a {
          margin-top: 25px;
          margin-bottom: 31px;
          width: 296px;
          height: 167px;
        }
      }
      .banner {
        margin-bottom: 50px;
      }
    }
    .product-box {
      background-color: $colorJ;
      // 上-右-下-左
      padding: 30px 0 50px;
      h2 {
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
        .more {
          position: absolute;
          top: 0;
          right: 0;
          color: #424242;
          font-size: 16px;
          font-weight: normal;
        }
      }
      .wrapper {
        display: flex;
        .banner-left {
          margin-right: 16px;
          img {
            width: 224px;
            height: 619px;
          }
        }
        .list-box{
          .list{
            @include flex();
            width:986px;
            margin-bottom:14px;
            &:last-child{
              margin-bottom:0;
            }
            .item{
              width:236px;
              height:302px;
              background-color:$colorG;
              text-align:center;
              span{
                display:inline-block;
                width:67px;
                height:24px;
                font-size:14px;
                line-height:24px;
                color:$colorG;
                &.new-pro{
                  background-color:#7ECF68;
                }
                &.kill-pro{
                  background-color:#E82626;
                }
              }
              .item-img{
                img{
                  width:100%;
                  height:195px;
                }
              }
              .item-info{
                h3{
                  font-size:$fontJ;
                  color:$colorB;
                  line-height:$fontJ;
                  font-weight:bold;
                }
                p{
                  color:$colorD;
                  line-height:13px;
                  margin:6px 0 13px;
                }
                .price{
                  color:#F20A0A;
                  font-size:$fontJ;
                  font-weight:bold;
                  text-align: center;
                  cursor:pointer;
                  &:after{
                    @include bgImg(22px,22px);
                    content:' ';
                    margin-left:5px;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
