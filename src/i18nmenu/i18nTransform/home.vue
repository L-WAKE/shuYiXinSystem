<template>
  <div class="box">
    <img :src="background" class="bgImg" />
    <div class="boxContent">
      <div class="header">
        <a-row class="top">
          <a-col class="left" :span="16">
            <a-icon class="iconTitle" type="trademark" />
            <span class="shuyix">{{ $t("i18n1485") }}</span>
            <span class="little">{{ $t("i18n1486") }}</span>
          </a-col>
          <a-col class="right" :span="8">
            <head-pint></head-pint>
          </a-col>
        </a-row>
        <div class="title">
          <p>{{ title }}</p>
          <p></p>
          <a-row>
            <a-col class="xinyong" :span="16">{{ xinyong }}</a-col>
            <a-col class="jiantou" :span="8">
              <span @click="left" class="left">＜</span>
              <span @click="right" class="right">＞</span>
            </a-col>
          </a-row>
          <p></p>
        </div>
      </div>
      <div class="content">
        <ul
          class="conUl"
          @click="
            () => {
              $router.push('/Layout');
            }
          "
          @mouseover="hoverLi"
        >
          <li :class="zxActive ? '' : 'active'">
            <img :src="zxActive ? zx_a : zx_b" />
            <p>{{ $t("i18n1487") }}</p>
            <p v-show="zxActive ? false : true">{{ $t("i18n1488") }}</p>
          </li>
          <li :class="zbActive ? '' : 'active'">
            <img :src="zbActive ? zb_a : zb_b" />
            <p>{{ $t("i18n1489") }}</p>
            <p v-show="zbActive ? false : true">{{ $t("i18n1488") }}</p>
          </li>
          <li :class="jcActive ? '' : 'active'">
            <img :src="jcActive ? jc_a : jc_b" />
            <p>{{ $t("i18n1490") }}</p>
            <p v-show="jcActive ? false : true">{{ $t("i18n1488") }}</p>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div class="links">
          <a href="javascript:void(0);">{{ $t("i18n1484") }}</a>
          <a href="javascript:void(0);">{{ $t("i18n1491") }}</a>
          <a href="javascript:void(0);">{{ $t("i18n1492") }}</a>
        </div>
        <div class="copyright">Copyright &copy; 2021 six six six</div>
        <div class="copyright">{{ $t("i18n1493") }} | {{ $t("i18n1494") }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import HeadPint from "@/components/headp.vue";
export default {
  components: {
    HeadPint,
  },
  data() {
    return {
      title: `${this.$t("i18n1495")} 更上层楼`,
      xinyong: `${this.$t("i18n1497")} / 指标治理 / 决策辅助`,
      index: 0,
      zxActive: true,
      zbActive: true,
      jcActive: true,
      // 小图标
      zx_a: require("../assets/icons/zx_a.png"),
      zx_b: require("../assets/icons/zx_b.png"),
      zb_a: require("../assets/icons/zb_a.png"),
      zb_b: require("../assets/icons/zb_b.png"),
      jc_a: require("../assets/icons/jc_a.png"),
      jc_b: require("../assets/icons/jc_b.png"),
      // 背景图片
      background: require("../assets/image/home_page.jpg"),
      backgroundZx: require("../assets/image/zx.jpg"),
      backgroundZb: require("../assets/image/zhib.jpg"),
      backgroundJc: require("../assets/image/juece.jpg"),
    };
  },
  methods: {
    left() {
      this.index = this.index - 1;
      if (this.index < 0) this.index = 2;
      this.switch();
    },
    right() {
      this.index = this.index + 1;
      if (this.index > 2) this.index = 0;
      this.switch();
    },
    // 提取左右按钮公共代码
    switch() {
      let backgArr = [this.backgroundZx, this.backgroundZb, this.backgroundJc];
      this.background = backgArr[this.index];
      if (backgArr[this.index] === this.backgroundZx) this.zxfun();
      if (backgArr[this.index] === this.backgroundZb) this.zbfun();
      if (backgArr[this.index] === this.backgroundJc) this.jcfun();
    },

    // 鼠标移动到某一个元素上时
    hoverLi(e) {
      let target = e.target || e.srcElement;
      let name = target.innerText.trim();
      if (name === this.$t("i18n1487")) {
        this.zxfun();
        this.background = this.backgroundZx;
      }
      if (name === this.$t("i18n1489")) {
        this.zbfun();
        this.background = this.backgroundZb;
      }
      if (name === this.$t("i18n1490")) {
        this.jcfun();
        this.background = this.backgroundJc;
      }
    },
    // 提取hover公用代码
    zxfun() {
      this.index = 0;
      this.title = `${this.$t("i18n1499")} 风控无忧`;
      this.xinyong = `${this.$t("i18n1501")} / 风险挖掘 / 信用报告`;
      this.zxActive = false;
      this.zbActive = true;
      this.jcActive = true;
    },
    zbfun() {
      this.index = 1;
      this.title = `${this.$t("i18n1504")} 绵绵不绝`;
      this.xinyong = `${this.$t("i18n1506")} / 批量管理 / 定制输出`;
      this.zbActive = false;
      this.zxActive = true;
      this.jcActive = true;
    },
    jcfun() {
      this.index = 2;
      this.title = `${this.$t("i18n1509")} 决策千里`;
      this.xinyong = `${this.$t("i18n1511")} / 风险计量 / 审批决策`;
      this.jcActive = false;
      this.zbActive = true;
      this.zxActive = true;
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  min-width: 1500px;
  .bgImg {
    transition: all 3s;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .boxContent {
    overflow-y: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 10;
  }
  .header {
    width: 100%;
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
    height: 100%;
    .conUl {
      margin: 0;
      list-style: none;
      padding-left: 480px;
      li {
        transition: all 0.5s;
        width: 200px;
        height: 200px;
        float: left;
        background: #dab789;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 60px;
          height: 60px;
          transition: all 0.5s;
        }
        p:first-of-type {
          font-size: 16px;
          font-weight: bold;
          color: #000;
          padding-top: 20px;
          font-family: "STHeiti";
          transition: all 0.5s;
        }
        p:last-of-type {
          padding-left: 20px;
          color: #000;
        }
      }
      .active {
        width: 500px;
        height: 300px;
        display: block;
        img {
          margin: 40px 0px 10px 20px;
        }
        p:first-of-type {
          padding-top: 0;
          padding-left: 20px;
        }
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 20px;
    width: 100%;
    padding: 0 16px;
    text-align: center;
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
