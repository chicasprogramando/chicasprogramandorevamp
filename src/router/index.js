import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Proyectos from '@/components/Proyectos/Proyectos'
import Comunidad from '@/components/Comunidad/Comunidad'
import Eventos from '@/components/Eventos/Eventos'
import Contacto from '@/components/Contacto/Contacto'
import History from '@/components/Otros/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/proyectos',
      name: 'Proyectos',
      component: Proyectos
    },
    {
      path: '/comunidad',
      name: 'Comunidad',
      props: true,
      component: Comunidad
    },
    {
      path: '/eventos',
      name: 'Eventos',
      component: Eventos
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
