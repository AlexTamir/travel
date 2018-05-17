<template>
  <ul class="list" ref="offsettop">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
    >{{item}}</li>
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
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (event) {
      this.$emit('change', event.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (event) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // this.$refs['offsettop'].offsetTop是列表距离顶部的高度
          const touchY = event.touches[0].clientY - this.startY
          const osHeight = this.$refs['A'][0].offsetHeight
          const index = Math.floor((touchY - this.startY) / osHeight)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: px2rem(160px);
    right: 0;
    bottom: 0;
    width: px2rem(60px);

    .item {
      line-height: px2rem(36px);
      color: $bgColor;
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: px2rem(-20px);
        right: px2rem(-20px);
      }
    }
  }
</style>
