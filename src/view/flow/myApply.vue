<template>
  <div>我的申请</div>
</template>
<script>
import chartModel from "./test";

export default {
  data() {
    return {};
  },
  mounted() {
    let type = "pie";
    let obj = {
      a: "22",
      b: 2,
    };
    let test = this._.cloneDeep(chartModel(this)["pie"]);
    console.log("test", test);
    // console.log("111");
  },
};
</script>
