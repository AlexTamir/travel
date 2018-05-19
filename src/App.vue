<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"><!-- 这里是会被缓存的视图组件 --></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"><!-- 这里是不被缓存的视图组件 --></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
