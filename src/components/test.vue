<template>
  <div class="test">
    测试组件<br />{{ msg }} <br /><button @click="$emit('update:msg', '改变了')">
      点击改变
    </button>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: "测试值",
    },
  },
  data() {
    return {};
  },
};
</script>
