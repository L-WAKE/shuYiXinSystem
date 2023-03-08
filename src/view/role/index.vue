<template>
  <div>
    <div id="no-print">
      角色管理<a-button type="primary" v-print="'#table'">打印</a-button>
      <!-- @click="gotoPrint" -->
    </div>
    <div id="table">
      <a-table ref="table" :dataSource="dataSource" :columns="columns" />
    </div>
  </div>
</template>
<script>
// import Print from "print-js";
// import printJS from "print-js";
// import html2Canvas from "html2canvas";
// import JsPDF from "jspdf";
export default {
  data() {
    return {
      printLoading: true,
      printObj: {
        id: "table",
        popTitle: "good print",
        // extraCss:  "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
        beforeOpenCallback(vue) {
          vue.printLoading = true;
          console.log("打开之前");
        },
        openCallback(vue) {
          vue.printLoading = false;
          console.log("执行了打印");
        },
        closeCallback(vue) {
          console.log("关闭了打印工具");
        },
      },
      dataSource: [
        {
          key: "1",
          name: "胡彦斌",
          age: 32,
          address: "西湖区湖底公园1号",
        },
        {
          key: "2",
          name: "胡彦祖",
          age: 42,
          address: "西湖区湖底公园1号",
        },
      ],
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "住址",
          dataIndex: "address",
          key: "address",
        },
      ],
      printStyle: ``,
    };
  },
  methods: {
    gotoPrint() {
      // const style =
      //   "@page { margin-bottom:20px ;margin-left:45px;} " +
      //   "@media print {.content_c{ display: flex;flex-wrap: wrap;align-items: center;}.box_item{width:120px;height:160px;margin-top:15px;margin-left:15px;display: flex;align-items: center;flex-direction: column;justify-content: center;border: 0.5px solid #e8e8e8;} img {width: 100px;height: 100px;}}" +
      //   "body {margin:0}";
      // printJS({
      //   printable: "table",
      //   type: "html",
      //   targetStyles: ["*"], //这样设置继承了页面要打印元素原有的css属性。
      //   scanStyles: false, //设置为false时，库将不处理应用于正在打印的html的样式。使用css参数时很有用。
      //   style: style,
      // });
      // window.print();
      // let _this = this;
      // let print = this.$refs.table
      // printJS({
      //   printable: print, //想要打印的id
      //   type: "html",
      //   ignoreElements: [], //忽略id中无需打印的id
      //   scanStyles: false,
      //   targetStyles: ["*"],
      //   style: _this.printStyle,
      // });
      // var printDom = document.getElementById("table"); //获取打印的节点
      // // var printDom = this.$refs.table; //获取打印的节点
      // let opts = {
      //   useCORS: true, // 表示允许跨越的图片；allowTaint: true和useCORS: true选择一个
      //   // windowHeight: modal.scrollHeight + 24 + 100,//获取y方向页面包含滚动条的高度，24和100为padding,margin
      //   // width: dom.offsetWidth + 48,//48为padding值
      //   // height: dom.clientHeight + 400,//可见高度+padding+margin
      //   // y: window.pageYOffset + 100,//滚动条高度修复
      //   // scrollX: 17,
      //   scale: 1,
      // };
      // //html2Canvas的作用是根据dom生成屏幕截图
      // html2Canvas(printDom, opts).then((canvas) => {
      //   let contentWidth = canvas.width;
      //   let contentHeight = canvas.height;
      //   let pageHeight = (contentWidth / 592.28) * 841.89;
      //   let leftHeight = contentHeight;
      //   let position = 0;
      //   let imgWidth = 595.28;
      //   let imgHeight = (592.28 / contentWidth) * contentHeight;
      //   let pageData = canvas.toDataURL("image/jpeg", 1.0);
      //   // landscape表示横向,portrait表示纵向
      //   let PDF = new JsPDF("portrait", "pt", "a4"); //纵向
      //   if (leftHeight < pageHeight) {
      //     PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
      //   } else {
      //     while (leftHeight > 0) {
      //       PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
      //       leftHeight -= pageHeight;
      //       position -= 841.89;
      //       if (leftHeight > 0) {
      //         PDF.addPage();
      //       }
      //     }
      //   }
      //   PDF.save(`导出内容.pdf`);
      // });
    },
  },
};
</script>
