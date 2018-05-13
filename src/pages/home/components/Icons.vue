<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgURL" :alt="item.desc">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [{
        id: '0001',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '旅游景点门票低价'
      },
      {
        id: '0002',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '必游榜单'
      },
      {
        id: '0003',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      },
      {
        id: '0004',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        desc: '公园'
      },
      {
        id: '0005',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
        desc: '游船游艇'
      },
      {
        id: '0006',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      },
      {
        id: '0007',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '名胜古迹'
      },
      {
        id: '0008',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      },
      {
        id: '0009',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
        desc: '玩转长隆'
      },
      {
        id: '0010',
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        desc: '全部玩乐'
      }]
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
  .icons {
    width: 100%;
    height: px2rem(370px);
    padding-top: px2rem(10px);
    overflow: hidden;

    .icon {
      width: 25%;
      height: px2rem(150px);
      float: left;
      padding-top: px2rem(10px);
      text-align: center;
      overflow: hidden;

      .icon-img {
        display: inline-block;
        width: px2rem(110px);
        height: px2rem(110px);

        .icon-img-content {
          width: px2rem(110px);
          height: px2rem(110px);
        }
      }

      .icon-desc {
        margin-top: px2rem(10px);
        color: #212121;
        font-size: 14px;
        @include ellipsis;
      }
    }
  }
</style>

<style lang="scss">
  .swiper-container {
    height: px2rem(370px) !important;
  }
  .swiper-pagination-bullets {
    bottom: 0 !important;
  }
  .swiper-pagination-bullet-active {
    background: rgba(0,175,190,.8) !important;
  }
</style>
