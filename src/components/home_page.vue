<template>
  <div ref="box" class="box">
    <div class="header">
      <a-row class="top">
        <a-col class="left" :span="16">
          <a-icon class="iconTitle" type="trademark" />
          <span class="shuyix">数宜信</span>
          <span class="little">供应链金融一站式服务</span>
        </a-col>
        <a-col class="right" :span="8">
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
        </a-col>
      </a-row>
      <div class="title">
        <p>供不应绝 更上层楼</p>
        <p></p>
        <a-row>
          <a-col class="xinyong" :span="16">信用查询 / 指标治理 / 决策辅助</a-col>
          <a-col class="jiantou" :span="8">
            <span @click="left" class="left">＜</span>
            <span @click="right" class="right">＞</span>
          </a-col>
        </a-row>
        <p></p>
      </div>
    </div>
    <div class="content">
      <ul class="conUl">
        <li>
          <img src="../assets/icons/zx_a.png" />
          <span>征信系统</span>
        </li>
        <li>
          <img src="../assets/icons/zb_a.png" />
          <span>指标治理</span>
        </li>
        <li>
          <img src="../assets/icons/jc_a.png" />
          <span>决策引擎</span>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="links">
        <a href="javascript:void(0);">帮助</a>
        <a href="javascript:void(0);">隐私</a>
        <a href="javascript:void(0);">条款</a>
      </div>
      <div class="copyright">Copyright &copy; 2021 six six six</div>
      <div class="copyright">互联网药品信息服务资格证书（浙）-经营性-2018-0010 | 出版物网络交易平台服务经营备案号：新出发浙备字第002号</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      background: require("../assets/image/3.jpg"),
      backgroundZx: require("../assets/image/zxing.jpg"),
      backgroundZb: require("../assets/image/zhib.jpg"),
      backgroundJc: require("../assets/image/juece.jpg")
    }
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
        console.log("执行退出登录逻辑")
      }
    },
    left() {
      let url = `url(${this.backgroundZx}) no-repeat 50%`
      this.$refs.box.style.background = url
    },
    right() {
      console.log("right")
    }
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  min-width: 1850px;
  background: url("../assets/image/3.jpg") no-repeat 50%;
  background-size: 100% 100%;
  .header {
    width: 100%;
    min-height: 356px;
    .top {
      .left {
        padding-left: 500px;
        padding-top: 40px;
        .iconTitle {
          color: white;
          font-size: 40px;
        }
        .shuyix {
          font-size: 28px;
          font-weight: 900;
          font-family: monospace;
          color: white;
        }
        .little {
          color: white;
          margin-left: 15px;
          border-left: 2px solid white;
          padding-left: 8px;
          font-size: 16px;
        }
      }
      .right {
        padding-top: 40px;
        padding-left: 200px;
        .txDiv {
          position: relative;
          .txSpan {
            display: inline-block;
            width: 95px;
            height: 55px;
            .touxiang {
              width: 55px;
              height: 55px;
              border-radius: 8px;
            }
            .iconDowm {
              color: white;
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
            padding-top: 6px;
            ul {
              border-radius: 10px;
              max-width: 110px;
              background: #fff;
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
                color: gray;
                width: 110px;
                padding-left: 14px;
                &:hover {
                  color: #fff;
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
      }
    }
    .title {
      color: white;
      p:first-of-type {
        font-size: 45px;
        padding: 50px 0 20px 650px;
        margin: 0;
      }
      p:nth-of-type(2) {
        width: 100px;
        height: 5px;
        background: linear-gradient(left, #ccc, transparent); //线性渐变-透明
        margin-left: 650px;
        margin-bottom: 20px;
      }
      .xinyong {
        padding-left: 650px;
        font-size: 16px;
      }
      .jiantou {
        padding-left: 180px;
        .left {
          font-size: 30px;
          cursor: pointer;
        }
        .right {
          margin-left: 40px;
          font-size: 30px;
          cursor: pointer;
        }
      }
    }
  }
  .content {
    width: 100%;
    min-height: 400px;
    .conUl {
      margin: 0;
      list-style: none;
      padding-left: 480px;
      li {
        width: 200px;
        height: 200px;
        float: left;
        background: #dab789;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
        }
        span {
          font-size: 16px;
          font-weight: bold;
          color: #000;
          padding-top: 20px;
          font-family: "STHeiti";
        }
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