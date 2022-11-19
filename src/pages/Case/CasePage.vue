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
  'https://img1.baidu.com/it/u=3941240819,3256416705&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img1.baidu.com/it/u=1710483479,3454081793&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=480',
  'https://img0.baidu.com/it/u=2512129220,491126209&fm=253&fmt=auto&app=138&f=JPEG?w=440&h=440',
  'https://img1.baidu.com/it/u=3044450226,3672491211&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1668877200&t=024e14145fcfa5e4e3edf87ad92e5a21',
  'https://img2.baidu.com/it/u=3713877049,549326822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F29%2F20200329120140_QzKSu.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671461434&t=417bd4b24615af42d068378ac4909c4e',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F1857351758%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671461434&t=3a360259090069841f451dbffe89a800'
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