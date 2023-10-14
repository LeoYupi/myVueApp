import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import more from '../views/more/index.vue'
import main from '../views/main/index.vue'
import video from '../views/video/index.vue'
import alldevice from '../views/alldevice/index.vue'
import singledevice from '../views/singledevice/index.vue'
import form from '../views/form/index.vue'
import formCreate from '../views/formCreate/index.vue'
import formChange from '../views/formChange/index.vue'
import personnel_management from '../views/personnel_management/index.vue'
import test from '../views/test/index.vue'
import processes from '../views/processes/index.vue'
import fault from '../views/fault/index.vue'
import tabbar from '../views/tabbar/index.vue'
import faultSubmit from '../views/faultSubmit/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/tabbar/main'
    },
    {
      path: '/test',
      component: test
    },
    {
      path:'/tabbar',
      component:tabbar,
      children:[
        {
          path: 'more',
          component: more
        },
        {
          path:'main',
          component:main
        }
      ]
    },
    {
      path:'/video',
      component:video
    },
    {
      path:'/alldevice',
      component:alldevice
    },
    {
      path:'/form',
      component:form
    },
    {
      path:'/formCreate',
      component:formCreate
    },
    {
      path:'/formChange',
      component:formChange
    },
    {
      path:'/personnel_management',
      component: personnel_management
    },
    {
      path:'/processes',
      component:processes
    },
    {
      path:'/fault',
      component:fault
    },
    {
      path:'/faultSubmit',
      component:faultSubmit
    },
    {
      path:'/singledevice',
      component:singledevice,
        children:[
          {
            path:'huadu/M3',
            component:()=>import('../views/huadu/M3/index.vue')
          },
          {
            path:'huadu/gongkongjigui',
            component:()=>import('../views/huadu/gongkongjigui/index.vue')
          },
          {
            path:'huadu/M5',
            component:()=>import('../views/huadu/M5/index.vue')
          },
          {
            path:'huadu/litiku',
            component:()=>import('../views/huadu/litiku/index.vue')
          },
          {
            path:'huangpu/gongkongjigui',
            component:()=>import('../views/huangpu/gongkongjigui/index.vue')
          },
          {
            path:'huangpu/dianji',
            component:()=>import('../views/huangpu/dianji/index.vue')
          },
          {
            path:'huangpu/litiku',
            component:()=>import('../views/huangpu/litiku/index.vue')
          }
        ]
    }
  ]
})
