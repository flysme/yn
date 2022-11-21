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
        <div :class="['case__item', `case__item_${index + 1}`]" v-for="(item, index) in caseImgList" :key="index" @click="handleCurrentPreview(index)">
          <img :src="item" alt="" />
          <div class="case__title">110㎡新中式田园风格新中式田园风格新中式田园风格式田园风格</div>
          <img :src="vr360" alt="" class="vr__icon"  v-if="index == 0"/>
        </div>
      </div>
      <var-button text size="small" outline @click="handleMoreCase">MORE</var-button>
      <var-image-preview
        :current="currentImg"
        :images="caseImgList"
        v-model:show="showCaseImg"
      />
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
              <div class="user__info--advantage"><span>擅长 新中式、欧式，日式禅意、大花园设计，商务会洽</span> <a href="">更多></a> </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="user__intro">
            <div class="user__main__info">
              <img src="https://img2.woyaogexing.com/2018/03/08/ddca462a1c480272!400x400_big.jpg" alt="" />
              <div class="user__info--name">Kim</div>
              <div class="user__info--job-name">首席设计师</div>
              <div class="user__info--advantage"><span>擅长 新中式、欧式，日式禅意、大花园设计，商务会洽</span> <a href="">更多></a> </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="user__intro">
            <div class="user__main__info">
              <img src="https://t9.baidu.com/it/u=3344676249,2398616189&fm=193" alt="" />
              <div class="user__info--name">大俞-jay</div>
              <div class="user__info--job-name">花园施工专家</div>
              <div class="user__info--advantage"><span>擅长 新中式、欧式，日式禅意、大花园设计，商务会洽</span> <a href="">更多></a> </div>
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
      <var-button text size="small" outline @click="handleMoreService">MORE</var-button>
    </div>
    <!-- 联系我们 -->
    <div class="call__company">
      <div class="nav__title">联系我们</div>
      <var-button block type="primary" @click="handleCallMe">拨打电话</var-button>
    </div>
    <var-back-top :duration="300" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ImagePreview } from '@varlet/ui'

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

// 显示案例
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
const showCaseImg = ref(false)
const currentImg = ref(caseImgList.value[0])
function handleCurrentPreview(index) {
  if (index ==0) {
    return router.push({path: '/vr'})
  }
  currentImg.value = caseImgList.value[index]
  showCaseImg.value = true
}


// 公司基本信息
const companyInfo = reactive({
  companySetupDate: 2002,
  customerNum: 3000,
  acreageNum: 6000000,
  teamNum: 500
})





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
      duration: 0.8,
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

const swipeIconList = ref(['https://s1.ax1x.com/2022/11/20/zMEIpV.jpg','https://s1.ax1x.com/2022/11/20/zME4f0.jpg','https://s1.ax1x.com/2022/11/20/zMEhYq.jpg'])


const preview = (index) => {
  ImagePreview(caseImgList.value[index])
}

function handleMoreCase() {
  router.push({ path: '/case' })
}

function handleMoreService() {
  router.push({ path: '/service_flow' })
  
}

function handleCallMe() {
  window.location.href= 'tel://15156571460';
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
    border-top:1px solid #00000014;

    padding: 0px 10px 40px;
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
        padding-top: 10px;
        opacity: 0;
        position: relative;
        img {
          border-radius: 5px 5px 0 0;
          width: 100%;
          vertical-align: top;
        }
        .case__title {
          padding: 4px 6px;
          line-height: 20px;
          text-align: left;
          font-size: 12px;
          font-weight: 500;
          overflow:hidden;
          text-overflow:ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2; // 想要超出三行显示 就把这里改成3就好了
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
  .call__company {
    padding: 0 40px 30px;
    a {
      // width: 100%;
      // height: 50px;
    }
  }
  .step__box-content {
    display: flex;
    width: 75vw;
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