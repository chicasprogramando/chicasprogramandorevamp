import projects from '../../api/projects';

export default {
  namespaced: true,

  state: {
    items: []
  },

  getters: {
    getAllProjects (state, getters) {
      return state.items
    }
  },

  mutations: {
    setProjects (state, projects) {
      state.items = projects
    }
  },

  actions: {
    fetchProjects({commit}) {
      return new Promise((resolve, reject) => {
        projects.getProjects(projects => {
          commit('setProjects', projects)
          resolve()
        })
      })
    }
  }
}