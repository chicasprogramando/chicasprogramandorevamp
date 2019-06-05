import profiles from '../../api/profiles'

export default {
  namespaced: true,

  state: {
    items: []
  },

  getters: {
    getFilteredProfiles: state => devName => {
      const devNameUppercase = devName.toUpperCase()
      return state.items.filter(profile =>
        profile.name.toUpperCase().includes(devNameUppercase)
      )
    }
  },

  mutations: {
    SET_PROFILES(state, profiles) {
      state.items = profiles
    },
    CREATE_PROFILE(state, profile) {
      console.log(profile)
      state.items = [...state.items, profile]
    }
  },

  actions: {
    fetchProfiles({ commit }) {
      return new Promise((resolve, reject) => {
        // make the call
        profiles.getProfiles(profiles => {
          commit('SET_PROFILES', profiles)
          resolve()
        })
      })
    },
    createProfile({ commit }, payload) {
      commit('CREATE_PROFILE', payload)
    }
  }
}
