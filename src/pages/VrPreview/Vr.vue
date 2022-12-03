<template>
  <div id="viewer" style="width: 100vw; height: 100vh"></div>
</template>
  
  <script setup>
import { onMounted } from "vue";
import PhotoSphereViewer from "../../libs/hoto-sphere-viewer";
import "../../libs/hoto-sphere-viewer/photo-sphere-viewer.css";
import { getDesignSketchLibInfo } from "@/api/home";
import { useRoute } from "vue-router";
let viewer;
onMounted(async () => {
  const route = useRoute();
  const resp = await getDesignSketchLibInfo(route.params.id);
  viewer = new PhotoSphereViewer.Viewer({
    container: document.querySelector("#viewer"),
    // size: { width: 500, height: 800 },
    panorama: resp.data?.panoramaPic,
    navbar: [
      "zoom", //放大缩小按钮
    ],
    // navbar: true,
    loadingTxt: "图片渲染中...",
  });
});
</script>
  
  <style lang="scss" >
.psv-canvas {
  height: 100vh !important;
}
</style>