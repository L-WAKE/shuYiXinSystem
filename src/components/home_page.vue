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
          <head-pint></head-pint>
        </a-col>
      </a-row>
      <div class="title">
        <p>{{title}}</p>
        <p></p>
        <a-row>
          <a-col class="xinyong" :span="16">{{xinyong}}</a-col>
          <a-col class="jiantou" :span="8">
            <span @click="left" class="left">＜</span>
            <span @click="right" class="right">＞</span>
          </a-col>
        </a-row>
        <p></p>
      </div>
    </div>
    <div class="content">
      <ul class="conUl" @click="()=>{$router.push('/Layout')}" @mouseover="hoverLi">
        <li :class="zxActive?'':'active'">
          <img :src="zxActive?zx_a:zx_b" />
          <p>征信系统</p>
          <p
            v-show="zxActive?false:true"
          >企业征信询服务，通过征信系统，用户能够实时查询企业相关的工商登记信息，年报，股东信息，投资人信息，涉诉，失信，拥有商标，知识产权，企业证书，主要人员信息，变更记录等信息，并下载专业的分析报告辅助决策。</p>
        </li>
        <li :class="zbActive?'':'active'">
          <img :src="zbActive?zb_a:zb_b" />
          <p>指标治理</p>
          <p
            v-show="zbActive?false:true"
          >企业征信询服务，通过征信系统，用户能够实时查询企业相关的工商登记信息，年报，股东信息，投资人信息，涉诉，失信，拥有商标，知识产权，企业证书，主要人员信息，变更记录等信息，并下载专业的分析报告辅助决策。</p>
        </li>
        <li :class="jcActive?'':'active'">
          <img :src="jcActive?jc_a:jc_b" />
          <p>决策引擎</p>
          <p
            v-show="jcActive?false:true"
          >企业征信询服务，通过征信系统，用户能够实时查询企业相关的工商登记信息，年报，股东信息，投资人信息，涉诉，失信，拥有商标，知识产权，企业证书，主要人员信息，变更记录等信息，并下载专业的分析报告辅助决策。</p>
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
import HeadPint from "./headp.vue"
export default {
  components: {
    HeadPint
  },
  data() {
    return {
      title: "供不应绝 更上层楼",
      xinyong: "信用查询 / 指标治理 / 决策辅助",
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
      backgroundJc: require("../assets/image/juece.jpg")
    }
  },
  methods: {
    left() {
      this.index = this.index - 1
      if (this.index < 0) this.index = 2
      this.switch()
    },
    right() {
      this.index = this.index + 1
      if (this.index > 2) this.index = 0
      this.switch()
    },
    // 提取左右按钮公共代码
    switch() {
      let backgArr = [this.backgroundZx, this.backgroundZb, this.backgroundJc]
      let url = `url(${backgArr[this.index]}) no-repeat 50% / 100% 100%`
      this.$refs.box.style.background = url
      if (backgArr[this.index] === this.backgroundZx) this.zxfun()
      if (backgArr[this.index] === this.backgroundZb) this.zbfun()
      if (backgArr[this.index] === this.backgroundJc) this.jcfun()
    },

    // 鼠标移动到某一个元素上时
    hoverLi(e) {
      let target = e.target || e.srcElement
      let name = target.innerText.trim()
      if (name === "征信系统") {
        this.zxfun()
        let url = `url(${this.backgroundZx}) no-repeat 50% / 100% 100%`
        this.$refs.box.style.background = url
      }
      if (name === "指标治理") {
        this.zbfun()
        let url = `url(${this.backgroundZb}) no-repeat 50% / 100% 100%`
        this.$refs.box.style.background = url
      }
      if (name === "决策引擎") {
        this.jcfun()
        let url = `url(${this.backgroundJc}) no-repeat 50% / 100% 100%`
        this.$refs.box.style.background = url
      }
    },
    // 提取hover公用代码
    zxfun() {
      this.index = 0
      this.title = "追本溯源 风控无忧"
      this.xinyong = "商业调查 / 风险挖掘 / 信用报告"
      this.zxActive = false
      this.zbActive = true
      this.jcActive = true
    },
    zbfun() {
      this.index = 1
      this.title = "算无遗策 绵绵不绝"
      this.xinyong = "指标计算 / 批量管理 / 定制输出"
      this.zbActive = false
      this.zxActive = true
      this.jcActive = true
    },
    jcfun() {
      this.index = 2
      this.title = "识明智审 决策千里"
      this.xinyong = "客户评级 / 风险计量 / 审批决策"
      this.jcActive = false
      this.zbActive = true
      this.zxActive = true
    }
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  min-width: 1500px;
  transition: all 2s;
  background: url("../assets/image/home_page.jpg") no-repeat 50%;
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
    width: 100%;
    padding: 0 16px;
    text-align: center;
    margin: 100px 0 24px;
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