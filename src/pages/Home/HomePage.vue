<template>
  <div class="home__container" color="">
    <!-- 轮播图 -->
    <var-swipe class="swipe-example" autoplay="3000">
      <var-swipe-item v-for="(item, index) in swipeIconList" :key="index">
        <img class="swipe-example-image" v-lazy="item" />
      </var-swipe-item>
    </var-swipe>
    <div class="home__intro">
      <div class="line__point"></div>
      <div class="line__point line__point--second"></div>
      <div class="line__point line__point--third"></div>
      <div class="line__point line__point--fourth"></div>
      <div class="home__intro--item home__intro--item-a">
        <div class="home__intro--title">成立时间</div>
        <div class="home__intro--desc">{{ companyInfo.companySetupDate.toFixed(0) }}年</div>
      </div>
      <div class="home__intro--item intro__right home__intro--item-b">
        <div class="home__intro--title">总服务客户</div>
        <div class="home__intro--desc home__intro--desc-second">{{ companyInfo.customerNum.toFixed(0) }}人+</div>
      </div>
      <div class="home__intro--item home__intro--item-c">
        <div class="home__intro--title">设计面积</div>
        <div class="home__intro--desc">{{ companyInfo.acreageNum.toFixed(0) }}㎡+</div>
      </div>
      <div class="home__intro--item intro__right home__intro--item-d">
        <div class="home__intro--title">团队规模</div>
        <div class="home__intro--desc">{{ companyInfo.teamNum.toFixed(0) }}人+</div>
      </div>
    </div>
    <!-- 案例介绍 -->
    <div class="case__intro">
      <div class="nav__title">案例介绍</div>
      <div class="case__wall">
        <div :class="['case__item', `case__item_${index + 1}`]" v-for="(item, index) in caseImgList" :key="index">
          <img :src="item" alt="" />
          <img :src="vr360" alt="" class="vr__icon" />
        </div>
      </div>
      <var-button text size="small" outline @click="handleMoreCase">MORE</var-button>
    </div>
    <!-- 设计团队 -->
    <div class="design__team">
      <div class="nav__title">团队介绍</div>
      <swiper
        :effect="'coverflow'"
        :coverflowEffect="{
          // slide做3d旋转时Y轴的旋转角度
          rotate: 0,
          // 每个slide之间的拉伸值，越大slide靠得越紧。5.3.6 后可使用%百分比
          stretch: -60,
          // slide的位置深度。值越大z轴距离越远，看起来越小。
          depth: 300,
          // depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。
          modifier: 1
          // 是否开启slide阴影
        }"
        :centeredSlides="true"
        slidesPerView="1.6"
        :grabCursor="true"
        :modules="[EffectCoverflow, Pagination, Autoplay]"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="user__intro">
            <div class="user__main__info">
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.talkimages.cn%2Fimages%2Fmedium%2F20153238%2Ftkf005_2382904.jpg&refer=http%3A%2F%2Fwww.talkimages.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671435485&t=510db5d06ce565bf679cbe9cfb3b8ee1"
                alt=""
              />
              <div class="user__info--name">俞森清</div>
              <div class="user__info--job-name">首席设计总监</div>
              <div class="user__info--advantage">擅长 新中式、欧式，日式禅意、大花园设计，商务会洽</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="user__intro">
            <div class="user__main__info">
              <img src="https://img2.woyaogexing.com/2018/03/08/ddca462a1c480272!400x400_big.jpg" alt="" />
              <div class="user__info--name">Kim</div>
              <div class="user__info--job-name">首席设计师</div>
              <div class="user__info--advantage">擅长 新中式、欧式，日式禅意、大花园设计，商务会洽</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="user__intro">
            <div class="user__main__info">
              <img src="https://t9.baidu.com/it/u=3344676249,2398616189&fm=193" alt="" />
              <div class="user__info--name">大俞-jay</div>
              <div class="user__info--job-name">花园施工专家</div>
              <div class="user__info--advantage">擅长 欧式花园设计，商务会洽亭阁施工</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 服务流程 -->
    <div class="service__flow">
      <div class="nav__title">服务流程</div>
      <div class="step__box">
        <var-steps direction="vertical" :active="active">
          <var-step>
            <template #default>
              <div class="step__box-content">
                <div class="step__box-title">顾问咨询对接</div>
                <img class="step__box-img" :src="serviceFlowIcon1" alt="" />
              </div>
            </template>
          </var-step>
          <var-step>
            <template #default>
              <div class="step__box-content">
                <div class="step__box-title">核对现场</div>
                <img class="step__box-img" :src="serviceFlowIcon2" alt="" />
              </div>
            </template>
          </var-step>
          <var-step>
            <template #default>
              <div class="step__box-content">
                <div class="step__box-title">确认平面方案</div>
                <img class="step__box-img" :src="serviceFlowIcon3" alt="" />
              </div>
            </template>
          </var-step>
          <var-step>
            <template #default>
              <div class="step__box-content">
                <div class="step__box-title">确认立面效果方案</div>
                <img class="step__box-img" :src="serviceFlowIcon4" alt="" />
              </div>
            </template>
          </var-step>
          <var-step>
            <template #default>
              <div class="step__box-content">
                <div class="step__box-title">确认施工图方案</div>
                <img class="step__box-img" :src="serviceFlowIcon5" alt="" />
              </div>
            </template>
          </var-step>
        </var-steps>
      </div>
      <var-snackbar v-model:show="showFlow"> 敬请期待！ </var-snackbar>
      <var-button text size="small" outline @click="showFlow=true">MORE</var-button>
    </div>
    <!-- 联系我们 -->
    <div class="call__company">
      <div class="nav__title">联系我们</div>
      <div class="call__us">电话: <a href="tel:18788840409">18788840409</a></div>
    </div>
    <var-back-top :duration="300" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'

