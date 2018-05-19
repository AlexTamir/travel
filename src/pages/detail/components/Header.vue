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
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop) {
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
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  .header-abs {
    position: absolute;
    top: px2rem(10px);
    left: px2rem(10px);
    width: px2rem(80px);
    height: px2rem(80px);
    line-height: px2rem(80px);
    text-align: center;
    border-radius: px2rem(40px);
    background: rgba(0, 0, 0, .8);

    .abs-backicon {
      color: #fff;
      font-size: px2rem(35px);
      font-weight: bold;
    }
  }
  .header-fixed {
    z-index: 13;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: px2rem(88px);
    line-height: px2rem(88px);
    text-align: center;
    font-size: 16px;
    color: #fff;
    background: $bgColor;

    .fixed-backicon {
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
