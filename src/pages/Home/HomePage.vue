<template>
  <div class="home__container" color="">
    <!-- 轮播图 -->
    <var-swipe class="swipe-example" autoplay="3000">
      <var-swipe-item v-for="(item, index) in swipeIconList" :key="index">
        <img class="swipe-example-image" :src="item" />
      </var-swipe-item>
    </var-swipe>
    <div class="home__intro">
      <div class="company__main">
        <div class="cover"></div>
        <div class="content__company">
          <p
            style="
              font-size: 20px;
              font-weight: 500;
              color: #fff;
              padding: 40px 0 10px;
            "
          >
            关于友宁
          </p>
          <span
            style="
              display: inline-block;
              padding: 0;
              font-size: 12px;
              color: #fff;
              font-weight: 400;
              padding: 0 2.08333333vw 0 15px;
            "
            >用专业的服务为您创造美好的家园</span
          >
          <div class="info__main">
            <div class="info__item">
              <div class="info__num">
                {{ companyInfo.companySetupDate.toFixed(0) }}年
              </div>
              <div class="info__title">成立时间</div>
            </div>
            <div class="info_divider"></div>
            <div class="info__item">
              <div class="info__num">
                {{ companyInfo.customerNum.toFixed(0) }}+人
              </div>
              <div class="info__title">总服务客户</div>
            </div>
            <div class="info_divider"></div>
            <div class="info__item">
              <div class="info__num">
                {{ companyInfo.acreageNum.toFixed(0) }}+㎡
              </div>
              <div class="info__title">设计面积</div>
            </div>
            <div class="info_divider"></div>
            <div class="info__item">
              <div class="info__num">
                {{ companyInfo.teamNum.toFixed(0) }}+人
              </div>
              <div class="info__title">团队规模</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 案例介绍 -->
    <div class="case__intro">
      <div class="nav__title">优质案例</div>
      <div class="case__wall">
        <div
          :class="['case__item']"
          v-for="(item, index) in caseImgList"
          :key="index"
          @click="handleCurrentPreview(item, index)"
        >
          <img :src="item.thumbnail" alt="" />
          <div class="case__title">{{ item.title }}</div>
          <img
            :src="require('@/assets/imgs/360_rotate.png')"
            alt=""
            class="vr__icon"
            v-if="item.isVr"
          />
        </div>
      </div>
    </div>
    <!-- 精选视频 -->
    <div class="case__intro" v-if="caseVideoUrl">
      <div class="nav__title">精选视频</div>
      <div class="selection__video">
        <video
          autopictureinpicture="true"
          @pause="onpause"
          @play="onplay"
          height="240"
          controls
          preload="true"
          :src="caseVideoUrl"
        ></video>
      </div>
    </div>
    <!-- 设计团队 -->
    <div class="design__team">
      <div class="nav__title">团队介绍</div>
      <var-swipe class="swipe-example-design" autoplay="3000">
        <var-swipe-item v-for="(item, index) in designer" :key="index">
          <div class="design__item">
            <div
              class="design__box"
              v-for="(innerItem, innerIndex) in item"
              :key="innerIndex"
            >
              <div class="pic">
                <img :src="innerItem.avatar" alt="" />
              </div>
              <div class="design__name">{{ innerItem.name }}</div>
              <div class="design__job">{{ innerItem.jobName }}</div>
              <div class="design__description">{{ innerItem.description }}</div>
            </div>
          </div>
        </var-swipe-item>
      </var-swipe>
    </div>
    <!-- 服务流程 -->
    <div class="service__flow">
      <div class="nav__title">服务流程</div>
      <div class="step__box">
        <var-steps direction="vertical">
          <var-step>
            <template #default>
              <div class="step__box-content">
                <div class="step__box-title">顾问咨询对接</div>
                <img
                  class="step__box-img"
                  :src="require('@/assets/imgs/shejituandui.png')"
                  alt=""
                />
              </div>
            </template>
          </var-step>
          <var-step>
            <template #default>
              <div class="step__box-content">
                <div class="step__box-title">核对现场</div>
                <img
                  class="step__box-img"
                  :src="require('@/assets/imgs/shigong.png')"
                  alt=""
                />
              </div>
            </template>
          </var-step>
          <var-step>
            <template #default>
              <div class="step__box-content">
                <div class="step__box-title">确认平面方案</div>
                <img
                  class="step__box-img"
                  :src="require('@/assets/imgs/pingmian.png')"
                  alt=""
                />
              </div>
            </template>
          </var-step>
          <var-step>
            <template #default>
              <div class="step__box-content">
                <div class="step__box-title">确认立面效果方案</div>
                <img
                  class="step__box-img"
                  :src="require('@/assets/imgs/xianchang.png')"
                  alt=""
                />
              </div>
            </template>
          </var-step>
          <var-step>
            <template #default>
              <div class="step__box-content">
                <div class="step__box-title">确认施工图方案</div>
                <img
                  class="step__box-img"
                  :src="require('@/assets/imgs/limianfangan.png')"
                  alt=""
                />
              </div>
            </template>
          </var-step>
        </var-steps>
      </div>
      <var-button text size="small" outline @click="handleMoreService"
        >MORE</var-button
      >
    </div>
    <!-- 联系我们 -->
    <div class="call__company">
      <div class="nav__title">联系我们</div>
      <var-button block type="primary" @click="handleCallMe"
        >拨打电话</var-button
      >
    </div>
    <var-back-top :duration="300" />
  </div>
