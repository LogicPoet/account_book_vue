import Vue from 'vue'
import Router from 'vue-router'
import Record from '@/views/record/index'


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
