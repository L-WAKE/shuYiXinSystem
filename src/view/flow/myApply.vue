<template>
  <div>
    我的申请
    <Test :msg.sync="msg"></Test>
  </div>
</template>
<script>
import chartModel from "./test";
import Test from "../../components/test.vue";
export default {
  components: {
    Test,
  },
  data() {
    return { msg: "父组件的值" };
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
  methods: {},
};
</script>
