import axios from "axios";
import router from "../../router";
import { formatListForAutoSelect } from "../../utils/helpers";
import { getField, updateField } from "vuex-map-fields";

const state = {
  profile: {
    name: "",
    image_path: "",
    twitter: "",
    linkedin: "",
    github: "",
    skill: [],
    specialty: []
  },
  profileList: []
};

const mutations = {
  SET_PROFILE_INFO(state, payload) {
    state.profile = { ...state.profile, ...payload };
  },
  // updateField is use to mutate form fields directly
  updateField
};
const actions = {
  createProfile(context, payload) {
    const user = context.getters.getUserData;
    const profileInfo = {
      ...payload,
      UserId: user.id
    };

    axios
      .post(`${process.env.VUE_APP_API_URL}/api/profile`, profileInfo)
      .then(res => {
        const { data } = res.data;
        context.dispatch("getProfile", data.id);
        context.dispatch("getUser", { id: user.id });
      })
      .catch(e => {
        const { message } = e.response.data;
        context.commit("SET_ERROR_MSJ", message);
        router.replace("/error");
      });
  },
  updateProfile(context, payload) {
    const profile = context.getters.getProfileData;
    axios
      .put(`${process.env.VUE_APP_API_URL}/api/profile/${profile.id}`, payload)
      .then(res => {
        const { data } = res.data;
        context.commit("SET_PROFILE_INFO", data);
        router.replace("/community");
      })
      .catch(e => {
        const { message } = e.response.data;
        context.commit("SET_ERROR_MSJ", message);
        router.replace("/error");
      });
  },
  getProfile(context, payload) {
    const user = context.getters.getUserData;
    const profileId = payload ? payload : user.ProfileId;

    axios
      .get(`${process.env.VUE_APP_API_URL}/api/profile/${profileId}`)
      .then(res => {
        const { data } = res.data;
        // TODO: data should return skills and specialties
        context.commit("SET_PROFILE_INFO", data);
      })
      .catch(e => {
        const { message } = e.response.data;
        context.commit("SET_ERROR_MSJ", message);
        router.replace("/error");
      });
  }
};
const getters = {
  getProfileData: state => {
    if (state.profile.specialty && state.profile.skill) {
      const formatedSpecialties = formatListForAutoSelect(
        state.profile.specialty
      );
      const formatedSkills = formatListForAutoSelect(state.profile.skill);
      return {
        ...state.profile,
        specialty: formatedSpecialties,
        skill: formatedSkills
      };
    }
    return state.profile;
  },
  // getField is use to get form fields values from state
  getField
};

const profile = {
  state,
  mutations,
  actions,
  getters
};

export default profile;
