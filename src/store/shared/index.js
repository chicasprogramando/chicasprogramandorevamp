import axios from "axios";

const state = {
  skills: [],
  specialties: [],
  emailSuccess: false,
  emailError: false,
};

const mutations = {
  SET_SKILLS(state, payload) {
    state.skills = payload;
  },
  SET_SPECIALTIES(state, payload) {
    state.specialties = payload;
  },
  SET_EMAIL_SUCCESS(state, payload) {
    state.emailSuccess = payload;
  },
  SET_EMAIL_ERROR(state, payload) {
    state.emailError = payload;
  },
};
const actions = {
  fetchSharedData(context) {
    context.dispatch("fetchSkills");
    context.dispatch("fetchSpecialties");
  },
  fetchSkills(context) {
    axios
      .get(`${process.env.VUE_APP_API_URL}/api/skill`)
      .then((res) => {
        const { data } = res.data;
        context.commit("SET_SKILLS", data);
      })
      .catch((e) => {
        // eslint-disable-next-line
        console.log(e);
      });
  },
  fetchSpecialties(context) {
    axios
      .get(`${process.env.VUE_APP_API_URL}/api/specialty`)
      .then((res) => {
        const { data } = res.data;
        context.commit("SET_SPECIALTIES", data);
      })
      .catch((e) => {
        // eslint-disable-next-line
        console.log(e);
      });
  },
  sendContactEmail(context, payload) {
    axios
      .post(`${process.env.VUE_APP_API_URL}/api/mailer`, payload)
      .then((res) => {
        let emailSuccess = true;
        context.commit("SET_EMAIL_SUCCESS", emailSuccess);
        setTimeout(function() {
          emailSuccess = false;
          context.commit("SET_EMAIL_SUCCESS", emailSuccess);
        }, 3000);
      })
      .catch((e) => {
        let emailError = true;
        context.commit("SET_EMAIL_ERROR", emailError);
        setTimeout(function() {
          emailSuccess = false;
          context.commit("SET_EMAIL_ERROR", emailError);
        }, 3000);
        console.log(e);
      });
  },
};
const getters = {
  getSkillsList: (state) => {
    return state.skills;
  },
  getSpecialtiesList: (state) => {
    return state.specialties;
  },
  getEmailSuccess: (state) => {
    return state.emailSuccess;
  },
  getEmailError: (state) => {
    return state.emailError;
  },
};

const shared = {
  state,
  mutations,
  actions,
  getters,
};

export default shared;
