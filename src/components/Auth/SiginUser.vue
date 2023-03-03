<template>
  <form class="sign-up" @submit.prevent="signUp">
    <v-card class="p-2">
    <h3
      class="text-center"
      style="color: blue; font-size: 30px; margin-bottom: 20px"
    >
      قم بالتسجيل .. لعمل حساب جديد
    </h3>
    <div class="row g-3">
      <div class="col-4">
        <label class="form-label">الاسم </label>
        <input
          type="text"
          class="form-control"
          aria-label="First name"
          v-model="SignUpData.name"
          required
        />
      </div>
      <div class="col-4">
        <label class="form-label">البريد الالكتروني </label>
        <input
          type="email"
          class="form-control"
          aria-label="Email"
          required
          v-model="SignUpData.email"
        />
      </div>
      <div class="col-4">
        <label for="phone" class="form-label">رقم الهاتف</label>
        <input
          type="number"
          class="form-control"
          id="phone"
          required
          v-model="SignUpData.phone"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">كلمة المرور</label>
        <input
          type="password"
          required
          class="form-control"
          id="inputPassword4"
          v-model="SignUpData.password"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">تأكيد كلمة المرور</label>
        <input
          type="password"
          required
          class="form-control"
          id="inputPassword4"
          v-model="SignUpData.password_confirmation"
        />
      </div>
      <div class="sign-up-btn">
        <button type="submit" class="btn btn-warning">انشاء حساب</button>
      </div>
    </div>
  </v-card>
  </form>
</template>

<script>
import http from "@/axios";
export default {
  data() {
    return {
      SignUpData: {
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
      },
      error: "",
    };
  },
  methods: {
    async signUp() {
      try {
        await http.post("user/register", this.SignUpData).then(() => {
          this.$router.push("/");
        });
      } catch (e) {
        console.log(e.response.data.errors);
        this.error = e.response.data.errors;
      }
    },
  },
};
</script>

<style scoped>
.sign-up {
  border: 1px solid #eee;
  padding: 3%;
  border-radius: 6px;
  margin: 70px auto;
}
.sign-up-btn {
  padding: 5%;
  text-align: center;
}
</style>
