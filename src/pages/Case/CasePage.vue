<template>
  <div>
    <div class="case__wall">
      <div
        :class="['case__item', `case__item_${index + 1}`]"
        v-for="(item, index) in caseImgList"
        :key="index"
      >
        <img :src="item" alt="" />
        <img :src="vr360" alt="" class="vr__icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import vr360 from '@/assets/imgs/360_rotate.png'

gsap.registerPlugin(ScrollTrigger)
const caseImgList = ref([
'https://s1.ax1x.com/2022/11/20/zMZLJ1.png',
'https://s1.ax1x.com/2022/11/20/zMZXz6.png',
'https://s1.ax1x.com/2022/11/20/zMVujS.jpg',
'https://s1.ax1x.com/2022/11/20/zMVMng.jpg',
'https://s1.ax1x.com/2022/11/20/zMVQBQ.jpg',
'https://s1.ax1x.com/2022/11/20/zMZORx.png',
'https://s1.ax1x.com/2022/11/20/zMV3As.jpg',
'https://s1.ax1x.com/2022/11/20/zMVNcT.jpg',
'https://s1.ax1x.com/2022/11/20/zMZHo9.png',
'https://s1.ax1x.com/2022/11/20/zMVt3V.jpg',
'https://s1.ax1x.com/2022/11/20/zMVduF.jpg',
'https://s1.ax1x.com/2022/11/20/zMVDE9.jpg',
'https://s1.ax1x.com/2022/11/20/zMZqiR.png',
'https://s1.ax1x.com/2022/11/20/zMVrNR.jpg',
'https://s1.ax1x.com/2022/11/20/zMVc36.jpg'
])
onMounted(()=>{
  caseImgList.value.forEach((item, index) => {
    // let obj = index == 0 ? { scrollTrigger: '.case__wall' } : {}
    gsap.to(`.case__item_${index + 1}`, {
      scrollTrigger: `.case__item_${index + 1}`,
      opacity: 1,
      duration: 5
    })
  })
})
</script>

<style lang="scss" scoped>
.case__wall {
  margin-bottom: 10px;
  width: 100%; // 默认宽度
  columns: 2; // 默认列数
  column-gap: 5px; // 列间距
  .case__item {
    width: 100%;
    padding-bottom: 5px;
    opacity: 0;
    position: relative;
    img {
      width: 100%;
      vertical-align: top;
    }
    .vr__icon {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 10;
      width: 20px;
      height: 20px;
    }
  }
}
</style>