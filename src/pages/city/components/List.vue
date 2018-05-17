<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" @click="handleCityClick(item.name)" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(lists, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" @click="handleCityClick(item.name)" v-for="item of lists" :key="item.id">
          <div class="item border-bottom">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      // this.$store.commit('changeCity', city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .border-topbottom {
    &::before {
      border-color: #ccc;
    }
    &::after {
      border-color: #ccc;
    }
  }
  .border-bottom {
    &::before {
      border-color: #ccc;
    }
  }
  .list {
    position: absolute;
    top: px2rem(160px);
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;

    .title {
      // height: px2rem(66px);
      // line-height: px2rem(66px);
      padding: px2rem(20px);
      background: #eee;
      font-size: 14px;
      color: #666;
    }
    .button-list {
      padding: px2rem(10px) px2rem(60px) px2rem(10px) px2rem(10px);
      overflow: hidden;
      font-size: 14px;

      .button-wrapper {
        width: 33.33%;
        float: left;

        .button {
          margin: px2rem(10px);
          padding: px2rem(10px) 0;
          text-align: center;
          border: px2rem(2px) solid #ccc;
          border-radius: px2rem(6px);
        }
      }
    }
    .item-list {
      font-size: 14px;
      .item{
        // height: px2rem(54px);
        // line-height: px2rem(54px);
        padding: px2rem(20px);
        color: #666;
      }
    }
  }
</style>
