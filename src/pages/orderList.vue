<template>
  <!-- 讲了三种分页， -->
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <!-- 整个订单大的框架结构 -->
        <div class="order-box">
          <!-- 请求之前显示 -->
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                <!-- 创建时间 -->
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img :src="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.totalPrice + 'X' + item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <!-- 判断商品是否已支付；20-已支付 -->
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
          <!-- 只保留分页器，所以v-if=true -->
          <!-- layout是布局 -->
          <!-- pageSize需要赋值数字并且动态赋值 -->
          <el-pagination
            v-if="true"
            class="pagination"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange"
            >
          </el-pagination>
          <!-- 上线时将它屏蔽掉 -->
          <div class="load-more" v-if="false">
              <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
          </div>
          <!-- 滚动加载 -->
          <!-- v-infinite-scroll加载方法，当滚动的时候触发整个方法 -->
          <!-- infinite-scroll-distance距离底部有多少的时候进行滚动 -->
          <!-- infinite-scroll-disabled=true将其禁用掉 -->
          <!-- v-if=false将其屏蔽 -->
          <div class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="true"
            infinite-scroll-distance="410"
            v-if="false"
          >
          <!-- 当滚动的时候才会出现loading的svg -->
            <img src="../../public/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
          </div>
          <!-- 条件：loading已经关闭/订单列表数据为0 -->
          <no-data v-if="!loading && list.length==0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 第1步：导入
import OrderHeader from './../components/OrderHeader'
import Loading from './../components/Loading'
import NoData from './../components/NoData'
import { Pagination, Button } from 'element-ui'
// 局部注册只在这个页面
import infiniteScroll from 'vue-infinite-scroll'
export default {
  name: 'orderList',
  // 第2步：注册
  components: {
    OrderHeader,
    Loading,
    NoData,
    // 动态的变量加载分页器
    [Pagination.name]: Pagination,
    // Button.name=el-button;因此用name方式:Button去定义变量
    [Button.name]: Button
  },
  // 局部注册
  directives: {
    infiniteScroll
  },
  data() {
    return {
      loading: false,
      list: [],
      pageSize: 10,
      pageNum: 1,
      total: 0,
      // 滚动加载是否触发,false则没有被触发，true表示禁用
      busy: false,
      // 默认有下一页(加载更多，是否显示按钮)
      showNextPage: true
    }
  },
  mounted() {
    this.getOrderList()
  },
  methods: {
    getOrderList() {
      this.loading = true;
      this.busy = true;
      this.axios.get('/orders', {
        // 参数
        params: {
          pageSize: 10,
          pageNum: this.pageNum
        }
      }).then((res) => {
        // 实现数据的拼接从而实现数据的累加
        this.list = this.list.concat(res.list);
        // 请求时loading等于false
        this.loading = false;
        this.total = res.total;
        this.showNextPage = res.hasNextPage;
        this.busy = false;
      }).catch(() => {
        // 报错时进catch进行捕获
        this.loading = false;
      })
    },
    goPay(orderNo) {
      this.$router.push({
        // 方法2：name路由名称
        // name: order-pay,
        // query: {
        //   orderNo
        // },
        // 方法1：path路径
        path: '/order/pay',
        // query传参,可以将它添加到地址栏中
        query: {
          orderNo
        }
      })
    },
    // currentPage改变时会触发,pageNum当前处于第几页
    handleChange(pageNum) {
      // 当页面发生变化，则将页面数保存给他
      this.pageNum = pageNum;
      this.getOrderList();
    },
    // （加载更多按钮）点击加载更多，页码进行累加
    loadMore() {
      this.pageNum++;
      this.getOrderList();
    },
    // 滚动加载，通过npm插件实现
    scrollMore() {
      this.busy = true;
      setTimeout(() => {
        this.pageNum++;
        this.getList();
      }, 500)
    },
    // 专门给scrollMore使用
    // 三种分页（滚动加载，加载更多，分页器）同时都在这里实现，线上部署只能保留一种

    getList() {
      // 请求开始之前loading为true
      this.loading = true;
      this.axios.get('/orders', {
        // 参数
        params: {
          pageSize: 10,
          pageNum: this.pageNum
        }
      }).then((res) => {
        // 实现数据的拼接从而实现数据的累加
        this.list = this.list.concat(res.list);
        // 请求结束后loading为false
        this.loading = false;
        // 判断有没有下一页
        if (res.hasNextPage) {
          // 有的话将释放关闭并禁用，不能进行滚动
          this.busy = false;
        } else {
          this.busy = true;
        }
      })
    }
  }
}
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
          color: #fff;
        }
        // el-***-primary改变按钮颜色也可以使用自定义主题
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        // 按钮居中button放在div里面
        .load-more,.scroll-more{
          // 居中显示
          text-align:center;
        }
      }
    }
  }
</style>
