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
    const { id } = payload;
    axios
      .get(`${process.env.VUE_APP_API_URL}/api/user/${id}`)
      .then(res => {
        const { data } = res.data;
        context.commit("SET_USER_INFO", data);
        // accepted terms and profile completion flow
        context.dispatch("userAcceptanceFlow");
        if (data.profile) {
          context.dispatch("getProfile");
        }
      })
      .catch(e => {
        const { message } = e.response.data;
        // clear localStorage from all the things we saved previously
        localStorage.clear();

        context.commit("SET_ERROR_MSJ", message);
        router.replace("/error");
      });
  },
  createUser(context, payload) {
    const { name, nickname, email, sub, given_name } = payload;
    const body = {
      user_name: nickname || name || given_name,
      auth_sub: sub,
      email: email
    };
    axios
      .post(`${process.env.VUE_APP_API_URL}/api/user/`, body)
      .then(res => {
        const { data } = res.data;
        localStorage.setItem("user_id", data.id);
        context.commit("SET_USER_INFO", data);
        // accepted terms and profile completion flow
        context.dispatch("userAcceptanceFlow");
      })
      .catch(e => {
        const { message } = e.response.data;
        // TODO: this is just a work around
        const user_id = message
          .split(":")
          .pop()
          .split(";")[0];
        if (user_id) {
          localStorage.setItem("user_id", user_id);
          context.dispatch("getUser", { id: user_id });
        } else {
          // clear localStorage from all the things we saved previously
          localStorage.clear();
          context.commit("SET_ERROR_MSJ", message);
          router.replace("/error");
        }
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
