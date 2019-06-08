// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Jquery from 'jquery'
global.Jquery = Jquery 
global.$ = Jquery
//tmb podria ser let $ = jQuery
import { store } from './store'
import auth from '@/auth'

Vue.use(auth)

// Import the plugin here
// import AuthPlugin from "./plugins/auth";

// Install the authentication plugin here
// Vue.use(AuthPlugin);

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
