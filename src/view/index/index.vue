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
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="销售额">
          <a-row>
            <a-col :span="16">
              <p class="sale">销售趋势</p>
              <div ref="switch" class="switchSale"></div>
            </a-col>
            <a-col :span="8">
              <p class="sale" style="margin-left: 0">门店销售额排名</p>
              <div class="ranking" v-for="(item,index) in sortData" :key="item.id">
                <span :class="index===0||index===1||index===2?'active':''">{{index+1}}</span>
                <span>{{item.name}}</span>
                <span>{{item.salesVolume}}</span>
              </div>
            </a-col>
          </a-row>
        </a-tab-pane>
        <div class="wrapper" slot="tabBarExtraContent">
          <div class="label">
            <span>今日</span>
            <span>本周</span>
            <span>本月</span>
            <span>全年</span>
          </div>
          <span class="picker">
            <a-range-picker :placeholder="['开始日期', '结束日期']" @change="timeChange" />
          </span>
        </div>
      </a-tabs>
    </div>
    <div class="circular mt20">
      <a-row>
        <a-col :span="12">
          <div class="hot">
            <p class="hotTit">线上热门搜索</p>
          </div>
        </a-col>
        <a-col :span="12">col-12</a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import { EleResize } from "../../utils/esresize"
export default {
  data() {
    return {
      salesVolume: []
    }
  },
  mounted() {
    this.drawEcharts() //销售趋势echarts
  },
  created() {
    this.getVolume() //销售排名数据
  },
  computed: {
    //销售排名数据进行排序
    sortData() {
      return this.salesVolume.sort(
        (a, b) => b["salesVolume"] - a["salesVolume"]
      )
    }
  },
  methods: {
    // 画销售额echarts
    drawEcharts() {
      let myEcharts = this.$echarts.init(this.$refs.switch)
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: 20,
          right: 10,
          bottom: 10,
          top: 20,
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
      option && myEcharts.setOption(option)
      let listener = function() {
        myEcharts.resize()
      }
      EleResize.on(this.$refs.switch, listener)
    },
    // 获取销售排名数据
    async getVolume() {
      let params = {
        id: 12233
      }
      let { data } = await this.$api.getRanking(params)
      if (data.code === 200) {
        this.salesVolume = data.data.list
      }
    },
    // 开始结束日期变化
    timeChange(date, dateString) {
      console.log(date, dateString)
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
      display: flex;
      justify-content: space-around;
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        width: 24%;
        height: 200px;
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
    padding: 10px 20px;
    min-height: 410px;
    .wrapper {
      .label {
        display: inline-block;
        span {
          margin-left: 24px;
          color: #f5222d;
          cursor: pointer;
        }
      }
      .picker {
        margin-left: 24px;
      }
    }
    .sale {
      margin: 10px 0 10px 20px;
      color: #000;
    }
    .switchSale {
      min-height: 274px;
      max-width: 1050px;
    }
    .ranking {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 10% 75% 15%;
      span:first-of-type {
        border-radius: 20px;
        display: inline-block;
        font-size: 12px;
        font-weight: 600;
        line-height: 20px;
        width: 20px;
        text-align: center;
        background-color: #f5f5f5;
      }
      .active {
        background-color: #314659 !important;
        color: #fff;
      }
    }
  }
  .circular {
    .hot {
      background: #fff;
      padding: 10px 20px;
      width: 788px;
      height: 465px;
      .hotTit {
        font-size: 16px;
        color: #000;
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 15px;
      }
    }
  }
}
</style>