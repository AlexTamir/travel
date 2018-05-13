<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    line-height: px2rem(86px);
    background: $bgColor;
    color: #fff;
    font-size: 14px;

    .header-left {
      width: px2rem(64px);
      float: left;
      text-align: center;

      .back-icon {
        font-size: px2rem(40px);
      }
    }

    .header-input {
      flex: 1;
      height: px2rem(64px);
      line-height: px2rem(64px);
      margin-top: px2rem(12px);
      margin-left: px2rem(20px);
      padding-left: px2rem(20px);
      border-radius: px2rem(10px);
      background: #fff;
      color: #ccc;
    }

    .header-right {
      width: px2rem(124px);
      float: right;
      text-align: center;

      .arrow-icon {
        margin-left: px2rem(-4px);
        font-size: px2rem(24px);
      }
    }
  }
</style>
