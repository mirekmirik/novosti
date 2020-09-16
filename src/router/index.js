import Vue from 'vue'
import VueRouter from 'vue-router'
import Valuta from '../views/Valuta.vue'
import News from '../views/News.vue'
import Weather from '../views/Weather.vue'
import Covid from '../views/Covid19.vue'
import Info from '../views/Info.vue'
Vue.use(VueRouter)

  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/valuta',
      name: 'valuta',
      component: Valuta
    },
    {
       path: '/',
       name: 'news',
       component: News
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather
    },
    {
      path: '/covid',
      name: 'covid',
      component: Covid
    },
    {
    path: '/info',
    name: 'info',
    component: Info
    }
  ]
})

export default router
