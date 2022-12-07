<template>
  <div id="app">
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
    <div>
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

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
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100%;
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
