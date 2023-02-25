import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: localStorage.getItem("info"),
  },
  getters: {
    userInfo(state) {
      let user = JSON.parse(state.userData);
      return user;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
