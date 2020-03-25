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
  profileList: [],
  isLoadingProfile: false,
  isLoadingProfileList: true
};

const mutations = {
  SET_PROFILE_INFO(state, payload) {
    state.profile = { ...state.profile, ...payload };
  },
  SET_ALL_PROFILES(state, payload) {
    state.profileList = payload;
  },
  UPDATE_PROFILE_LOADING(state, payload) {
    state.isLoadingProfile = payload;
  },
  UPDATE_PROFILE_LIST_LOADING(state, payload) {
    state.isLoadingProfileList = payload;
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
    context.commit("UPDATE_PROFILE_LOADING", true);
    // first time the user posts a profile it needs the user id
    axios
      .post(`${process.env.VUE_APP_API_URL}/api/profile`, profileInfo)
      .then(res => {
        const { data } = res.data;
        context.dispatch("fetchProfile", data.id);
        context.dispatch("fetchUser", { id: user.id });
        context.commit("UPDATE_PROFILE_LOADING", false);
      })
      .catch(e => {
        const { message } = e.response.data;
        context.commit("SET_ERROR_MSJ", message);
        router.replace("/error");
      });
  },
  updateProfile(context, payload) {
    const profile = context.getters.getProfileData;
    const auth_sub = localStorage.getItem("auth_sub");
    const token = localStorage.getItem("id_token");
    context.commit("UPDATE_PROFILE_LOADING", true);
    axios
      .put(
        `${process.env.VUE_APP_API_URL}/api/profile/${profile.id}`,
        {
          ...payload,
          auth_sub
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        const { data } = res.data;
        context.commit("SET_PROFILE_INFO", data);
        context.commit("UPDATE_PROFILE_LOADING", false);
      })
      .catch(e => {
        const { message } = e.response.data;
        context.commit("SET_ERROR_MSJ", message);
        router.replace("/error");
      });
  },
  fetchProfile(context, payload) {
    const user = context.getters.getUserData;
    const profileId = payload ? payload : user.ProfileId;
    context.commit("UPDATE_PROFILE_LOADING", true);
    axios
      .get(`${process.env.VUE_APP_API_URL}/api/profile/${profileId}`)
      .then(res => {
        const { data } = res.data;
        context.commit("SET_PROFILE_INFO", data);
        context.commit("UPDATE_PROFILE_LOADING", false);
      })
      .catch(e => {
        const { message } = e.response.data;
        context.commit("SET_ERROR_MSJ", message);
        router.replace("/error");
      });
  },
  fetchAllProfiles(context, payload) {
    context.commit("UPDATE_PROFILE_LIST_LOADING", true);
    axios
      .get(
        `${process.env.VUE_APP_API_URL}/api/profile`,
        payload ? { params: payload } : {}
      )
      .then(res => {
        const { data } = res.data;
        context.commit("SET_ALL_PROFILES", data);
        context.commit("UPDATE_PROFILE_LIST_LOADING", false);
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
      // we need to format these two things to use them with the autocomplete input
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
  getAllProfiles: state => {
    // sort profile list by id so it is shown always in the same order
    return state.profileList.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
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
