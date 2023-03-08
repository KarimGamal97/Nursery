<template>
  <div>
    <nav-bar></nav-bar>
    <v-container>
      <img class="contact-img" src="../assets/9435123826_a4c3b35c08_o.jpg" />
    </v-container>
    <v-container style="height: 60vh; width: 50%;">
      <h1 class="contact-head">برجاء كتابة شكوي أو اقتراح</h1>
      <v-card>

      <v-textarea
        name="input-7-1"
        filled
        label=""
        auto-grow
        placeholder="قم بالتعبير عن شكواك و مقترحك هنا "
        v-model="body"
      ></v-textarea>
      <div style="text-align: right">
        <v-btn
          class="ma-2"
          color="primary"
          @click="faqSend"
          :disabled="body.length < 5"
        >
          ارسال
        </v-btn>
      </div>
    </v-card>
    </v-container>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import http from "@/axios";
import NavBar from "@/components/NavBar.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "FaqView",
  data() {
    return {
      body: "",
    };
  },
  components: {
    NavBar,
    FooterComp,
  },
  methods: {
    async faqSend() {
      try {
        await http
          .post("user/suggestion", this.body, { params: { body: "hi" } })
          .then(() => {
            console.log("ok");
          });
      } catch (e) {
        console.log("error");
      }
    },
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
  max-width: 60%;
  min-height: 50%;
  margin: auto;
  display: block;
}
</style>
