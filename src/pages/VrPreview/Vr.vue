<template>
  <div id="viewer" style="width: 100vw; height: 100vh"></div>
</template>
  
  <script setup>
import { onMounted } from "vue";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

let viewer;
onMounted(() => {
  viewer = new Viewer({
    container: document.querySelector("#viewer"),
    // size: { width: 500, height: 800 },
    panorama:
      "http://localhost:3003/gh/flysme/images_service@master/20221122/youning_imgYN0068.7jxemfjk6t00.jpg",
    navbar: [
      //   "zoom", //放大缩小按钮
    ],
  });
});
</script>
  
  <style lang="scss" >
.psv-canvas {
  height: 100vh !important;
}
</style>