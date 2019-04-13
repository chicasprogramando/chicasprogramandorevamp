import projects from '../../api/projects'

export default {
  namespaced: true,

  state: {
    items: []
  },

  getters: {
    getAllProjects(state, getters) {
      return state.items
    }
  },

  mutations: {
    SET_PROJECTS(state, payload) {
      state.items = payload
    },
    CREATE_PROJECT(state, payload) {
      state.items = [...state.items, payload]
    }
  },

  actions: {
    fetchProjects({ commit }) {
      return new Promise((resolve, reject) => {
        projects.getProjects(projects => {
          commit('SET_PROJECTS', projects)
          resolve()
        })
      })
    },
    createProject({ commit }, payload) {
      console.log('pay', payload)
      commit('CREATE_PROJECT', payload)
    }
  }
}
