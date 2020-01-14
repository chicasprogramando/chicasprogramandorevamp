import axios from "axios";
import router from "../../router";

const state = {
  user: {}
};

const mutations = {
  SET_USER_INFO(state, payload) {
    state.user = payload;
  }
};
const actions = {
  getUser(context, payload) {
    const { name, nickname, email, sub, given_name } = payload;
    // eslint-disable-next-line
    console.log("getUser payload", payload);
    axios
      .get(`${process.env.VUE_APP_API_URL}/api/user/${sub}`)
      .then(res => {
        const { data } = res.data;
        context.commit("SET_USER_INFO", data);
        if (!data.accepted_terms) {
          router.replace("/terms");
        } else if (!data.completed_profile) {
          router.replace("/profile");
        } else {
          router.replace("/");
        }
      })
      .catch(e => {
        const { status } = e.response;
        // eslint-disable-next-line
        console.log("getUser error", status);
        if (status === 404) {
          context.dispatch("createUser", {
            user_name: nickname || name || given_name,
            auth_sub: sub,
            email: email
          });
        } else {
          // eslint-disable-next-line
          console.log(e);
        }
      });
  },
  createUser(context, payload) {
    axios
      .post(`${process.env.VUE_APP_API_URL}/api/user/`, payload)
      .then(res => {
        const { data } = res.data;
        // eslint-disable-next-line
        console.log("createUser data", data);
        context.commit("SET_USER_INFO", data);
        if (!data.accepted_terms) {
          router.replace("/terms");
        } else if (!data.completed_profile) {
          router.replace("/profile");
        } else {
          router.replace("/");
        }
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log(e);
      });
  },
  acceptedTerms(context, payload) {
    const user = context.getters.getUserData;
    axios
      .put(`${process.env.VUE_APP_API_URL}/api/user/${user.id}`, payload)
      .then(res => {
        // eslint-disable-next-line
        console.log("acceptedTerms", res);
        if (!user.completed_profile) {
          router.replace("/profile");
        } else {
          router.replace("/");
        }
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log(e);
      });
  }
};
const getters = {
  getUserData: state => {
    return state.user;
  }
};

const user = {
  state,
  mutations,
  actions,
  getters
};

export default user;
