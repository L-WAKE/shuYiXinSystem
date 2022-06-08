<template>
  <a-layout class="box">
    <a-layout-sider v-model="collapsed">
      <div @click="goto('/Layout/index')" class="logo"></div>
      <a-menu theme="dark" mode="inline">
        <template v-for="item in sidebarMenu">
          <template v-if="item.children&&item.children.length>0">
            <template v-for="(menu,index) in item.children.slice(1,item.children.length)">
              <a-menu-item :key="index" @click="goto(menu.path)">
                <a-icon :type="menu.icon?menu.icon:'pie-chart'" />
                <span>{{menu.meta.name}}</span>
              </a-menu-item>
            </template>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row>
          <a-col :span="16">
            <a-tooltip placement="right">
              <template slot="title">
                <span>{{collapsed ? '展开' : '收起'}}</span>
              </template>
              <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="() => (collapsed = !collapsed)"
              />
            </a-tooltip>
          </a-col>
          <a-col class="right" :span="8">
            <head-pint class="header"></head-pint>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import HeadPint from "@/components/headp.vue"
import { mapState } from "vuex"
export default {
  components: {
    HeadPint
  },
  data() {
    return {
      collapsed: false
    }
  },
  computed: {
    ...mapState(["sidebarMenu"])
  },
  created() {
    console.log(this.$router.options.routes, "this.$router.options.routes")
  },
  methods: {
    goto(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style scoped lang='less'>
.box {
  .title {
    text-decoration: none;
  }
  .content {
    padding: 24px;
    min-height: 780px;
    overflow: hidden;
  }
  .footer {
    text-align: center;
  }
  .right {
    position: relative;
    .header {
      position: absolute;
      right: 30px;
    }
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    cursor: pointer;
    height: 32px;
    background: url("../assets/image/logo.png") no-repeat;
    background-size: 100% 100%;
    margin: 16px;
  }
  /deep/ .trigger {
    padding-right: 0px;
  }
}
</style>
