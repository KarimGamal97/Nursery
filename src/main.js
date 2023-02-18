import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import './axios'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import VueMeta from "vue-meta";
Vue.use(VueMeta, {
  keyName: "head",
});
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {};
Vue.use(Toast, options);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
