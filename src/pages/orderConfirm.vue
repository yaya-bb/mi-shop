<template>
  <div class="order-confirm">
    <!-- <order-header title="订单确认">
      <template v-slot:tip>
      </template>
    </order-header> -->
    <!-- svg矢量图不会失帧，也不会占用带宽 -->
    <!-- 可使用svg替代一些icon，减少请求的数量 -->
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
          <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
          <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
          <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
        </symbol>
      </defs>
    </svg>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-address">
            <h2 class="addr-title">收货地址</h2>
            <div class="addr-list clearfix">
              <!-- 点击地址则为选中地址,需要动态绑定 -->
              <!-- index为循环的索引值 -->
              <!-- 当前点击的索引等于当前的索引,则点亮 -->
              <div class="addr-info" :class="{'checked':index == checkIndex}" @click="checkIndex=index" v-for="(item,index) in list" :key="index">
                <h2>{{item.receiverName}}</h2>
                <div class="phone">{{item.receiverMobile}}</div>
                <div class="street">{{item.receiverProvince + ' ' + item.receiverCity + ' ' + item.receiverDistrict + ' ' + item.receiverAddress}}</div>
                <div class="action">
                  <a href="javascript:;" class="fl" @click="delAddress(item)">
                    <svg class="icon icon-del">
                      <use xlink:href="#icon-del"></use>
                    </svg>
                  </a>
                  <a href="javascript:;" class="fr" @click="editAddressModal(item)">
                    <svg class="icon icon-edit">
                      <use xlink:href="#icon-edit"></use>
                    </svg>
                  </a>
                </div>
              </div>
              <!-- 点击后弹出模板框 -->
              <div class="addr-add" @click="openAddressModal">
                <div class="icon-add"></div>
                <div>添加新地址</div>
              </div>
            </div>
          </div>
          <div class="item-good">
            <h2>商品</h2>
            <ul>
              <!-- 进行渲染商品列表 -->
              <li v-for="(item,index) in cartList" :key="index">
                <div class="good-name">
                  <img v-lazy="item.productMainImage" alt="">
                  <span>{{item.productName + ' ' + item.productSubtitle}}</span>
                </div>
                <div class="good-price">{{item.productPrice}}元x{{item.quantity}}</div>
                <div class="good-total">{{item.productTotalPrice}}元</div>
              </li>
            </ul>
          </div>
          <div class="item-shipping">
            <h2>配送方式</h2>
            <span>包邮</span>
          </div>
          <div class="item-invoice">
            <h2>发票</h2>
            <a href="javascript:;">电子发票</a>
            <a href="javascript:;">个人</a>
          </div>
          <div class="detail">
            <div class="item">
              <span class="item-name">商品件数：</span>
              <span class="item-val">{{count}}件</span>
            </div>
            <div class="item">
              <span class="item-name">商品总价：</span>
              <span class="item-val">{{cartTotalPrice}}元</span>
            </div>
            <div class="item">
              <span class="item-name">优惠活动：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item">
              <span class="item-name">运费：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item-total">
              <span class="item-name">应付总额：</span>
              <span class="item-val">{{cartTotalPrice}}元</span>
            </div>
          </div>
          <div class="btn-group">
            <a href="/#/cart" class="btn btn-default btn-large">返回购物车</a>
            <a href="javascript:;" class="btn btn-large" @click="orderSubmit">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <modal
      title="新增确认"
      btnType="1"
      :showModal="showEditModal"
      @cancel="showEditModal=false"
      @submit="submitAddress"
    >
    <!-- 插槽传递 -->
      <template v-slot:body>
        <div class="edit-wrap">
          <div class="item">
            <!-- placeholder默认显示的文字 -->
            <input type="text" class="input" placeholder="姓名" v-model="checkedItem.receiverName">
            <input type="text" class="input" placeholder="手机号" v-model="checkedItem.receiverMobile">
          </div>
          <div class="item">
            <!-- 省份 -->
            <select name="province" v-model="checkedItem.receiverProvince">
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="河北">河北</option>
            </select>
            <!-- 城市 -->
            <select name="city" v-model="checkedItem.receiverCity">
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="河北">石家庄</option>
            </select>
            <!-- 区 -->
            <select name="district" v-model="checkedItem.receiverDistrict">
              <option value="北京">昌平区</option>
              <option value="天津">海淀区</option>
              <option value="河北">东城区</option>
              <option value="天津">西城区</option>
              <option value="河北">顺义区</option>
              <option value="天津">房山区</option>
            </select>
          </div>
          <div class="item">
            <!-- 绑定表单的对象，提交时只需获取对象的值就可 -->
            <textarea name="street" v-model="checkedItem.receiverAddress"></textarea>
          </div>
          <div class="item">
            <input type="text" class="input" placeholder="邮编" v-model="checkedItem.receiverZip">
          </div>
        </div>
      </template>
    </modal>
    <modal
      title="删除确认"
      btnType="1"
      :showModal="showDelModal"
      @cancel="showDelModal=false"
      @submit="submitAddress"
    >
      <template v-slot:body>
        <p>您确认要删除此地址吗？</p>
      </template>
    </modal>
  </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import Modal from './../components/Modal.vue'
