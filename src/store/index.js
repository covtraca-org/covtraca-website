import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isReporting: false,
    showToast: false,
    showMap: false,
    curveMax: null,
    message: "",
    lang: "",
    langs: []
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
    },
    setLang(state, payload) {
      state.lang = payload;
    },
    setLangs(state, payload) {
      state.langs = payload;
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
      commit("setToast", !state.showToast);
    },
    changeMessage({ commit }, { message }) {
      commit("setMessage", message);
    },
    changeCurve({ commit }, { curve }) {
      commit("setCurve", curve);
    },
    changeLang({ commit }, { locale }) {
      commit("setLang", locale);
    },
    addLang({ commit }, { langs }) {
      commit("setLangs", langs);
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
    },
    getLang: state => {
      return state.lang;
    },
    getLangs: state => {
      return state.langs;
    }
  }
});
