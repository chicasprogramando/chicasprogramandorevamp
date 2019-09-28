import Vue from "vue";
import Vuex from "vuex";
import auth0 from "auth0-js";
import router from "./router";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userIsAuthorized: false,
    auth0: new auth0.WebAuth({
      domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
      clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
      redirectUri: process.env.VUE_APP_DOMAINURL + "/callback",
      responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
      scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE
    }),
    user: {}
  },
  mutations: {
    setUserIsAuthenticated(state, replacement) {
      state.userIsAuthorized = replacement;
    }
  },
  actions: {
    auth0Login(context) {
      context.state.auth0.authorize();
    },
    auth0HandleAuthentication(context) {
      context.state.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
          );
          // save the tokens locally
          localStorage.setItem("access_token", authResult.accessToken);
          localStorage.setItem("id_token", authResult.idToken);
          localStorage.setItem("expires_at", expiresAt);

          router.replace("/profile");
          context.state.auth0.client.userInfo(authResult.accessToken, function(
            err,
            user
          ) {
            context.dispatch("getUser", user);
          });
        } else if (err) {
          alert("login failed. Error #KJN838");
          router.replace("/login");
        }
      });
    },
    // eslint-disable-next-line
    auth0Logout(context) {
      // Clear Access Token and ID Token from local storage
      localStorage.removeItem("access_token");
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");

      window.location.reload();
    },
    getUser(context, payload) {
      const { name, nickname, email, sub, given_name } = payload;
      // eslint-disable-next-line
      console.log("getUSer", payload);
      axios
        .get(
          `https://plataforma-chicas-prog-staging.herokuapp.com/api/user/${sub}`
        )
        .then(res => {
          // eslint-disable-next-line
          console.log(res);
        })
        .catch(e => {
          const { status } = e.response;
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
        .post(
          `https://plataforma-chicas-prog-staging.herokuapp.com/api/user/`,
          payload
        )
        .then(res => {
          // eslint-disable-next-line
          console.log(res);
        })
        .catch(e => {
          // eslint-disable-next-line
          console.log(e);
        });
    }
  }
});