export default {
  name: 'order-confirm',
  data() {
    return {
      // 收货地址列表
      list: [],
      // 购物车中需要结算的商品列表
      cartList: [],
      // 被选中的商品总金额
      cartTotalPrice: 0,
      // 商品结算数量
      count: 0,
      // 选中的商品对象,删除和选中都需要复用
      checkedItem: {},
      // 用户行为 0：新增 1：编辑 2：删除
      userAction: '',
      // 是否显示删除弹框
      showDelModal: false,
      // 是否显示新增或者编辑弹框
      showEditModal: false,
      // 当前收货地址选中索引
      checkIndex: 0
    }
  },
  components: {
    OrderHeader,
    Modal
  },
  mounted() {
    this.getAddressList();
    this.getCartList();
  },
  methods: {
    getAddressList() {
      this.axios.get('/shippings').then((res) => {
        this.list = res.list;
      })
    },
    // 打开新增地址弹框
    openAddressModal() {
      // 新增
      this.userAction = 0;
      this.checkedItem = {};
      // 编辑弹框显示
      this.showEditModal = true;
    },
    // 打开新增地址弹框
    // item方便给予赋值,item:选中的对象
    editAddressModal(item) {
      this.userAction = 1;
      this.checkedItem = item;
      this.showEditModal = true;
    },
    // 删除地址
    delAddress(item) {
      this.checkedItem = item;
      this.userAction = 2;
      // 弹窗显示
      this.showDelModal = true;
    },
    // 地址删除、编辑、新增功能
    submitAddress() {
      // 解构
      let {checkedItem, userAction} = this;
      let method, url;
      let params = {};
      if (userAction == 0) {
        // 新增
        method = 'post';
        url = '/shippings';
      } else if (userAction == 1) {
        // 1:编辑
        method = 'put';
        url = `/shippings/${checkedItem.id}`;
      } else {
        // 删除
        method = 'delete';
        url = `/shippings/${checkedItem.id}`;
      }
      // 校验内容
      if (userAction == 0 || userAction == 1) {
        // 通过解构方式将其解构出来，获取地址名称
        let {receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, receiverZip} = checkedItem;
        // 第二次提交应当置为空
        let errMsg = '';
        // 为空则进行提示
        if (!receiverName) {
          errMsg = '请输入收货人名称';
          // 正则手机号/\d{11}/
          // 不是手机号以及不够11位,则进行提示
        } else if (!receiverMobile || !/\d{11}/.test(receiverMobile)) {
          errMsg = '请输入正确格式的手机号';
        } else if (!receiverProvince) {
          errMsg = '请选择省份';
        } else if (!receiverCity) {
          errMsg = '请选择对应的城市';
        } else if (!receiverAddress || !receiverDistrict) {
          errMsg = '请输入收货地址';
        } else if (!/\d{6}/.test(receiverZip)) {
          errMsg = '请输入六位邮编';
        }
        if (errMsg) {
          this.$message.error(errMsg);
          return;
        }
        // key值与value值相等时，可省略
        params = {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip
        }
      }
      // 动态获取方法method进行调用，url为地址，params为参数
      this.axios[method](url, params).then(() => {
        this.closeModal();
        // 拉取最新的地址
        this.getAddressList();
        this.$message.success('操作成功');
      });
    },
    closeModal() {
      this.checkedItem = {};
      this.userAction = '';
      this.showDelModal = false;
      // 提交成功后弹窗需要进行关闭
      this.showEditModal = false;
    },
    getCartList() {
      this.axios.get('/carts').then((res) => {
        // 获取购物车中所有商品数据
        let list = res.cartProductVoList;
        // 商品总金额
        this.cartTotalPrice = res.cartTotalPrice;
        this.cartList = list.filter(item => item.productSelected);
        // 对结算产品进行遍历
        this.cartList.map((item) => {
          this.count += item.quantity;
        })
      })
    },
    // 订单提交
    orderSubmit() {
      // this.checkIndex当前选中的索引
      // this.list选中的列表,
      // 在列表中找索引
      let item = this.list[this.checkIndex];
      // item为空,则地址不存在
      if (!item) {
        this.$message.error('请选择一个收货地址');
        return;
      }
      // 调接口
      // 创建订单
      this.axios.post('/orders', {
        shippingId: item.id
      }).then((res) => {
        // res返回订单号
        this.$router.push({
          path: '/order/pay',
          query: {
            orderNo: res.orderNo
          }
        })
      })
    }
  }
}
</script>
<style lang="scss">
  @import './../assets/scss/base.scss';
   .order-confirm{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:84px;
      .order-box{
        background-color:#ffffff;
        padding-left: 40px;
        padding-bottom: 40px;
        .addr-title{
          font-size: 20px;
          color: #333333;
          font-weight: 200;
          margin-bottom:21px;
        }
        .item-address{
          padding-top: 38px;
          .addr-list{
            .addr-info,.addr-add{
              box-sizing:border-box;
              float: left;
              width:271px;
              height:180px;
              border:1px solid #E5E5E5;
              margin-right: 15px;
              padding: 15px 24px;
              font-size: 14px;
              color:#757575;
            }
            .addr-info{
              cursor:pointer;
              h2{
                height:27px;
                font-size:18px;
                font-weight: 300;
                color:#333;
                margin-bottom:10px;
              }
              .street{
                height:50px;
              }
              .action{
                height:50px;
                line-height:50px;
                .icon{
                  width: 20px;
                  height: 20px;
                  fill: #666666;
                  vertical-align: middle;
                  &:hover{
                    fill: #FF6700;
                  }
                }
              }
              &.checked{
                border:1px solid #ff6700;
              }
            }
            .addr-add{
              text-align:center;
              color: #999999;
              cursor:pointer;
              .icon-add{
                width:30px;
                height:30px;
                border-radius:50%;
                background:url('../../public/imgs/icon-add.png') #E0E0E0 no-repeat center;
                background-size:14px;
                margin: 0 auto;
                margin-top: 45px;
                margin-bottom: 10px;
              }
            }
          }
        }
        .item-good{
          margin-top:34px;
          border-bottom: 1px solid #E5E5E5;
          padding-bottom: 12px;
          h2{
            border-bottom:1px solid #E5E5E5;
            padding-bottom: 5px;
          }
          li{
            display:flex;
            align-items: center;
            height:40px;
            line-height:40px;
            margin-top:10px;
            font-size:16px;
            color:#333333;
            .good-name{
              flex:5;
              img{
                width:30px;
                height:30px;
                vertical-align:middle;
              }
            }
            .good-price{
              flex:2;
            }
            .good-total{
              padding-right:44px;
              color:#FF6600;
            }
          }
        }
        .item-shipping,.item-invoice{
          margin-top:31px;
          line-height: 20px;
          h2{
            display: inline-block;
            margin-right: 71px;
            font-size: 20px;
            width: 80px;
          }
          span,a{
            font-size:16px;
            color:#FF6700;
            margin-right:23px;
          }
        }
        .detail{
          padding: 50px 44px 33px 0;
          border-bottom: 1px solid #f5f5f5;
          text-align: right;
          font-size: 16px;
          color: #666666;
          .item-val{
            color:#FF6700;
          }
          .item{
            line-height: 15px;
            margin-bottom: 12px;
          }
          .item-val{
            display:inline-block;
            width:100px;
          }
          .item-total{
            .item-val{
              font-size:28px;
            }
          }
        }
        .btn-group{
          margin-top: 37px;
          text-align: right;
          .btn {
            text-align: center;
          }
        }
      }
    }
    .edit-wrap{
      font-size:14px;
      .item{
        margin-bottom: 15px;
        input{
          display: inline-block;
          width: 280px;
          height: 35px;
          line-height:35px;
          box-sizing: border-box;
          padding-left: 15px;
          border: 1px solid #E5E5E5;
          // 第二元素指定margin值，兄弟元素
          &+.input{
            margin-left:14px;
          }
        }
        select{
          height:35px;
          line-height: 35px;
          border:1px solid #E5E5E5;
          margin-right:15px;
        }
        textarea{
          height: 60px;
          width: 100%;
          padding:13px 15px;
          box-sizing:border-box;
          border:1px solid #E5E5E5;
        }
      }
    }
  }
</style>
