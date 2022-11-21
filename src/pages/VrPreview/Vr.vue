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
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.135editor.com%2Ffiles%2Fusers%2F134%2F1346093%2F201912%2Fdf9EEfZq_XcZL.jpg&refer=http%3A%2F%2Fimage.135editor.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671544855&t=8a3a221da2367ddd5afe2de7dd9b9705",
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