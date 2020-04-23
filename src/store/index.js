import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isReporting: false,
    showToast: false,
    message: ""
  },
  mutations: {
    setReport(state, payload) {
      state.isReporting = payload;
    },
    setToast(state, payload) {
      state.showToast = payload;
    },
    setMessage(state, payload) {
      state.message = payload;
    }
  },
  actions: {
    setIsAuthenticated({ commit, state }) {
      commit("setReport", !state.isReporting);
    },
    handleToast({ commit, state }) {
      commit("setToast", !state.showToast);
    },
    changeMessage({ commit }, { message }) {
      commit("setMessage", message);
    }
  },
  modules: {},
  getters: {
    isReporting: state => {
      return state.isReporting;
    },
    showToast: state => {
      return state.showToast;
    },
    getMessage: state => {
      return state.message;
    }
  }
});
