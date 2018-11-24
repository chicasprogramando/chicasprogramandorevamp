import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export const store = new Vuex.Store({
  state: {
    loadedProjects: [],
    loadedProfiles: [],
    loadedEvents: [
      { name: 'Evento 1', date: '2018-12-2', place: 'Centro Cultural Recoleta' },
      { name: 'Evento 2' , date: '2018-4-10', place: 'Centro Cultural San Martin' },
      { name: 'Evento 3' , date: '2018-5-18', place: 'stensul' },
      { name: 'Evento 5' , date:'2018-6-9', place: 'Centro Cultural San Martin' },
      { name: 'Evento 6' , date:'2018-6-5', place: 'stensul' },
      { name: 'Evento 7' , date: '2018-11-4', place: 'stensul' },
      { name: 'Evento 8', date: '2018-3-1', place: 'Centro Cultural Recoleta' },
      { name: 'Evento 4', date: '2018-10-25', place: 'Centro Cultural Recoleta' },
    ],
    loadingApp: false
  },
  getters: {
    getEvents(state) {
      return state.loadedEvents.sort( (a,b) => {
        return new Date(b.date) - new Date(a.date);
      }).slice(0,6);
    },
    getProfiles(state) {
      console.log('getProfiles', state)
      return state.loadedProfiles 
    }
  },
  mutations: {
    SET_PROFILES(state, payload) {
      state.loadedProfiles = payload;
      console.log('SET_PROFILES', payload)
    }
  },
  actions: {
    fetchProfiles({commit}) {
      axios
        .get('../../static/data/profiles.json')
        .then( data => {
          console.log('fetchProfiles', data.data)
          let profiles = data.data
          commit('SET_PROFILES', profiles)
        })
        .catch( error => {
          console.log(error)
        })
    }
  }
})
