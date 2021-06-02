<template>
  <div class="box">
    <div class="image">
      <img class="background" :src="background" />
    </div>
    <div class="header">
      <div class="top">
        <a-row>
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
      </div>
      <div class="title"></div>
    </div>
    <div class="content">content</div>
    <div class="footer">footer</div>
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
    }
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  .image {
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
    position: absolute;
    .background {
      height: 100%;
      width: 100%;
    }
  }
  .header {
    width: 100%;
    min-height: 380px;
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
            height: 60px;
            .touxiang {
              width: 60px;
              height: 60px;
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
            top: 60px;
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
    }
  }
}
</style>