import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import InstructionsView from "../views/InstructionsView.vue";
import FaqView from "../views/FaqView.vue";
import LoginView from "@/views/LoginView";
import LoginAd from "@/views/LoginAd.vue";
import DashView from "@/views/admin/DashView";
import ProfileView from "@/views/ProfileView.vue";
import SignUpForm from "@/views/SignUpForm.vue";
import TableAdmin from "@/views/admin/TableAdmin.vue";
import FaqAdminView from "@/views/FaqAdminView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (!localStorage.token) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    beforeEnter: (to, from, next) => {
      if (!localStorage.token) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/instructions",
    name: "instructions",
    component: InstructionsView,
    beforeEnter: (to, from, next) => {
      if (!localStorage.token) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    beforeEnter: (to, from, next) => {
      if (!localStorage.token) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/faq",
    name: "faq",
    component: FaqView,
    beforeEnter: (to, from, next) => {
      if (!localStorage.token) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/login-admin",
    name: "loginAdmin",
    component: LoginAd,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    beforeEnter: (to, from, next) => {
      if (!localStorage.token) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: DashView,
    beforeEnter: (to, from, next) => {
      if (!localStorage.token) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/SignUpForm",
    name: "SignUpForm",
    component: SignUpForm,
  },
  {
    path: "/TableAdmin",
    name: "TableAdmin",
    component: TableAdmin,
  },
  {
    path: "/faq-admin",
    name: "FaqAdmin",
    component: FaqAdminView,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
