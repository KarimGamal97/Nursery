<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "Child Nursery",
  },
  data: () => ({}),
};
</script>

<style>
* {
  direction: rtl;
}
</style>
