<template>
  <div class="box">
    <div class="card">
      <ul>
        <li>
          <p>
            总销售额
            <a-tooltip placement="top">
              <template slot="title">
                <span>总销售额</span>
              </template>
              <a-icon class="iconInfo" type="info-circle" />
            </a-tooltip>
          </p>
          <p>￥126,560</p>
          <p>
            <span>
              周同比 12%
              <a-icon style="color:red" type="caret-up" />
            </span>&emsp;
            <span>
              日同比 11%
              <a-icon style="color:#52c41a" type="caret-down" />
            </span>
          </p>
          <p>运营活动效果</p>
        </li>
        <li>
          <p>
            访问量
            <a-tooltip placement="top">
              <template slot="title">
                <span>访问量</span>
              </template>
              <a-icon class="iconInfo" type="info-circle" />
            </a-tooltip>
          </p>
          <p>8,846</p>
          <p>支付笔数</p>
          <p>运营活动效果</p>
        </li>
        <li>
          <p>
            支付笔数
            <a-tooltip placement="top">
              <template slot="title">
                <span>支付笔数</span>
              </template>
              <a-icon class="iconInfo" type="info-circle" />
            </a-tooltip>
          </p>
          <p>6,560</p>
          <p>支付笔数</p>
          <p>运营活动效果</p>
        </li>
        <li>
          <p>
            运营活动效果
            <a-tooltip placement="top">
              <template slot="title">
                <span>运营活动效果</span>
              </template>
              <a-icon class="iconInfo" type="info-circle" />
            </a-tooltip>
          </p>
          <p>78%</p>
          <p>支付笔数</p>
          <p>运营活动效果</p>
        </li>
      </ul>
    </div>
    <div class="switch"></div>
    <div class="circular"></div>
  </div>
</template>
<script>
import "echarts-gl"
export default {
  data() {
    return {}
  },
  mounted() {
    // this.drawEarth()
  },
  methods: {
    drawEarth() {}
  }
}
</script>
<style scoped lang="less">
.box {
  .card {
    ul {
      margin: 0;
      padding: 0;
      li {
        float: left;
        list-style: none;
        width: 24%;
        height: 200px;
        margin-left: 21px;
        background: gray;
        border-radius: 5px;
        padding: 10px 20px;
        background: #fff;
        p {
          margin: 0;
          .iconInfo {
            float: right;
            cursor: pointer;
          }
          &:nth-of-type(2) {
            color: #000;
            font-size: 30px;
            line-height: 38px;
          }
          &:nth-of-type(3) {
            line-height: 70px;
            span {
              color: #595959;
            }
          }
          &:first-of-type {
            color: #8c8c8c;
          }
        }
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>