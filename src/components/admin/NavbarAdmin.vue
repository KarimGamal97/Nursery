<template>
  <div>
    <v-app-bar color="accent-4" style="background-color: #0d6efd" dense dark>
      <v-toolbar-title>
        <router-link
          style="
            color: #fff;
            text-decoration: none;
            font-size: 28px;
            font-weight: bold;
          "
          to="/"
          >علم طفلك</router-link
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <router-link class="nav-link navbar-link" to="/"
        >الصفحة الرئيسية</router-link
      >
      <router-link class="nav-link navbar-link" to="/instructions"
        >تعليمات</router-link
      >
      <router-link class="nav-link navbar-link" to="/faq"
        >شكاوي و مقترحات</router-link
      >
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              fab
              small
              style="background-color: #0d6efd"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :to="item.path"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import http from "axios";
export default {
  name: "NavBar",
  data() {
    return {
      items: [
        { title: "بروفايل", path: "/profile" },
        { title: "أدمن", path: "/TableAdmin" },
        { title: "تسجيل الخروج", path: "/login" },
      ],
    };
  },
  methods: {
    async logOut() {
      await http.post("user/logout").then(() => {
        localStorage.removeItem("token");
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped>
.navbar-link {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-right: 15px;
  transition: all 0.3s ease-in-out;
}
.navbar-link:hover {
  border-bottom: 2px solid #fff;
}
</style>
