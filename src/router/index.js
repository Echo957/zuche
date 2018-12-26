import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import form from '@/components/nav1/form'
import stores from '@/components/nav2/stores'
import carInformations from '@/components/nav3/carInformations'
import appointment from '@/components/nav4/appointment'
import userInformations from '@/components/nav5/userInformations'
import userLevel from '@/components/nav5/userLevel'
import yueyudan from '@/components/nav4/yueyudan'
import map from '@/components/public/map'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/form',
          name: 'form',
          component: form
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/stores',
          name: 'stores',
          component: stores
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/carInformations',
          name: 'carInformations',
          component: carInformations
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/appointment',
          name: 'appointment',
          component: appointment
        },
        {
          path: '/yueyudan',
          name: 'yueyudan',
          component: yueyudan
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/userInformations',
          name: 'userInformations',
          component: userInformations
        },
        {
          path: '/userLevel',
          name: 'userLevel',
          component: userLevel
        },{
          path: '/map',
          name: 'map',
          component: map
        }
      ]
    }
  ]
})
