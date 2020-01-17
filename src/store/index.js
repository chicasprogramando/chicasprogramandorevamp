import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import user from "./user";
import profile from "./profile";
import errors from "./errors";
import shared from "./shared";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user,
    profile,
    errors,
    shared
  }
});
