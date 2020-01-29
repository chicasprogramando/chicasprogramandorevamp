import axios from "axios";
import router from "../../router";

const state = {
  user: {}
};

const mutations = {
  SET_USER_INFO(state, payload) {
    state.user = { ...state.user, ...payload };
  }
};
const actions = {
  getUser(context, payload) {
    const { name, nickname, email, sub, given_name } = payload;
    // gets user using auth0 sub
    axios
      .get(`${process.env.VUE_APP_API_URL}/api/user/${sub}`)
      .then(res => {
        const { data } = res.data;
        context.commit("SET_USER_INFO", data);
        if (data.profile) {
          context.dispatch("getProfile");
        }
      })
      .catch(e => {
        const { status } = e.response;
        // as user doesn't exist we need to create one
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
        context.commit("SET_USER_INFO", data);
        // accepted terms and profile completion flow
        context.dispatch("userAcceptanceFlow");
      })
      .catch(e => {
        const { message } = e.response.data;
        // clear localStorage from all the things we saved previously
        localStorage.clear();

        context.commit("SET_ERROR_MSJ", message);
        router.replace("/error");
      });
  },
  acceptedTerms(context, payload) {
    const user = context.getters.getUserData;
    axios
      .put(`${process.env.VUE_APP_API_URL}/api/user/${user.id}`, payload)
      .then(res => {
        const { data } = res.data;
        context.commit("SET_USER_INFO", data);
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
  },
  userAcceptanceFlow(context) {
    const user = context.getters.getUserData;
    if (!user.accepted_terms) {
      router.replace("/terms");
    } else if (!user.completed_profile) {
      router.replace("/profile");
    } else {
      router.replace("/");
    }
  },
  updateUserName(context, payload) {
    const user = context.getters.getUserData;
    axios
      .put(`${process.env.VUE_APP_API_URL}/api/user/${user.id}`, payload)
      .then(res => {
        const { data } = res.data;
        context.commit("SET_USER_INFO", data);
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
