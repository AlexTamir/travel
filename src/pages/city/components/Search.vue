<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search-content" v-show="keyword">
      <ul>
        <li class="search-item" @click="handleCityClick(item.name)" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      // 分流
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.keyword = ''
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs['search-content'], { click: true })
  }
}
</script>

<style lang="scss" scoped>
  .search {
    height: px2rem(72px);
    padding: 0 px2rem(10px);
    background: $bgColor;
    @include font-dpr(14px);

    .search-input {
      box-sizing: border-box;
      width: 100%;
      height: px2rem(62px);
      line-height: px2rem(62px);
      padding: 0 px2rem(10px);
      border-radius: px2rem(6px);
      text-align: center;
      color: #666;
    }
  }
  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: px2rem(158px);
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;

    .search-item {
      line-height: px2rem(62px);
      padding-left: px2rem(20px);
      @include borderBottom;
      color: #666;
      background: #fff;
      @include font-dpr(14px);
    }
  }
</style>
