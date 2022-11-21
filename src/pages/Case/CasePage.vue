<template>
  <div>
    <var-style-provider :style-vars="styleVars">
      <var-tabs
        sticky
        elevation
        safe-area
        active-color="#000"
        v-model:active="active"
      >
        <var-tab>选项1</var-tab>
        <var-tab>选项2</var-tab>
        <var-tab>选项3</var-tab>
        <var-tab>选项4</var-tab>
        <var-tab>选项5</var-tab>
        <var-tab>选项6</var-tab>
        <var-tab>选项7</var-tab>
        <var-tab>选项8</var-tab>
      </var-tabs>
      <var-list :finished="finished" v-model:loading="loading" @load="load">
        <div class="case__wall">
          <div
            :class="['case__item', `case__item_${index + 1}`]"
            v-for="(item, index) in caseImgList"
            :key="index"
          >
            <!-- <img :src="item" alt="" /> -->
            <var-image lazy :src="item" />
            <div class="case__title">
              110㎡新中式田园风格新中式田园风格新中式
            </div>
            <img :src="vr360" alt="" class="vr__icon" v-if="index == 0" />
          </div>
        </div>
      </var-list>
    </var-style-provider>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vr360 from "@/assets/imgs/360_rotate.png";

gsap.registerPlugin(ScrollTrigger);
const caseImgList = ref([
  "https://s1.ax1x.com/2022/11/20/zMZLJ1.png",
  "https://s1.ax1x.com/2022/11/20/zMZXz6.png",
  "https://s1.ax1x.com/2022/11/20/zMVujS.jpg",
  "https://s1.ax1x.com/2022/11/20/zMVMng.jpg",
  "https://s1.ax1x.com/2022/11/20/zMVQBQ.jpg",
  "https://s1.ax1x.com/2022/11/20/zMZORx.png",
  "https://s1.ax1x.com/2022/11/20/zMV3As.jpg",
  "https://s1.ax1x.com/2022/11/20/zMVNcT.jpg",
  "https://s1.ax1x.com/2022/11/20/zMZHo9.png",
  "https://s1.ax1x.com/2022/11/20/zMVt3V.jpg",
  "https://s1.ax1x.com/2022/11/20/zMVduF.jpg",
  "https://s1.ax1x.com/2022/11/20/zMVDE9.jpg",
  "https://s1.ax1x.com/2022/11/20/zMZqiR.png",
  "https://s1.ax1x.com/2022/11/20/zMVrNR.jpg",
  "https://s1.ax1x.com/2022/11/20/zMVc36.jpg",
]);

const styleVars = ref({
  "--tabs-item-horizontal-height": "32px",
});
const active = ref(0);
const loading = ref(false);
const finished = ref(false);
const list = ref([]);

const load = () => {
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      list.value.push(list.value.length + 1);
    }

    loading.value = false;

    if (list.value.length >= 60) {
      finished.value = true;
    }
  }, 1000);
};
onMounted(() => {
  caseImgList.value.forEach((item, index) => {
    // let obj = index == 0 ? { scrollTrigger: '.case__wall' } : {}
    gsap.to(`.case__item_${index + 1}`, {
      scrollTrigger: `.case__item_${index + 1}`,
      opacity: 1,
      duration: 5,
    });
  });
});
</script>

<style lang="scss" scoped>
.var-sticky {
  position: fixed;
  top: 54px;
  left: 0;
}
.case__wall {
  margin-bottom: 10px;
  padding: 0 10px;
  padding-top: 34px;
  columns: 2; // 默认列数
  column-gap: 5px; // 列间距
  .case__item {
    width: 100%;
    padding-top: 12px;
    opacity: 0;
    position: relative;
    .var-image {
      border-radius: 5px 5px 0 0 !important;
      width: 100%;
      
      vertical-align: top;
    }
    .case__title {
      padding: 4px 6px;
      line-height: 20px;
      text-align: left;
      font-size: 12px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; // 想要超出三行显示 就把这里改成3就好了
    }
    .vr__icon {
      position: absolute;
      top: 20px;
      right: 10px;
      z-index: 10;
      width: 20px;
      height: 20px;
    }
  }
}
</style>