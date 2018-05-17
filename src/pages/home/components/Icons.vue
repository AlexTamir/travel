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
  .swiper-container {
    height: px2rem(370px) !important;
  }
  .swiper-pagination-bullets {
    bottom: 0 !important;
  }

  .icons {
    width: 100%;
    height: px2rem(370px);
    padding-top: px2rem(10px);
    margin-bottom: px2rem(20px);
    overflow: hidden;

    .icon {
      width: 25%;
      height: px2rem(150px);
      float: left;
      padding-top: px2rem(10px);
      text-align: center;
      overflow: hidden;

      .icon-img-wrapper {
        display: inline-block;
        width: px2rem(100px);
        height: px2rem(100px);

        .icon-img {
          width: px2rem(100px);
          height: px2rem(100px);
        }
      }

      .icon-desc {
        margin-top: px2rem(18px);
        color: #212121;
        height: px2rem(32px);
        line-height: px2rem(32px);
        font-size: px2rem(28px);
        @include ellipsis;
      }
    }
  }
</style>

<style scoped>
  .icons >>> .swiper-pagination-bullet-active {
    background: rgba(0,175,190,.8) !important;
  }
</style>
