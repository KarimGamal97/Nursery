<template>
  <v-footer color="primary lighten-1" fixed>
    <v-row justify="center">
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        <strong>علم طفلك</strong> — {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {};
  },
};
</script>

<style></style>
