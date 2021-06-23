<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed">
      <div class="logo"></div>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>用户管理</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>角色管理</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="user" />
            <span>流程管理</span>
          </span>
          <a-menu-item key="3">我的申请</a-menu-item>
          <a-menu-item key="4">我的待办</a-menu-item>
          <a-menu-item key="5">我的已办</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="team" />
            <span>客户管理</span>
          </span>
          <a-menu-item key="6">积分配置</a-menu-item>
          <a-menu-item key="8">积分明细</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>字典管理</span>
        </a-menu-item>
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
            <head-pint></head-pint>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer style="textAlign: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import HeadPint from "@/components/headp.vue"
export default {
  components: {
    HeadPint
  },
  data() {
    return {
      collapsed: false
    }
  }
}
</script>
<style scoped lang='less'>
#components-layout-demo-custom-trigger {
  .content {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 740px;
    // height: calc(100% - 200px);
  }
  .right {
    padding-left: 440px;
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