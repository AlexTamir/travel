<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgURL" alt="去哪儿门票">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        // speed: 2000,
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper /deep/ .swiper-pagination-bullet-active {
    background: #fff;
  }
  .wrapper /deep/ .swiper-pagination-bullet {
    @include px-dpr(width, 8px);
    @include px-dpr(height, 8px);
    @include px-dpr(margin-left, 5px);
    @include px-dpr(margin-right, 5px);
  }
  .wrapper {
    /* 如果设置height，是相对父级元素；设置padding的话，width是100%，height相对于width撑开26.67%的高度 */
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.67%;
    background: #eee;

    .swiper-img {
      width: 100%;
    }
  }
</style>
