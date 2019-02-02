import events from '../../api/events';

export default {
  namespaced: true,

  state: {
    items: []
  },

  getters: {
    getAllEvents (state, getters) {
      return state.items
    }
  },

  mutations: {
    setEvents (state, events) {
      state.items = events
    }
  },

  actions: {
    fetchEvents({commit}) {
      return new Promise((resolve, reject) => {
        events.getEvents(events => {
          console.log(events)
          commit('setEvents', events)
          resolve()
        })
      })
    }
  }
}