import recommendIcon1 from '@/assets/imgs/recommend_icon_01.jpg'

import recommendIcon2 from '@/assets/imgs/recommend_icon_02.jpg'

import recommendIcon3 from '@/assets/imgs/recommend_icon_03.jpg'

import serviceFlowIcon1 from '@/assets/imgs/shejituandui.png'
import serviceFlowIcon2 from '@/assets/imgs/shigong.png'
import serviceFlowIcon3 from '@/assets/imgs/pingmian.png'
import serviceFlowIcon4 from '@/assets/imgs/limianfangan.png'
import serviceFlowIcon5 from '@/assets/imgs/xianchang.png'

import vr360 from '@/assets/imgs/360_rotate.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper'
import { onMounted, reactive, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// 敬请期待弹窗
const showFlow = ref(false)

// 公司基本信息
const companyInfo = reactive({
  companySetupDate: 2002,
  customerNum: 3000,
  acreageNum: 6000000,
  teamNum: 500
})

const caseImgList = ref([
  'https://img1.baidu.com/it/u=3941240819,3256416705&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img1.baidu.com/it/u=1710483479,3454081793&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=480',
  'https://img0.baidu.com/it/u=2512129220,491126209&fm=253&fmt=auto&app=138&f=JPEG?w=440&h=440',
  'https://img1.baidu.com/it/u=3044450226,3672491211&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1668877200&t=024e14145fcfa5e4e3edf87ad92e5a21',
  'https://img2.baidu.com/it/u=3713877049,549326822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889'
])

onMounted(() => {
  // gsap.to(companyInfo, {
  //   scrollTrigger: '.case__intro',
  //   duration: 3,
  //   scale: 0.3,
  //   companySetupDate: 2007,
  //   customerNum: 3000,
  //   acreageNum: 6000000,
  //   teamNum: 500
  // })
  // gsap.to('.home__intro--item', {
  //   scrollTrigger: '.case__intro',
  //   duration: 0.6,
  //   scale: 1
  // })
  // home__intro--item-d
  var tl = gsap.timeline({
    scrollTrigger: '.home__intro--item-b',
    defaults: {
      duration: 0.4,
      scale: 1
    }
  })
  tl.to(`.home__intro--item-a`, {})
    .to(`.home__intro--item-b`, {})
    .to(`.home__intro--item-c`, {})
    .to(`.home__intro--item-d`, {})
  // var tl = gsap.timeline({ scrollTrigger: '.case__wall' })
  // caseImgList.value.forEach((item, index) => {
  //   let obj = index == 0 ? { scrollTrigger: '.case__wall' } : {}
  //   tl.to(`.case__item_${index + 1}`, {
  //     ...obj,
  //     opacity: 1,
  //     duration: 0.8
  //   })
  // })
  caseImgList.value.forEach((item, index) => {
    // let obj = index == 0 ? { scrollTrigger: '.case__wall' } : {}
    gsap.to(`.case__item_${index + 1}`, {
      scrollTrigger: `.case__item_${index + 1}`,
      opacity: 1,
      duration: 5
    })
  })
})
const router = useRouter()
const swipeIconList = ref([recommendIcon1, recommendIcon2, recommendIcon3])

function handleMoreCase() {
  router.push({ path: '/case' })
}
</script>

<style lang="scss" scoped>
.swipe-example {
  width: 100%;
  height: 600px;
}

.nav__bar--title {
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.popup-example-block {
  padding: 20px 24px;
  width: 50vw;
}

.home__container {
  .home__intro {
    position: relative;
    width: 100%;
    background-color: #f5f5f7b5;
    .line__point {
      position: absolute;
      top: 40px;
      left: calc(50% - 4.5px);
      width: 8px;
      height: 8px;
      border-radius: 8px;
      background-color: #e8e8f0;
    }
    .line__point--second {
      top: 140px;
    }
    .line__point--third {
      top: 220px;
    }
    .line__point--fourth {
      top: 320px;
    }
    &::before {
      position: absolute;
      left: 50%;
      margin-left: -1px;
      display: block;
      content: '';
      width: 1px;
      height: 100%;
      background-color: #e8e8f0;
    }
    &::after {
      display: block;
      content: '';
      clear: both;
      width: 1px;
    }
    .home__intro--item {
      margin: 20px 10px 10px;
      float: left;
      width: calc(50% - 30px);
      padding: 0px 0;
      clear: both;
      transform: scale(0.8);
      text-align: right;
      font-family: 'SF Pro SC', 'SF Pro Display', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue', 'Helvetica', 'Arial',
        sans-serif;
      // border-radius: 10px;
      // background: #fff;
      // box-shadow: 0px 0px 12px #00000014;
      .home__intro--title {
        font-size: 24px;
        font-weight: 600;
      }
      .home__intro--desc {
        font-size: 20px;
        font-weight: 800;
      }
    }
    .intro__right {
      float: right;
      text-align: left;
    }
  }
  .case__intro,
  .design__team,
  .service__flow,
  .call__company {
    padding: 0px 0 40px;
    width: 100%;
    text-align: center;
    .nav__title {
      padding: 30px 0 20px;
      text-align: center;
      color: #333;
      font-size: 20px;
      font-weight: 700;
    }
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
    .call__us {
      font-size: 14px;
      color: #6e6e73;
    }
    .step__box {
      padding: 10px 20px 30px;
    }
    --step-tag-background: #000;
    --step-tag-active-color: #000;
  }
  .step__box-content {
    display: flex;
    width: 80vw;
    justify-content: space-between;
    // align-items: center;
  }
  .step__box-title {
    text-align: left;
    margin-right: 20px;
  }
  .step__box-img {
    width: 120px;
    height: 80px;
    object-fit: cover;
    box-shadow: 0 0 5px 0 #ccc;
    border-radius: 10px;
  }
  .design__team {
    background-color: #f5f5f7b5;
  }
  .var-app-bar {
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .var-step__vertical-tag {
    background: rgba(0, 0, 0, 0.92) !important;
  }
  .user__intro {
    width: 100%;
    height: 100%;
    display: flex;
    color: #000;
    justify-content: center;
    .user__main__info {
      img {
        margin-top: 20px;
        box-shadow: 0px 0px 8px #00000014;
        width: 80px;
        height: 100px;
        border-radius: 10px;
        object-fit: cover;
      }
      .user__info--name {
        margin: 10px 0;
        font-size: 18px;
      }
      .user__info--job-name {
        margin: 10px 0;
        font-size: 20px;
      }
      .user__info--advantage {
        letter-spacing: 2px;
        line-height: 20px;
        // text-indent: 10px;
        text-align: left;
        margin: 10px 10px;
        font-weight: 500;
        font-size: 12px;
        color: #333;
      }
    }
  }
}

.swiper {
  width: 95vw;
  height: 280px;
  padding: 10px 0;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0px 0px 8px #00000014;
}
.swiper-slide-shadow-right,
.swiper-slide-shadow-left {
  background: none !important;
}
</style>