import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isReporting: false,
    showToast: false,
    showMap: false,
    curveMax: null,
    message: ""
  },
  mutations: {
    setReport(state, payload) {
      state.isReporting = payload;
    },
    setToast(state, payload) {
      state.showToast = payload;
    },
    setMap(state, payload) {
      state.showMap = payload;
    },
    setMessage(state, payload) {
      state.message = payload;
    },
    setCurve(state, payload) {
      state.curveMax = payload;
    }
  },
  actions: {
    handleReport({ commit, state }) {
      commit("setReport", !state.isReporting);
    },
    handleMap({ commit, state }) {
      commit("setMap", !state.showMap);
    },
    handleToast({ commit, state }) {
      commit("setToast", !state.showMap);
    },
    changeMessage({ commit }, { message }) {
      commit("setMessage", message);
    },
    changeCurve({ commit }, { curve }) {
      commit("setCurve", curve);
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
    showMap: state => {
      return state.showMap;
    },
    getMessage: state => {
      return state.message;
    },
    getCurve: state => {
      return state.curveMax;
    }
  }
});
