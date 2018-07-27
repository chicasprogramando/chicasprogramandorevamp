import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedProjects: [],
    loadedProfiles: [],
    loadedEvents: [],
    loadingApp: false
  },
  mutations: {},
  actions: {},
  getters: {}
})
