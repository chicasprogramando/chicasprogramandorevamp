import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
  mutations: {},
  actions: {},
  getters: {
    getEvents(state) {
      return state.loadedEvents.sort( (a,b) => {
        return new Date(b.date) - new Date(a.date);
      }).slice(0,6);
    },
  }
})
