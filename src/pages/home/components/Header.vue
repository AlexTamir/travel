<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input search-icon">
      <span class="iconfont search-icon">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
    // ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    height: px2rem(86px);
    // line-height: px2rem(86px);
    background: $bgColor;
    color: #fff;
    @include font-dpr(14px);

    .header-left {
      width: px2rem(64px);
      float: left;
      text-align: center;

      .back-icon {
        @include font-dpr(20px);
      }
    }

    .header-input {
      flex: 1;
      height: px2rem(64px);
      line-height: px2rem(64px);
      // margin-top: px2rem(12px);
      margin-left: px2rem(10px);
      padding-left: px2rem(10px);
      border-radius: px2rem(10px);
      background: #fff;
      color: #ccc;

      .search-icon {
        @include font-dpr(15px);
      }
    }

    .header-right {
      float: right;
      padding: 0 px2rem(10px);
      text-align: center;
      color: #fff;

      .arrow-icon {
        @include font-dpr(12px);
      }
    }
  }
</style>
