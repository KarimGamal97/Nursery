<template>
  <div>
    <nav-bar></nav-bar>
    <v-container>
      <img class="contact-img" src="../assets/contact_2.jpg" />
    </v-container>
    <v-container>
      <h1 class="contact-head">تواصل معنا</h1>
      <p style="text-align: center; font-size: 16px; font-weight: bold">
        نحن دائما في خدمتك أنت و طفلك
      </p>
      <v-form class="form" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="15"
          :rules="nameRules"
          label="الاسم"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="البريد الالكتروني"
          required
        ></v-text-field>
        <v-text-field
          v-model="address"
          :rules="addressRules"
          label="العنوان"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :rules="phonesRules"
          label="رقم الهاتف"
          required
        ></v-text-field>
        <v-textarea
          name="input-7-1"
          filled
          label=""
          auto-grow
          value="اكتب رسالتك الخاصة هنا"
        ></v-textarea>
        <div style="text-align: right">
          <v-btn class="ma-2" color="success"> ارسال </v-btn>
        </div>
      </v-form>
    </v-container>
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
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
    };
  },
};
</script>

<style scoped>
.contact-head {
  color: #2980b9;
  text-align: center;
  font-size: 33px;
  font-weight: bold;
  margin-bottom: 15px;
}
.form {
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 5%;
}
.contact-img {
  max-width: 60%;
  display: block;
  margin: auto;
  min-height: 50%;
}
</style>
