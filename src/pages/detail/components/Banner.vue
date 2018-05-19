<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" :alt="sightName">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe679;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary @closeGallary="handleGallaryClose" :imgs="gallaryImgs" v-show="isShowGallary"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/animation/Fade'

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      isShowGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.isShowGallary = true
    },
    handleGallaryClose () {
      this.isShowGallary = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    position: relative;

    .banner-img {
      width: 100%;
    }

    .banner-info {
      display: flex;
      align-items: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding-bottom: px2rem(20px);
      color: #fff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, .7);

      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        min-height: px2rem(40px);
        background: transparent;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
      }

      .banner-title {
        flex: 1;
        font-size: 18px;
        padding-left: px2rem(20px);
      }

      .banner-number {
        height: px2rem(32px);
        line-height: px2rem(32px);
        padding: px2rem(7px) px2rem(40px);
        margin-right: px2rem(20px);
        background: rgba(0, 0, 0, .5);
        border-radius: px2rem(20px);
        font-size: px2rem(24px);

        .banner-icon {
          font-size: px2rem(24px);
          margin-right: px2rem(6px);
        }
      }
    }
  }
</style>
