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
  checkUserOnSignIn(context, payload) {
    const { name, nickname, email, sub, given_name } = payload;
    // checks if the user exists with the email returned by auth0
    axios
      .post(`${process.env.VUE_APP_API_URL}/api/user/signin`, { email: email })
      .then(res => {
        const { data } = res.data;
        localStorage.setItem("user_id", data.id);
        context.commit("SET_USER_INFO", data);
        // accepted terms and profile completion flow
        context.dispatch("userAcceptanceFlow");
        if (data.profile) {
          context.dispatch("getProfile");
        }
      })
      .catch(e => {
        const { status } = e.response;
        // when de user doesn't exist it creates a new one using auth0 info
        if (status === 404) {
          const body = {
            user_name: nickname || name || given_name,
            auth_sub: sub,
            email: email
          };
          context.dispatch("createUser", body);
        } else {
          // clear localStorage from all the things we saved previously
          localStorage.clear();

          context.commit("SET_ERROR_MSJ", e.response.data.message);
          router.replace("/error");
        }
      });
  },
  getUser(context, payload) {
    const { id } = payload;
    axios
      .get(`${process.env.VUE_APP_API_URL}/api/user/${id}`)
      .then(res => {
        const { data } = res.data;
        context.commit("SET_USER_INFO", data);
        if (!data.accepted_terms) {
          // accepted terms and profile completion flow
          context.dispatch("userAcceptanceFlow");
        }
        if (data.profile) {
          // if profile exists get it
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
    axios
      .post(`${process.env.VUE_APP_API_URL}/api/user/`, payload)
      .then(res => {
        const { data } = res.data;
        localStorage.setItem("user_id", data.id);
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
    const auth_sub = localStorage.getItem("auth_sub");
    const token = localStorage.getItem("id_token");
    axios
      .put(
        `${process.env.VUE_APP_API_URL}/api/user/${user.id}`,
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
    } else if (!user.profile) {
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
