<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet'
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
    width: px2rem(40px);

    .item {
      line-height: px2rem(40px);
      color: $bgColor;
    }
  }
</style>
