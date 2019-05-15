import profiles from "../../api/profiles";

export default {
  namespaced: true,

  state: {
    items: []
  },

  getters: {
    getFilteredProfiles: state => devName => {
      const devNameUppercase = devName.toUpperCase();
      return state.items.filter(profile =>
        profile.name.toUpperCase().includes(devNameUppercase)
      );
    }
  },

  mutations: {
    SET_PROFILES(state, profiles) {
      state.items = profiles;
    },
    CREATE_PROFILE(state, profile) {
      state.items = [...state.items, profile];
    }
  },

  actions: {
    fetchProfiles({ commit }) {
      return new Promise((resolve, reject) => {
        // make the call
        profiles.getProfiles(profiles => {
          commit("SET_PROFILES", profiles);
          resolve();
        });
      });
    },
    createProfile({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit("CREATE_PROFILE");
        // TODO: Ver con puri si hay que llamar a resolve... no sé cómo es el pattern
        profiles.createProfile(payload, resolve())
      });
    }
  }
};
