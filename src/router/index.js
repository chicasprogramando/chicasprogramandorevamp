import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import ProjectsContainer from '@/pages/Projects/ProjectsContainer'
import Community from '@/pages/Community/Community'
import Profile from '@/pages/Profile/Profile'
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
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/community',
      name: 'Community',
      props: true,
      component: Community
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
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
