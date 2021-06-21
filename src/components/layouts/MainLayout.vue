<template>
  <time-bit-layout id="components-layout-demo-side" style="min-height: 100vh">
    <time-bit-layout-sider v-model="collapsed" collapsible>
      <div class="logo">
        <time-bit-icon class="logo-style" type="star" />
        <span v-show="!collapsed" class="logo-title">TimeBit</span>
      </div>
      <time-bit-menu
        @click="menuclick"
        theme="dark"
        :default-selected-keys="['customer']"
        mode="inline"
      >
        <time-bit-menu-item key="customer">
          <time-bit-icon type="smile" />
          <span>Khách hàng</span>
        </time-bit-menu-item>
        <time-bit-menu-item key="employee">
          <time-bit-icon type="user" />
          <span>Nhân viên</span>
        </time-bit-menu-item>
      </time-bit-menu>
    </time-bit-layout-sider>
    <time-bit-layout>
      <div class="main-box">
          <div class="main-header"></div>
          <div class="main-content">
            <router-view></router-view>
          </div>
          <div class="main-footer">Admin template ©2021 created by Time Bit</div>
      </div>
    </time-bit-layout>
  </time-bit-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    menuclick(sender, evt) {
      // if(sender.key=='home')
      //   this.$router.push('/');
      // else
      this.$router.push('/'+sender.key);
    },
  },
};
</script>

<style>
@import url("/mainlayout.css");
</style>