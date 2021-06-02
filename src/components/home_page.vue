<template>
  <div class="box">
    <div class="image">
      <img class="background" :src="background" />
    </div>
    <div class="header">
      <div class="top">
        <a-row>
          <a-col class="left" :span="16">
            <img class="iconTitle" src="../assets/icons/lg.png" />
            <span class="shuyix">数宜信</span>
            <span class="little">供应链金融一站式服务</span>
          </a-col>
          <a-col :span="8">col-12</a-col>
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
      background: require("../assets/image/home.jpg"),
      backgroundZx: require("../assets/image/zxing.jpg"),
      backgroundZb: require("../assets/image/zhib.jpg"),
      backgroundJc: require("../assets/image/juece.jpg")
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
    background: gray;
    .top {
      .left {
        padding-left: 500px;
        padding-top: 40px;
        .iconTitle {
          width: 70px;
          height: 80px;
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
    }
    .title {
    }
  }
}
</style>