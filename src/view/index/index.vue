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
          <p>日均销售额￥234.5</p>
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
          <p>
            <a-progress :percent="88" :show-info="false" />
          </p>
          <p>日访问量&nbsp;1,234</p>
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
          <p class="tac">
            <img class="paySvg" src="../../assets/icons/payNum.svg" />
          </p>
          <p>转化率&nbsp;60%</p>
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
          <p class="effect tac">
            <a-progress type="circle" :percent="78" />
          </p>
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
        </li>
      </ul>
    </div>
    <div class="switch mt20">
      <div ref="switch" :style="{width: '1034px', height: '254px'}"></div>
    </div>
    <div class="circular"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.drawEcharts()
  },
  methods: {
    drawEcharts() {
      let myEcharts = this.$echarts.init(this.$refs.switch)
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月"
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "y",
            itemStyle: {
              color: "#3aa1ff"
            },
            type: "bar",
            barWidth: "60%",
            data: [1032, 632, 616, 332, 546, 610, 918, 842, 458, 514, 705, 975]
          }
        ]
      }
      myEcharts && myEcharts.setOption(option)
    }
  }
}
</script>
<style scoped lang="less">
.box {
  display: flex;
  flex-direction: column;
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
        border-radius: 5px;
        padding: 10px 20px;
        background: #fff;
        /deep/.effect {
          .ant-progress-inner {
            width: 70px !important;
            height: 70px !important;
          }
        }
        p {
          margin: 0;
          .iconInfo {
            float: right;
            cursor: pointer;
          }
          .paySvg {
            width: 70px;
            height: 70px;
          }
          &:nth-of-type(2) {
            color: #000;
            font-size: 30px;
            line-height: 38px;
            width: 200px;
          }
          &:nth-of-type(3) {
            line-height: 90px;
            span {
              color: #595959;
            }
          }
          &:nth-of-type(4) {
            border-top: 1px solid #e8e8e8;
            padding-top: 8px;
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
  .switch {
    background: #fff;
    min-height: 410px;
  }
}
</style>