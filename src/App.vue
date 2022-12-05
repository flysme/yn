<template>
  <!-- 导航栏 -->
  <var-app-bar title-position="center" color="rgba(0, 0, 0, 0.92)">
    <template #default>
      <div class="nav__bar--title">YOUNING DESIGN</div>
    </template>
    <template #right>
      <var-button
        round
        text
        color="transparent"
        text-color="#ffffff"
        @click="showSide = true"
      >
        <var-icon name="menu" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
  <!-- 侧边弹出框 -->
  <!-- <var-popup position="top" v-model:show="showSide">
    <div class="popup-example-block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-popup> -->
  <div style="margin-top: 54px">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { AppBar as VarAppBar } from "@varlet/ui";
import "@varlet/ui/es/app-bar/style/index";
import { Button as VarButton } from "@varlet/ui";
import "@varlet/ui/es/button/style/index";
import { Icon as VarIcon } from "@varlet/ui";
import "@varlet/ui/es/icon/style/index";
import { ref } from "vue";
const showSide = ref(false);
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB,
    Microsoft Yahei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style lang="scss" scoped>
.var-app-bar {
  position: fixed;
  top: 0;
  z-index: 100;
}

.nav__bar--title {
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500;
}

:root {
  --button-border-radius: 8px;
}
</style>
