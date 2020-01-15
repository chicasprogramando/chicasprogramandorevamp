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
    // gets user using auth0 sub
    axios
      .get(`${process.env.VUE_APP_API_URL}/api/user/${sub}`)
      .then(res => {
        const { data } = res.data;
        context.commit("SET_USER_INFO", data);
        // accepted terms and profile completion flow
        context.dispatch("userAcceptanceFlow");
      })
      .catch(e => {
        const { status } = e.response;
        // eslint-disable-next-line
        console.log("getUser error", status);
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
        // eslint-disable-next-line
        console.log(e.response)
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");

        context.commit("SET_ERROR_MSJ", message);
        router.replace("/error");
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
