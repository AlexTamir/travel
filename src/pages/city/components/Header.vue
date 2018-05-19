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
    position: relative;
    width: 100%;
    height: px2rem(88px);
    line-height: px2rem(88px);
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background: $bgColor;

    .back-icon {
      position: absolute;
      left: 0;
      top: 0;
      width: px2rem(80px);
      height: px2rem(88px);
      line-height: px2rem(88px);
      color: #fff;
      font-size: px2rem(35px);
      font-weight: bold;
    }
  }
</style>
