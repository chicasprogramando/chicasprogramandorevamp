import { profiles } from '../../api/profiles'
import axios from 'axios'
import { merge } from 'ramda'

export default {
  namespaced: true,

  state: {
    profileList: [],
    userProfile: []
  },

  getters: {
    getFilteredProfiles: state => devName => {
      const devNameUppercase = devName.toUpperCase()
      return state.profileList.filter(profile =>
        profile.name.toUpperCase().includes(devNameUppercase)
      )
    },
    getUserProfile(state, getters) {
      return state.userProfile
    }
  },

  mutations: {
    SET_PROFILES(state, profiles) {
      state.profileList = profiles
    },
    SET_USER_PROFILE(state, userProfile) {
      state.userProfile = userProfile
    },
    UPDATE_USER_PROFILE(state, updatedUserProfile) {
      state.userProfile = [merge(state.userProfile, updatedUserProfile)]
    }
  },

  actions: {
    fetchProfiles({ commit }) {
      axios
        .get('https://api-chicas-programando.herokuapp.com/api/users')
        .then(function(res) {
          const profiles = res.data
          commit('SET_PROFILES', profiles)
        })
        .catch(error => console.log(error))
    },
    fetchUserProfile({ commit }) {
      commit('SET_USER_PROFILE', profiles)
      // axios
      //   .get('https://api-chicas-programando.herokuapp.com/api/user/{user_id}')
      //   .then(function(res) {
      //     console.log(res)
      //     const userProfile = res
      //     commit('SET_USER_PROFILE', userProfile)
      //   })
      //   .catch(error => console.log(error))
    },
    updateUserProfile({ commit }, payload) {
      console.log(payload)
      commit('UPDATE_USER_PROFILE', payload)
      // axios
      //   .put('https://api-chicas-programando.herokuapp.com/api/user/{user_id}', payload)
      //   .then(function(res) {
      //     console.log(res)
      //     const updatedUserProfile = res.data
      //     commit('UPDATE_USER_PROFILE', updatedUserProfile)
      //   })
      //   .catch(error => console.log(error))
    }
  }
}
