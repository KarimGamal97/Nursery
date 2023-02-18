<template>
  <div>
    <nav-bar></nav-bar>
    <v-container>
      <img class="contact-img" src="../assets/9435123826_a4c3b35c08_o.jpg" />
    </v-container>
    <v-container>
      <h1 class="contact-head">برجاء كتابة شكوي أو اقتراح</h1>
      <v-textarea
        name="input-7-1"
        filled
        label=""
        auto-grow
        value="قم بالتعبير عن شكواك و مقترحك هنا "
      ></v-textarea>
      <div style="text-align: right">
        <v-btn class="ma-2" color="success"> ارسال </v-btn>
      </div>
    </v-container>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "FaqView",
  components: {
    NavBar,
    FooterComp,
  },
};
</script>

<style>
.contact-head {
  color: #2980b9;
  text-align: center;
  font-size: 33px;
  font-weight: bold;
  margin-bottom: 15px;
}
.contact-img {
  max-width: 100%;
  min-height: 50%;
}
</style>
