<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
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
    line-height: px2rem(90px);
    padding-left: px2rem(20px);
    text-indent: px2rem(40px);
    font-size: px2rem(30px);
    position: relative;

    .item-title-icon {
      display: inline-block;
      position: absolute;
      top: px2rem(28px);
      left: px2rem(20px);
      width: px2rem(36px);
      height: px2rem(36px);
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 px2rem(-45px) no-repeat;
      background-size: px2rem(40px) px2rem(300px);
    }
  }
  .item-children {
    padding-left: px2rem(20px);
  }
</style>
