<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
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
    padding: px2rem(30px) 0;
    background: #eee;
    @include font-dpr(16px);
    text-indent: px2rem(20px);
  }
  .item {
    @include font-dpr(14px);

    .item-img-wrapper {
      overflow: hidden;
      // height: 0;
      // padding-bottom: 37.4375%;

      .item-img {
        width: 100%;
      }
    }

    .item-info {
      padding: px2rem(10px);

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
    }
  }
</style>
