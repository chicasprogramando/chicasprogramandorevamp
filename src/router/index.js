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
import Signup from '@/pages/Signup/Signup'
import Callback from '@/views/Callback.vue'

Vue.use(Router)

// export default new Router({
const router = new Router({
  mode: 'history',
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
    },
    // auth 
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    }
  ]
})

// very basic "setup" of a global guard
router.beforeEach((to, from, next) => {
  if(to.name == 'callback') { // check if "to"-route is "callback" and allow access
    next()
  } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
    next()
  } else { // trigger auth0 login
    router.app.$auth.login()
  }
})

export default router;
