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

      <router-link class="nav-link navbar-link" to="/admin"
        >الصفحة الرئيسية</router-link
      >
      <router-link class="nav-link navbar-link" to="/TableAdmin"
        >تعليمات</router-link
      >
      <router-link class="nav-link navbar-link" to="/faq-admin"
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
          <v-list  style="width: 150px; padding: 10px;">
            <button @click="logout" style="padding: 10px;">
               تسجيل الخروج
              </button>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import http from "@/axios";
export default {
  name: "NavBar",
  
  methods: {
    async logout() {
      await http.post("admin/logout").then(() => {
        localStorage.clear();
        this.$router.push("/login-admin");
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
