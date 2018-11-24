import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export const store = new Vuex.Store({
  state: {
    loadedProjects: [],
    loadedProfiles: [],
    loadedEvents: [
      {
        name: 'Evento 1',
        date: '2018-12-2',
        place: 'Centro Cultural Recoleta'
      },
      {
        name: 'Evento 2',
        date: '2018-4-10',
        place: 'Centro Cultural San Martin'
      },
      { name: 'Evento 3', date: '2018-5-18', place: 'stensul' },
      {
        name: 'Evento 5',
        date: '2018-6-9',
        place: 'Centro Cultural San Martin'
      },
      { name: 'Evento 6', date: '2018-6-5', place: 'stensul' },
      { name: 'Evento 7', date: '2018-11-4', place: 'stensul' },
      { name: 'Evento 8', date: '2018-3-1', place: 'Centro Cultural Recoleta' },
      {
        name: 'Evento 4',
        date: '2018-10-25',
        place: 'Centro Cultural Recoleta'
      }
    ],
    loadingApp: false
  },
  getters: {
    getEvents(state) {
      return state.loadedEvents
        .sort((a, b) => {
          return new Date(b.date) - new Date(a.date)
        })
        .slice(0, 6)
    },
    getProfiles(state) {
      return state.loadedProfiles
    }
  },
  mutations: {
    SET_PROFILES(state, payload) {
      state.loadedProfiles = payload
    },
    CREATE_PROFILE(state, payload) {
      state.loadedProfiles.push(payload)
    }
  },
  actions: {
    fetchProfiles({ commit }) {
      axios
        .get('../../static/data/profiles.json')
        .then(data => {
          let profiles = data.data
          commit('SET_PROFILES', profiles)
        })
        .catch(error => {
          console.log(error)
        })
    },
    createProfile({ commit }, payload) {
      const profile = {
        id: 1,
        name: payload.name,
        title: payload.title,
        image: payload.image,
        role_name: payload.role_name,
        search_project: payload.search_project,
        senority: payload.senority,
        skills: payload.skills,
        about_me: payload.about_me,
        linkedin: payload.linkedin,
        github: payload.github,
        twitter: payload.twitter
      }
      // Here we should reach to the DB
      commit('CREATE_PROFILE', profile)
    }
  }
})
