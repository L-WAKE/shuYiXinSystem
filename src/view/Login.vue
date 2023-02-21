<template>
  <div class="container">
    <div class="top">
      <img src="../assets/image/logo_index.png" />
      <span>XXX{{ $t('i18n0') }}</span>
    </div>
    <div class="main">
      <h2 class="title">{{ $t('i18n1') }}</h2>
      <div class="content">
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item>
            <a-input
              v-decorator="[
          'userName',
          { rules: [{ required: true, message: $t('i18n2') + '!' }] },
        ]"
              :placeholder="$t('i18n2')"
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="['password',{ rules: [{ required: true, message: $t('i18n3') + '!' }] },]"
              type="password"
              :placeholder="$t('i18n3')"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-row>
            <a-checkbox>{{ $t('i18n4') }}</a-checkbox>
            <a class="forget" href="javascript:void(0);">{{ $t('i18n5') }}</a>
          </a-row>
          <a-button html-type="submit" type="primary">{{ $t('i18n6') }}</a-button>
        </a-form>
        <div class="other-login">
          <span>{{ $t('i18n7') }}</span>
          <a-icon class="item-icon" type="alipay-circle"></a-icon>
          <a-icon class="item-icon" type="taobao-circle"></a-icon>
          <a-icon class="item-icon" type="weibo-circle"></a-icon>
          <router-link class="register" :to="{ name: 'Home' }">{{ $t('i18n8') }}</router-link>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="links">
        <a href="javascript:void(0);">{{ $t('i18n9') }}</a>
        <a href="javascript:void(0);">{{ $t('i18n10') }}</a>
        <a href="javascript:void(0);">{{ $t('i18n11') }}</a>
      </div>
      <div class="copyright">Copyright &copy; 2021 six six six</div>
      <div class="copyright">{{ $t('i18n12') }} | {{ $t('i18n13') }}</div>
    </div>
  </div>
</template>
<script>
import { timeSlot } from "../utils/util"
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" })
  },
  created() {},
  data() {
    return {}
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      this.$router.push("/Home")

      // let { data } = await this.$api.login()
      // this.form.validateFields((err, values) => {
      //   if (!err) {
      //     if (data.code === 200) {
      //       if (
      //         values.userName === data.data.userName &&
      //         values.password === data.data.password
      //       ) {
      //         window.localStorage.setItem("login", "true")
      //         this.$router.push("/Home")
      //         setTimeout(() => {
      //           this.$notification.open({
      //             message: "welcome",
      //             description: `${timeSlot()}欢迎回来`,
      //             icon: <a-icon type="smile" style="color: #108ee9" />
      //           })
      //         }, 1000)
      //       } else {
      //         this.$message.error("用户名或密码错误!")
      //       }
      //     }
      //   }
      // })
    }
  },
  computed: {}
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  min-height: 100%;
  background-size: 100% 100%;
  position: relative;
  background: #f0f2f5 url(~@/assets/image/home02.jpg) no-repeat 50%;
  .top {
    padding: 20px;
    padding-left: 20px;
    img {
      width: 50px;
      height: 50px;
    }
    span {
      margin-left: 0px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }
  }
  .main {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    margin: 20px auto;
    padding: 20px;
    min-width: 260px;
    width: 400px;
    background: white;
    /deep/ .ant-input {
      width: 340px;
      height: 40px;
    }
    .title {
      text-align: center;
      font-weight: bold;
    }
    .content {
      padding-left: 10px;
      line-height: 62px;
      /deep/ .ant-btn {
        width: 340px;
        height: 40px;
      }
      /deep/ .ant-form {
        line-height: 62px;
      }
      .forget {
        float: right;
        margin-right: 10px;
      }
    }
    .other-login {
      text-align: left;
      margin-top: 24px;
      line-height: 22px;
      .item-icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle; //垂直对齐
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          color: #1890ff;
        }
      }
      .register {
        float: right;
        margin-right: 10px;
      }
    }
  }
  .footer {
    width: 100%;
    padding: 0 16px;
    text-align: center;
    margin: 200px 0 24px;
    .links {
      margin-bottom: 8px;
      font-size: 14px;
      a {
        color: #fff;
        transition: all 0.3s;
        &:not(:last-child) {
          margin-right: 30px;
        }
        &:hover {
          color: #f40;
        }
      }
    }
    .copyright {
      margin-bottom: 8px;
      color: #fff;
    }
  }
}
</style>
