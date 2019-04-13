import profiles from '../../api/profiles';

export default {
  namespaced: true,

  state: {
    items: []
  },

  getters: {
    // getAllProfiles (state, getters) { // <-- this function returns all the profiles without filters
    //   return state.items
    // },
    getFilteredProfiles: (state) => (devName) => {
      const devNameUppercase = devName.toUpperCase();
      return state.items.filter(profile => profile.name.toUpperCase().includes(devNameUppercase))
    }
  },

  mutations: {
    SET_PROFILES (state, profiles) {
      state.items = profiles
    },
    CREATE_PROFILE (state, profile) {
      state.items = [...state.items, profile]
    }
  },

  actions: {
    fetchProfiles({commit}) {
      return new Promise((resolve, reject) => {
        // make the call
        profiles.getProfiles(profiles => {
          // console.log('profiles', profiles)
          commit('SET_PROFILES', profiles)
          resolve()
        })
      })
    },
    createProfile({commit}, payload) {      
        // console.log('adding profile', payload)
        commit('CREATE_PROFILE', payload)
    }
    
  }
}
