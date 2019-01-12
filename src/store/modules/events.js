import events from '../../api/events';

const state = {
  items: []
}

const getters = {}

const actions = {
  getAllEvents({commit}) {
    events.getEvents( events => {
      console.log('events', events)
      commit('setEvents', events)
    })
  }
}

const mutations = {
  setEvents(state, events) {
    state.items = events;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
