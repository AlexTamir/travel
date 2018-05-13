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
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    width: 100%;
    height: px2rem(88px);
    line-height: px2rem(88px);
    background: $bgColor;
    color: #fff;
    font-size: 14px;

    .header-left {
      width: px2rem(80px);
      height: px2rem(88px);
      float: left;

      .back-icon {
        font-size: px2rem(36px);
        margin-left: px2rem(12px);
      }
    }

    .header-input {
      flex: 1;
      box-sizing: border-box;
      height: px2rem(60px);
      line-height: px2rem(60px);
      margin: px2rem(14px) 0;
      background: #fff;
      border-radius: px2rem(6px);
      color: #e4e7ea;
      padding-left: px2rem(20px);
    }

    .header-right {
      width: px2rem(132px);
      height: 100%;
      float: right;
      text-align: center;

      .arrow-icon {
        margin-left: px2rem(-4px);
        font-size: px2rem(24px);
      }
    }
  }
</style>
