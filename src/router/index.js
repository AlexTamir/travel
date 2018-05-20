import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home'),
      meta: {
        keepAlive: true, // 此组件需要被缓存
        savedPosition: 0
      }
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City'),
      meta: {
        keepAlive: true // 此组件需要被缓存
      }
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail'),
      meta: {
        keepAlive: false // 此组件不需要被缓存
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
