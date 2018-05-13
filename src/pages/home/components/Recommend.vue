<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgURL" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgURL: 'http://img1.qunarzz.com/sight/p0/1602/b2/b2af115356f50f6590.img.jpg_200x200_d3daf0af.jpg',
        title: '岭南印象园',
        desc: '这是一段简单的评论测试文字这是一段简单的评论测试文字这是一段简单的评论测试文字'
      },
      {
        id: '0002',
        imgURL: 'http://img1.qunarzz.com/sight/p0/1507/9e/7b5e0a44cb0310280b1aeb2a8dd94de8.water.jpg_200x200_3c429960.jpg',
        title: '长隆国际大马戏剧院',
        desc: '这是一段简单的评论测试文字这是一段简单的评论测试文字这是一段简单的评论测试文字'
      },
      {
        id: '0003',
        imgURL: 'http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg',
        title: '长隆野生动物世界',
        desc: '这是一段简单的评论测试文字这是一段简单的评论测试文字这是一段简单的评论测试文字'
      },
      {
        id: '0004',
        imgURL: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
        title: '广州长隆旅游度假区',
        desc: '这是一段简单的评论测试文字这是一段简单的评论测试文字这是一段简单的评论测试文字'
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
    height: px2rem(210px);
    overflow: hidden;
    display: flex;
    padding: px2rem(10px);

    .item-img-wrapper {
      display: inline-block;
      width: px2rem(200px);
      height: px2rem(200px);
      padding: px2rem(10px);

      .item-img {
        width: px2rem(200px);
        height: px2rem(200px);
      }
    }

    .item-info {
      flex: 1;
      padding: px2rem(10px);
      font-size: px2rem(28px);
      min-width: 0;

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

      .item-btn {
        line-height: px2rem(44px);
        margin-top: px2rem(24px);
        background: #ff9300;
        padding: 0 px2rem(20px);
        color: #fff;
        border-radius: px2rem(6px);
      }
    }
  }
</style>
