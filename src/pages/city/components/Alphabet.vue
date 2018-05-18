<template>
  <ul class="list" ref="offsettop">
    <div class="itemwrapper">
      <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
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
    top: px2rem(160px);
    right: 0;
    bottom: 0;
    font-family:Helvetica;

    .itemwrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: px2rem(40px);
      padding: px2rem(20px) 0;
      border-radius: px2rem(20px);
      background: rgba(167, 167, 167, 0.5);

      .item {
        padding: px2rem(4px);
        line-height: 1;
        font-size: px2rem(22px);
        color: #000;
      }
    }
  }
</style>
