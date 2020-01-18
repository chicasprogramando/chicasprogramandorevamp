import axios from "axios";

const state = {
  skills: [],
  specialties: []
};

const mutations = {
  SET_SKILLS(state, payload) {
    state.skills = payload;
  },
  SET_SPECIALTIES(state, payload) {
    state.specialties = payload;
  }
};
const actions = {
  getSharedData(context) {
    context.dispatch("getSkills");
    context.dispatch("getSpecialties");
  },
  getSkills(context) {
    axios
      .get(`${process.env.VUE_APP_API_URL}/api/skill`)
      .then(res => {
        const { data } = res.data;
        context.commit("SET_SKILLS", data);
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log(e);
      });
  },
  getSpecialties(context) {
    axios
      .get(`${process.env.VUE_APP_API_URL}/api/specialty`)
      .then(res => {
        const { data } = res.data;
        context.commit("SET_SPECIALTIES", data);
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log(e);
      });
  }
};
const getters = {
  getSkillsList: state => {
    return state.skills;
  },
  getSpecialtiesList: state => {
    return state.specialties;
  }
};

const shared = {
  state,
  mutations,
  actions,
  getters
};

export default shared;
