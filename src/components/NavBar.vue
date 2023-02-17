<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>Child Nursery</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link class="nav-link navbar-link" to="/">Home</router-link>
      <router-link class="nav-link navbar-link" to="/about">About</router-link>
      <router-link class="nav-link navbar-link" to="/"
        >Instructions</router-link
      >
      <router-link class="nav-link navbar-link" to="/contact"
        >Contact Us</router-link
      >

      <v-btn class="mx-2" fab dark small color="indigo">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
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
