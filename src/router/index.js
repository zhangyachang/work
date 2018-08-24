import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Production from '@/components/Productions'
import Monitor from '@/components/monitoring'
import RealTimeComp from '@/components/realTimeComp'
import circle1 from '@/components/mods/circle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/production',
      name: 'Product',
      component: Production
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: Monitor
    },
    {
      path: '/realTime',
      component: RealTimeComp
    },
    {
      path: '/circle',
      component: circle1
    }
  ]
})
