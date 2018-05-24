<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
  .header {
    overflow: hidden;
    position: relative;
    height: px2rem(86px);
    line-height: px2rem(86px);
    text-align: center;
    background: $bgColor;
    color: #fff;
    @include font-dpr(16px);

    .back-icon {
      position: absolute;
      left: 0;
      top: 0;
      width: px2rem(64px);
      @include font-dpr(20px);
      color: #fff;
    }
  }
</style>
