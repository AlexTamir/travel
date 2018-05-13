<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgURL" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgURL: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '广州必游TOP10',
        desc: '感受现代与传统相融合的广州'
      },
      {
        id: '0002',
        imgURL: 'http://img1.qunarzz.com/sight/p0/1504/8d/8d679d9704ebe8a3.img.jpg_r_640x214_0c7d3a3e.jpg',
        title: '广东赏花好去处',
        desc: '春光易逝，好花还需及时赏'
      },
      {
        id: '0003',
        imgURL: 'http://img1.qunarzz.com/sight/source/1606/88/56f7f4bd0493fe.jpg_r_640x214_f8c0994a.jpg',
        title: '签到广州长隆',
        desc: '来广州来长隆，就对了，就够了~'
      },
      {
        id: '0004',
        imgURL: 'http://img1.qunarzz.com/sight/source/1505/50/07fa9343791682.jpg_r_640x214_c8c3d798.jpg',
        title: '自然户外好去处',
        desc: '快快来到户外，感受花城的魅力'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin-top: px2rem(20px);
    line-height: px2rem(80px);
    text-indent: px2rem(20px);
    background: #eee;
    font-size: px2rem(28px);
  }
  .item {
    width: 100%;
    overflow: hidden;

    .item-img-wrapper {
      overflow: hidden;
      height: 0;
      padding-bottom: 33.9%;

      .item-img {
        width: 100%;
      }
    }

    .item-info {
      font-size: px2rem(28px);
      padding: px2rem(10px);

      .item-title {
        line-height: px2rem(54px);
        font-size: px2rem(32px);
        @include ellipsis;
      }

      .item-desc {
        line-height: px2rem(54px);
        color: #ccc;
        @include ellipsis;
      }
    }
  }
</style>
