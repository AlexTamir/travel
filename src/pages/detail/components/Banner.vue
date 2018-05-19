<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1602/b2/b2af115356f50f6590.img.jpg_600x330_edd68bef.jpg" alt="岭南印象园">
      <div class="banner-info">
        <div class="banner-title">岭南印象园(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe679;</span>
          40
        </div>
      </div>
    </div>
    <common-gallary @closeGallary="handleGallaryClose" :imgs="imgs" v-show="isShowGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      isShowGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1602/b2/b2af115356f50f6590.img.jpg_r_800x800_3d94e650.jpg',
        'http://img1.qunarzz.com/sight/p0/1509/1a/a4f870f775b3e339a9ab12d04d44ae63.water.jpg_r_800x800_c88ac34a.jpg',
        'http://img1.qunarzz.com/sight/p0/1509/ae/478bb6d07e802d4d586a7c01ef3d491b.water.jpg_r_800x800_dfb02ae5.jpg',
        'http://img1.qunarzz.com/sight/p0/1509/2a/146f0557142d0e897d441860863a481a.water.jpg_r_800x800_0f8e31bb.jpg',
        'http://img1.qunarzz.com/sight/p0/1509/84/f26e985991c93d1947fe0b0089590aba.water.jpg_r_800x800_01f820bf.jpg']
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
        // overflow: hidden;
        height: px2rem(32px);
        line-height: px2rem(32px);
        padding: px2rem(4px) px2rem(40px);
        margin-right: px2rem(20px);
        background: rgba(0, 0, 0, .5);
        border-radius: px2rem(20px);
        font-size: px2rem(24px);

        .banner-icon {
          font-size: px2rem(24px);
        }
      }
    }
  }
</style>
