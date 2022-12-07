<template>
  <div id="viewer" style="width: 100vw; height: 100vh"></div>
</template>
  
  <script >
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import { getDesignSketchLibInfo } from "@/api/home";
export default {
  data() {
    return {};
  },
  async mounted() {
    const resp = await getDesignSketchLibInfo(this.$route.params.id);
    new Viewer({
      container: document.querySelector("#viewer"),
      // size: { width: 500, height: 800 },
      panorama: resp.data?.panoramaPic,
      navbar: [
        "zoom", //放大缩小按钮
      ],
      caption: "放大缩小按钮",
      // touchmoveTwoFingers: true,
      // navbar: true,
      loadingTxt: "图片渲染中...",
    });
  },
};
</script>
  
  <style lang="scss" >
.psv-canvas {
  height: 100vh !important;
}
</style>