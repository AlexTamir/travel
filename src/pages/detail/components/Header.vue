<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="isShowAbs">
      <span class="iconfont abs-backicon">&#xe624;</span>
    </router-link>
    <div class="header-fixed" :style="opacityStyle" v-show="!isShowAbs">
      <router-link to="/">
        <span class="iconfont fixed-backicon">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShowAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 0) {
        // 处理fixed头部渐隐渐现效果
        let opacity = scrollTop / 80
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.isShowAbs = false
        return
      }
      this.isShowAbs = true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destoryed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  .header-abs {
    position: absolute;
    top: px2rem(20px);
    left: px2rem(20px);
    width: px2rem(80px);
    height: px2rem(80px);
    line-height: px2rem(80px);
    border-radius: px2rem(40px);
    text-align: center;
    background: rgba(0, 0, 0, .8);

    .abs-backicon {
      color: #fff;
      @include font-dpr(20px);
    }
  }
  .header-fixed {
    z-index: 13;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: px2rem(86px);
    line-height: px2rem(86px);
    background: $bgColor;
    color: #fff;
    @include font-dpr(16px);
    text-align: center;

    .fixed-backicon {
      position: absolute;
      left: 0;
      top: 0;
      width: px2rem(64px);
      text-align: center;
      color: #fff;
      @include font-dpr(20px);
    }
  }
</style>
