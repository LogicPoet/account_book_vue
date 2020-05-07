import Vue from 'vue'
import Router from 'vue-router'
import Record from '@/components/record/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'record',
      component: Record
    }
  ]
})
