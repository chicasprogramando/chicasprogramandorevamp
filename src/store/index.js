import Vue from 'vue';
import Vuex from 'vuex';
import profiles from './modules/profiles';
import events from './modules/events';
import projects from './modules/projects';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  modules: {
    profiles,
    events,
    projects
  },
  strict: debug
})