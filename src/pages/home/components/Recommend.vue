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
  props: {
    recommendList: Array
  }
}
</script>

<style lang="scss" scoped>
  .title {
    // line-height: px2rem(80px);
    // text-indent: px2rem(20px);
    padding: px2rem(30px) px2rem(20px);
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
