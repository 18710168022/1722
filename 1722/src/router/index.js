import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/incex'
import City from '@/pages/city/incex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
