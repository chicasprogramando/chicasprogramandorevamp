import auth0 from "auth0-js";

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

const mutations = {};
const actions = {};
const getters = {};

const auth = {
  state,
  mutations,
  actions,
  getters
};

export default auth;
