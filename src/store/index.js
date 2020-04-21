import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isReporting: false
  },
  mutations: {
    setReport(state, payload) {
      state.isReporting = payload;
    }
  },
  actions: {
    setIsAuthenticated({ commit, state }) {
      commit("setReport", !state.isReporting);
    }
  },
  modules: {},
  getters: {
    isReporting: state => {
      return state.isReporting;
    }
  }
});
