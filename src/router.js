import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cuida from './views/Cuida.vue'
import Castra from './views/Castra.vue'
import Adopta from './views/Adopta.vue'
import Servicios from './views/Servicios.vue'
import Contacto from './views/Contacto.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cuida',
      name: 'cuida',
      component: Cuida
    },
    {
      path: '/castra',
      name: 'castra',
      component: Castra
    },
    {
      path: '/adopta',
      name: 'adopta',
      component: Adopta
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: Servicios
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    }
  ]
})
