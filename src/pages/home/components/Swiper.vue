<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        speed: 2000,
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1805/7c/146d42acfc252e02.jpg_750x200_a9644d7f.jpg'
      },
      {
        id: '0002',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1805/33/0c4caa3a5a69d502.jpg_750x200_3f445c0b.jpg'
      },
      {
        id: '0003',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1804/f2/91b285a08ee21c02.jpg_750x200_8a73fd08.jpg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    /* 如果设置height，是相对父级元素；设置padding的话，width是100%，height相对于width撑开26.67%的高度 */
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 26.67%;
    background: #eee;

    .swiper-img {
      width: 100%;
    }
  }
</style>

<style scoped>
  .wrapper >>> .swiper-pagination-bullet-active {
    background: #fff !important;
  }
</style>
