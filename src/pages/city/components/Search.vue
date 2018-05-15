<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'City-Search'
}
</script>

<style lang="scss" scoped>
  .search {
    height: px2rem(72px);
    padding: 0 px2rem(10px);
    background: $bgColor;
    font-size: 14px;

    .search-input {
      box-sizing: border-box;
      width: 100%;
      height: px2rem(62px);
      line-height: px2rem(62px);
      padding: 0 px2rem(10px);
      text-align: center;
      border-radius: px2rem(6px);
      color: #666;
    }
  }
</style>
