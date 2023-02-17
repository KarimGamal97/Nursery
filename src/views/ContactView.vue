<template>
  <div>
    <nav-bar></nav-bar>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "ContactView",
  components: {
    NavBar,
    FooterComp,
  },
};
</script>

<style></style>
