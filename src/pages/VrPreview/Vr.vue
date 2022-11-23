<template>
  <div id="viewer" style="width: 100vw; height: 100vh"></div>
</template>
  
  <script setup>
import { onMounted } from "vue";
import PhotoSphereViewer from "../../libs/hoto-sphere-viewer";
import "../../libs/hoto-sphere-viewer/photo-sphere-viewer.css";
let viewer;
onMounted(() => {
  viewer = new PhotoSphereViewer.Viewer({
    container: document.querySelector("#viewer"),
    // size: { width: 500, height: 800 },
    panorama:
      "https://cdn.staticaly.com/gh/flysme/images_service@master/20221122/youning_imgYN0068.7jxemfjk6t00.jpg",
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