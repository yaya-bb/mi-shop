<template>
  <div class="index">
    <div class="container">
      <div class="nav-menu">
        <ul class="menu-wrap">
          <li class="menu-item">
            <a href="javascript:;">手机</a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">电视</a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">笔记本 平板</a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">出行 穿戴</a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">家电</a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">智能 路由器</a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">电源 配件</a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">健康 儿童</a>
            <div class="children"></div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">生活 箱包</a>
            <div class="children"></div>
          </li>
        </ul>
      </div>
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <img v-bind:src="item.img">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ServiceBar from '../components/ServiceBar.vue'

export default {
  name: 'index',
  components: {
    ServiceBar,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
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
      ]
    }
  }
}
</script>
<style lang="scss">
  .index {
    .swiper-box {
      .nav-menu {
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 10;
        padding: 26px 0;
        background-color: #55585A;
        box-sizing: border-box;
        .menu-wrap {
          height: 50px;
          line-height: 50px;
          a {
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
          }
        }
      }
      .swiper-container {
        height: 451px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
