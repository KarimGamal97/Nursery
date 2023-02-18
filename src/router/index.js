import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
<<<<<<< HEAD
import InstructionsView from "../views/InstructionsView.vue";
import FaqView from "../views/FaqView.vue";

=======
import LoginView from '@/views/LoginView'
>>>>>>> 6997a016a8304bba64b66289d3a7e8bb05035019
Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/instructions",
    name: "instructions",
    component: InstructionsView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
<<<<<<< HEAD
    path: "/faq",
    name: "faq",
    component: FaqView,
=======
    path: "/login",
    name: "login",
    component: LoginView,
>>>>>>> 6997a016a8304bba64b66289d3a7e8bb05035019
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
