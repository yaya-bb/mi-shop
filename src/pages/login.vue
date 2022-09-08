<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="../../public/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="javascript:;">小米商城</a><span>|</span>
        <a href="javascript:;">MIUI</a><span>|</span>
        <a href="javascript:;">米家</a><span>|</span>
        <a href="javascript:;">米聊</a>
      </div>
      <div class="copyright">
      © mi.com 京ICP证110507号 京ICP备10046444号
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
// 变量方法太多的时候用mapActions去替代
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  // methods是object的对象，用于定义方法
  methods: {
    login() {
      // 获取参数，ES6解构
      let { username, password } = this
      // 方法+地址+传参+通过then接收数据
      this.axios.post('/user/login', {
        username,
        password
      }).then((res) => {
        // 保存用户名，设置过期时间,Session会话级别
        this.$cookie.set('userId', res.id, {expires: 'Session'})
        // Vuex插件已经挂载到实例
        // 通过使用dispatch触发actions
        // 进行存储
        // this.$store.dispatch('saveUserName', res.username)
        // 等同于上面一句话的意思
        this.saveUserName(res.username)
        this.$router.push({
          // 传参方法一
          name: 'index',
          params: {
            from: 'login'
          }
          // 传参方法二
          // path: '/index',
          // query: {
          //   from: 'login'
          // }
        })
      })
    },
    ...mapActions(['saveUserName']),
    // 进行注册，设置账号以及密码
    register() {
      // 表单提交用post
      this.axios.post('/user/register', {
        username: 'admin1',
        password: 'admin1',
        email: 'admin1@163.com'
      }).then(() => {
        this.$message.success('注册成功')
      })
    }
  }
}
</script>
<style lang="scss">
.login{
  &>.container {
    height: 113px;
    img{
      position: absolute;
      top: 20px;
      left: 20px;
      width: auto;
      height: 60px;
    }
  }
  .wrapper{
    background: url('../../public/imgs/login-bg.jpg') no-repeat center;
    .container {
      height: 576px;
      .login-form {
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width: 410px;
        height: 510px;
        background-color: #ffffff;
        position: absolute;
        bottom: 29px;
        right: 0;
        h3 {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;
          .checked{
            color: #FF6600;
          }
          .sep-line{
            margin: 0 32px;
          }
        }
        .input{
          display: inline-block;
          width: 348px;
          height: 50px;
          border: 1px solid #E5E5E5;
          margin-bottom: 20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width: 348px;
          height: 100%;
          line-height: 50px;
          margin-top: 10px;
          text-align: center;
          font-size: 16px;
        }
        .tips{
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms{
            color: #FF6600;
          }
          .reg{
            color: #999999;
            span{
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height: 100px;
    padding-top: 60px;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-link{
      a{
        color: #999999;
        display: inline-block;
      }
      span{
        margin: 0 10px;
      }
    }
    .copyright{
      margin-top: 13px;
    }
  }
}
</style>
