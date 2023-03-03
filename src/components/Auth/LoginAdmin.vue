<template>
  <div style="margin: 200px auto">
    <h2 class="text-center">تسجيل الدخول</h2>
    <v-form @submit.prevent="submitLogin" v-model="valid">
      <v-container>
        <v-row>
          <div>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="Form.email"
                :rules="emailRules"
                placeholder="الايميل"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="Form.password"
                :rules="passRules"
                placeholder="كلمة المرور"
                required
                outlined
              ></v-text-field>
              <p>{{ userError }}</p>
            </v-col>
            <v-col>
              <button>تسجيل الدخول</button>
            </v-col>
          </div>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import http from "@/axios";
export default {
  data: () => ({
    valid: false,
    Form: {
      email: "",
      password: "",
    },
    userError: null,
    passRules: [
      (v) => !!v || "Password is required",
      (v) => v.length <= 10 || "Password must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    async submitLogin() {
      try {
        await http.post("admin/login", this.Form).then((response) => {
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("info", JSON.stringify(response.data.data));
          localStorage.setItem("loggedIn", "true");
          this.$router.push("/admin");
        });
      } catch (e) {
        if (e.data.errors) {
          this.userError = "برجاء التاكد من صحة بياناتك";
        } else {
          console.log(e.data);
        }
      }
    },
  },
};
</script>
<style scoped>
* {
  direction: rtl;
}
button {
  background: #6200ea;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  display: block;
  margin: auto;
}
</style>
