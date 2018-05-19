<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt="图片画廊">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination">
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('closeGallary')
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    z-index: 99;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;

    .wrapper {
      flex: 1;
      width: 100%;
      height: 0;
      padding-bottom: 100%;

      .swiper-container {
        height: setHeight(750px);

        .gallary-img {
          width: 100%;
          height: setImgHeight(750px);
        }

        .swiper-pagination {
          color: #fff;
          bottom: 0;
        }
      }
    }
  }
</style>

<style scoped>
  .container >>> .swiper-container {
    overflow: inherit !important;
  }
</style>
