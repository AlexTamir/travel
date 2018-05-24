<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img-wrapper">
            <img class="icon-img" :src="item.imgURL" :alt="item.desc">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
  .icons /deep/ .swiper-pagination-bullet {
    @include px-dpr(width, 8px);
    @include px-dpr(height, 8px);
    @include px-dpr(margin-left, 5px);
    @include px-dpr(margin-right, 5px);
  }
  .icons /deep/ .swiper-container {
    height: px2rem(415px);
  }
  .icons /deep/ .swiper-pagination-bullets {
    bottom: px2rem(10px);
  }
  .icons {
    height: px2rem(415px);
    margin-top: px2rem(10px);

    .icon {
      overflow: hidden;
      position: relative;
      float: left;
      width: 25%;
      height: 0;
      /* padding-bottom百分比是以包裹它的容器的宽度作为计算基准 */
      padding-bottom: 25%;

      .icon-img-wrapper {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: px2rem(44px);
        padding: px2rem(10px);

        .icon-img {
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }

      .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: px2rem(44px);
        line-height: px2rem(44px);
        text-align: center;
        color: #333;
        @include font-dpr(14px);
        @include ellipsis;
      }
    }
  }
</style>
