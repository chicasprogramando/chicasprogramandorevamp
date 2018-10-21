import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Proyectos from '@/components/Proyectos/Proyectos'
import Comunidad from '@/components/Comunidad/Comunidad'
import Eventos from '@/components/Eventos/Eventos'
import Contacto from '@/components/Contacto/Contacto'
import History from '@/components/Otros/History'
import LoaderDisplay from '@/components/Loaders/LoaderDisplay'
import Login from '@/components/Login/Login'


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
      component: Proyectos,
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
      path: '/loaderdisplay',
      name: 'LoaderDisplay',
      component: LoaderDisplay
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
