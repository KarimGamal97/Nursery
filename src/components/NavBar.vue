<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
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
      <router-link class="nav-link navbar-link" to="/about"
        >معلومات عنا</router-link
      >
      <router-link class="nav-link navbar-link" to="/instructions"
        >تعليمات</router-link
      >
      <router-link class="nav-link navbar-link" to="/faq"
        >شكاوي و مقترحات</router-link
      >
      <router-link class="nav-link navbar-link" to="/contact"
        >تواصل معنا</router-link
      >
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              fab
              small
              color="indigo"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      items: [{ title: "تسجيل الخروج" }],
    };
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
