<template>
  <div id="viewer" style="width: 100vw; height: 50vh"></div>
</template>
  
  <script setup>
import { onMounted } from "vue";
import { Viewer } from "photo-sphere-viewer";

onMounted(() => {
  const viewer = new Viewer({
    container: document.querySelector("#viewer"),
    // size: {width: 500,height: 800},
    panorama:
      "http://localhost:3003/proxy_img/2022/11/21/U5D6AC.jpg",
    navbar: [
    //   "zoom", //放大缩小按钮
    ],
  });
});
</script>
  
  <style lang="scss" >
  .psv-canvas {
    height: 100vh!important;
  }
</style>