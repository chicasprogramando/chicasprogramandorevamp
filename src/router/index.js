import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import ProjectsContainer from '@/pages/Projects/ProjectsContainer'
import Profiles from '@/pages/Profiles/Profiles'
import Events from '@/pages/Events/Events'
import Contact from '@/pages/Contact/Contact'
import History from '@/pages/History/History'
import LoaderDisplay from '@/components/Loaders/LoaderDisplay'
import Login from '@/pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsContainer
    },
    {
      path: '/profiles',
      name: 'Profiles',
      props: true,
      component: Profiles
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
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
    }
  ]
})
