<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  .item-title {
    line-height: px2rem(80px);
    padding: 0 px2rem(20px);
    @include borderBottom;
    @include font-dpr(16px);

    .item-title-icon {
      display: inline-block;
      position: relative;
      top: px2rem(6px);
      left: px2rem(6px);
      width: px2rem(36px);
      height: px2rem(36px);
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 px2rem(-45px) no-repeat;
      background-size: px2rem(40px) px2rem(300px);
    }
  }
  .item-children {
    padding: 0 px2rem(20px);
  }
</style>
