const state = {
  error: null
};

const mutations = {
  SET_ERROR_MSJ(state, payload) {
    // eslint-disable-next-line
    console.log("Error", payload);
    state.error = payload;
  },
  CLEAR_ERROR_MSJ(state) {
    state.error = null;
  }
};
const actions = {
  clearError(context) {
    // eslint-disable-next-line
    console.log("clearError");
    context.commit("CLEAR_ERROR_MSJ");
  }
};
const getters = {};

const errors = {
  state,
  mutations,
  actions,
  getters
};

export default errors;
