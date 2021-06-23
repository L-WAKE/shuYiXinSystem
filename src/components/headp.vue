<template>
  <div class="txDiv">
    <span class="txSpan">
      <img class="touxiang" src="../assets/image/touxiang.jpg" />
      <a-icon class="iconDowm" type="down" />
    </span>
    <span class="item">
      <ul @click="clickLi">
        <li>
          <a-icon type="user" />
          <span>我的资料</span>
        </li>
        <li>
          <a-icon type="unlock" />
          <span>修改密码</span>
        </li>
        <li>
          <a-icon type="poweroff" />
          <span>退出登录</span>
        </li>
      </ul>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    clickLi(e) {
      let target = e.target || e.srcElement
      let name = target.innerText.trim()
      if (name === "我的资料") {
        console.log("跳转到我的资料页")
      }
      if (name === "修改密码") {
        console.log("跳转到修改密码页")
      }
      if (name === "退出登录") {
        this.$router.push("/login")
        window.localStorage.setItem("login", "false")

        console.log("执行退出登录逻辑")
      }
    }
  }
}
</script>
<style scoped lang="less">
.txDiv {
  position: relative;
  .txSpan {
    display: inline-block;
    width: 95px;
    height: 55px;
    .touxiang {
      width: 50px;
      height: 50px;
      border-radius: 8px;
    }
    .iconDowm {
      color: gray;
      width: 30px;
      height: 40px;
      font-size: 15px;
    }
    &:hover + .item {
      visibility: visible;
    }
  }
  .item {
    visibility: hidden;
    position: absolute;
    top: 55px;
    left: 0;
    display: inline-block;
    height: 96px;
    width: 110px;
    padding-top: 10px;
    ul {
      border-radius: 10px;
      max-width: 110px;
      background: gray;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 90px;
      overflow: hidden;
      li {
        cursor: pointer;
        line-height: 30px;
        font-size: 14px;
        list-style: none;
        color: #fff;
        width: 110px;
        padding-left: 14px;
        &:hover {
          color: gray;
          background: #deb887;
        }
        span {
          margin-left: 3px;
        }
      }
    }
    &:hover {
      visibility: visible;
    }
  }
}
</style>