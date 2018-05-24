<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" :to="'/detail/' + item.id" class="item borderBottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgURL" :alt="item.title">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
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
    padding: px2rem(30px) 0;
    background: #eee;
    @include font-dpr(16px);
    text-indent: px2rem(20px);
  }
  .item {
    overflow: hidden;
    display: flex;
    height: px2rem(200px);
    border-bottom: 1px solid #eaeaea;
    @include font-dpr(14px);

    .item-img {
      width: px2rem(180px);
      height: px2rem(180px);
      padding: px2rem(10px);
    }

    .item-info {
      flex: 1;
      padding: px2rem(10px);
      /* 这个min-width有什么用呢? */
      min-width: 0;

      .item-title {
        line-height: px2rem(54px);
        @include font-dpr(16px);
        @include ellipsis;
      }

      .item-desc {
        line-height: px2rem(40px);
        color: #ccc;
        @include ellipsis;
      }

      .item-btn {
        line-height: px2rem(44px);
        margin-top: px2rem(16px);
        padding: 0 px2rem(20px);
        border-radius: px2rem(6px);
        background: #ff9300;
        color: #fff;
      }
    }
  }
</style>
