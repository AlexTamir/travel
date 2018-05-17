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
  props: {
    weekendList: Array
  }
}
</script>

<style lang="scss" scoped>
  .title {
    // margin-top: px2rem(20px);
    // line-height: px2rem(80px);
    // text-indent: px2rem(20px);
    padding: px2rem(30px) px2rem(20px);
    background: #eee;
    font-size: px2rem(28px);
  }
  .item {
    width: 100%;
    overflow: hidden;

    .item-img-wrapper {
      overflow: hidden;
      height: 0;
      padding-bottom: 37.4375%;

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
