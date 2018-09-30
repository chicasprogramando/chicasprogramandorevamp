import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedProjects: [],
    loadedProfiles: [],
    loadedEvents: [
      { name: 'Evento 1', date: 'Sep 12 2018', place: 'Centro Cultural Recoleta' },
      { name: 'Evento 2' , date: 'Mar 8 2018', place: 'Centro Cultural San Martin' },
      { name: 'Evento 3' , date: 'Apr 5 2018', place: 'stensul' },
      { name: 'Evento 4', date: 'Mar 1 2018', place: 'Centro Cultural Recoleta' },
      { name: 'Evento 5' , date:'Oct 10 2011', place: 'Centro Cultural San Martin' },
      { name: 'Evento 6' , date:'Oct 9 2011', place: 'stensul' },
      { name: 'Evento 7' , date:'Dic 20 2018', place: 'stensul' },
      { name: 'Evento 8', date: 'Dic 21 2018', place: 'Centro Cultural Recoleta' },
    ],
    loadingApp: false
  },
  mutations: {},
  actions: {},
  getters: {
    getEvents(state) {
      return state.loadedEvents.sort( (a,b) => {
        // console.log('places', b.place, a.place)
        // return b.date < a.date ? 1 : -1
        return new Date(a.date) - new Date(b.date);
      }).slice(0,6);
    },
  }
})
