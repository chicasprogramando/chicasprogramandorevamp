import auth0 from "auth0-js";
import router from "../../router";

const state = {
  userIsAuthorized: false,
  auth0: new auth0.WebAuth({
    domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
    clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
    redirectUri: process.env.VUE_APP_DOMAINURL + "/callback",
    responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
    scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE
  })
};

const mutations = {
  SET_USER_IS_AUTH(state, payload) {
    state.userIsAuthorized = payload;
  }
};
const actions = {
  auth0Login({ state }) {
    state.auth0.authorize();
  },
  auth0HandleAuthentication({ dispatch, state, commit }) {
    state.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let expiresAt = JSON.stringify(
          authResult.expiresIn * 1000 + new Date().getTime()
        );
        // save the tokens locally
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);

        state.auth0.client.userInfo(authResult.accessToken, function(
          err,
          user
        ) {
          dispatch("createUser", user);
          commit("SET_USER_IS_AUTH", true);
        });
      } else if (err) {
        // eslint-disable-next-line
        console.log("login failed. Error #KJN838");
        router.replace("/login");
      }
    });
  },
  auth0Logout() {
    // clear localStorage from all the things we saved previously
    localStorage.clear();

    // reload page
    window.location.reload();
  }
};
const getters = {};

const auth = {
  state,
  mutations,
  actions,
  getters
};

export default auth;