</template>

<script >
// import "swiper/dist/js/swiper";
// import "swiper/dist/css/swiper.css";
// import Swiper from "swiper";
import { ImagePreview } from "@varlet-vue2/ui";
import { getDesignSketchLibs, getWebsiteConfig } from "@/api/home";

export default {
  data() {
    return {
      currentShow: false,
      caseVideoUrl: "",
      caseImgList: [],
      // 公司基本信息
      companyInfo: {
        companySetupDate: 2022,
        customerNum: 100,
        acreageNum: 10000,
        teamNum: 30,
      },
      swipeIconList: [],
      designer: [
        [
          {
            jobName: "总监设计师",
            name: "俞森清",
            avatar: "https://img.picgo.net/2022/11/23/12809ec48de37c9fb.png",
            description:
              "从业8年,毕业于安徽建筑大学。擅长新中式、现代简约、美式等风格。",
            more: "从业8年,毕业于安徽建筑大学。擅长新中式、现代简约、美式等风格。从多维度思考设计美学结合功能。一切随心，用心去感悟庭院空间。",
            casePic: [],
          },
          {
            jobName: "总监设计师",
            name: "李乐依",
            avatar: "https://img.picgo.net/2022/11/29/317dd4a7438ee38b0.png",
            description:
              "从业7年，擅长大小庭院景观，私家花园等。设计是一种追求完美的生活态度。",
            more: "从业7年，擅长大小庭院景观，私家花园等。设计是一种追求完美的生活态度，是追求品味的生活概念。一切随心，用心去感悟庭院空间。",
            casePic: [],
          },

          {
            jobName: "资深设计师",
            name: "李沐海",
            avatar: "https://img.picgo.net/2022/11/23/32a689032e130f457.png",
            description:
              "从业4年,擅长风水结合的现代以及新中式风格，倡导创意生活意识。",
            more: "从业4年,擅长风水结合的现代以及新中式风格，倡导创意生活意识。创造出属于自己独特的生后方式",
            casePic: [],
          },

          {
            jobName: "资深设计师",
            name: "谢逸晨",
            avatar: "https://img.picgo.net/2022/11/29/2b28c55894c0fd597.png",
            description:
              "从业5年，每一个庭院都有独有的气质，作为设计师的需会用最专业的眼光取发现它的美",
            casePic: [],
          },
        ],
        [
          {
            jobName: "普通设计师",
            name: "杨绍伟",
            avatar: "https://img.picgo.net/2022/11/23/2074b3ef6db89c555.png",
            description:
              "从业3年其设计独特之处,在于以人为本，擅长现代简约、美式等风格。",
            casePic: [],
          },
        ],
      ],
    };
  },
  async mounted() {
    this.getSystemConfig();
  },
  methods: {
    async getSystemConfig() {
      const resp = await getDesignSketchLibs();
      getWebsiteConfig().then((conf) => {
        this.swipeIconList = conf.data?.swiper;
        this.caseImgList = resp.data.filter((item) =>
          conf.data?.excellentCaseIds.includes(item.id)
        );
        if (conf.data?.caseVideoUrl) {
          this.caseVideoUrl = conf.data?.caseVideoUrl;
        }
      });
    },
    // initLoadSwiper() {
    //   new Swiper(".swiper-container", {
    //     //direction: 'vertical', // 垂直切换选项
    //     //mousewheel: true, //滚轮
    //     autoplay: {
    //       //自动开始
    //       delay: 2500, //时间间隔
    //       disableOnInteraction: false, //*手动操作轮播图后不会暂停*
    //     },
    //     loop: true, // 循环模式选项

    //     // 如果需要分页器
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true, // 分页器可以点击
    //     },

    //     // 如果需要前进后退按钮
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },

    //     // 如果需要滚动条
    //     scrollbar: {
    //       el: ".swiper-scrollbar",
    //     },
    //   });
    // },
    // 显示案例
    handleCurrentPreview(item) {
      if (item.isVr) {
        return this.$router.push({ path: `/vr/${item.id}` });
      }
      ImagePreview({
        images: [...item?.pic],
        onChange(index) {
          console.log(index);
        },
      });
    },
    handleMoreService() {
      this.$router.push({ path: "/service_flow" });
    },
    handleCallMe() {
      window.location.href = "tel://15156571460";
    },
    onpause() {},
    onplay() {},
  },
};
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
  height: 600px;
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
    margin-top: -210px;
    // background-color: #f5f5f7b5;
    .company__main {
      width: 100%;
      height: 210px;
      // background-image: url("~@/assets/imgs/compnany.jpeg");
      // background-repeat: no-repeat;
      // background-size: 100%;
      .cover {
        position: absolute;
        left: 0;
        top: 0;
        // background: #000;
        // opacity: 0.2;
        width: 100%;
        height: 100%;
        z-index: 10;
      }
      .content__company {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        .info__main {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          .info_divider {
            margin: 0 6px;
            width: 1px;
            transform: scale(0.8);
            height: 40px;
            background: #fff;
          }
        }
        .info__item {
          color: #fff;
          .info__num {
            text-align: center;
            font-size: 18px;
          }
          .info__title {
            text-align: center;
            font-size: 12px;
          }
        }
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
    border-top: 1px solid #00000014;

    padding: 0px 10px 40px;
    text-align: center;
    .nav__title {
      padding: 40px 0 20px;
      text-align: center;
      color: #333;
      font-size: 18px;
      font-weight: 700;
      position: relative;
      &:after {
        display: block;
        content: "";
        position: absolute;
        left: 50%;
        margin-left: -27.5px;
        bottom: 10px;
        width: 55px;
        height: 4px;
        background: #000;
        border-radius: 20px;
      }
    }
    .case__wall {
      margin-bottom: 10px;
      width: 100%; // 默认宽度
      columns: 2; // 默认列数
      column-gap: 5px; // 列间距
      .case__item {
        width: 100%;
        break-inside: avoid;
        box-sizing: border-box;
        padding-top: 10px;
        position: relative;
        img {
          border-radius: 5px;
          width: 100%;
          vertical-align: top;
        }
        .case__title {
          padding: 4px 6px;
          line-height: 20px;
          text-align: left;
          font-size: 13px;
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

    .selection__video {
      background-color: rgba(0, 0, 0, 0.8);
      width: 100%;
      height: 240px;
      border-radius: 10px;
      video {
        border-radius: 10px;
        width: 100%;
        height: 240px;
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
  .swipe-example-design {
    width: 100%;
    padding-top: 10px;
  }
  .design__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    .design__box {
      box-shadow: 0 0 10px rgb(157 150 158 / 10%);
      margin-bottom: 10px;
      width: calc((100% - 20px) / 2);
      padding-top: 30px;
      .design__name {
        margin-top: 16px;
        color: #333;
        font-size: 18px;
        font-weight: 700;
      }
      .design__job {
        color: #999;
        font-size: 13px;
      }
      .design__description {
        padding: 4px;
        font-size: 12px;
        color: #666;
        line-height: 16px;
        letter-spacing: 2px;
      }
    }
    .pic {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      box-shadow: 0 0 7px rgb(117 114 117 / 35%);
      border: 1px solid rgba(216, 213, 216, 0.57);
      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }
    }
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
  .var-app-bar {
    position: fixed;
    top: 0;
    z-index: 200;
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

// .swiper {
//   width: 95vw;
//   height: 280px;
//   padding: 10px 0;
// }

// .swiper-slide {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 14px;
//   font-size: 22px;
//   font-weight: bold;
//   color: #fff;
//   background-color: #fff;
//   overflow: hidden;
//   box-shadow: 0px 0px 8px #00000014;
// }
// .swiper-slide-shadow-right,
// .swiper-slide-shadow-left {
//   background: none !important;
// }
.step__box-content {
  color: #000;
}
</style>
