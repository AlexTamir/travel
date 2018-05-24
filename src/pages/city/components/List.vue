<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" @click="handleCityClick(item.name)" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(lists, key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list" @click="handleCityClick(item.name)" v-for="item of lists" :key="item.id">
          <div class="item">{{item.name}}</div>
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
  activated () {
    this.scroll = new Bscroll(this.$refs.wrapper, { click: true })
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
  .list {
    overflow: hidden;
    position: absolute;
    top: px2rem(158px);
    bottom: 0;
    left: 0;
    right: 0;
    @include font-dpr(14px);

    .title {
      // line-height: px2rem(54px);
      padding: px2rem(20px);
      // border-top: 1px solid #ccc;
      // border-bottom: 1px solid #ccc;
      background: #eee;
      color: #666;
    }
    .button-list {
      overflow: hidden;
      padding: px2rem(10px) px2rem(60px) px2rem(10px) px2rem(10px);

      .button-wrapper {
        width: 33.33%;
        float: left;

        .button {
          margin: px2rem(10px);
          padding: px2rem(10px) 0;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: px2rem(6px);
        }
      }
    }
    .item{
      line-height: px2rem(76px);
      padding-left: px2rem(20px);
      @include borderBottom;
    }
  }
</style>
