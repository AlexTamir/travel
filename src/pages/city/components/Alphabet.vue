<template>
  <ul class="list" ref="offsettop">
    <div class="itemwrapper">
      <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove.stop.prevent="handleTouchMove"
      >{{item}}</li>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleTouchStart (event) {
      this.$emit('change', event.target.innerHTML)
    },
    handleTouchMove (event) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 节流函数实现数据节流
      this.timer = setTimeout(() => {
        // this.$refs['offsettop'].offsetTop是列表距离顶部的高度
        const touchY = event.touches[0].clientY - this.$refs['offsettop'].offsetTop
        const osHeight = this.$refs['A'][0].offsetHeight
        const index = Math.floor((touchY - this.startY) / osHeight)
        if (index >= 0 && index <= this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }, 16)
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    align-items: center;
    position: absolute;
    top: px2rem(158px);
    right: 0;
    bottom: 0;
    font-family:Helvetica;

    .itemwrapper {
      width: px2rem(40px);
      padding: px2rem(20px) 0;
      border-radius: px2rem(20px);
      background: rgba(167, 167, 167, 0.5);

      .item {
        padding: px2rem(6px) 0;
        font-size: px2rem(24px);
        text-align: center;
      }
    }
  }
</style>
