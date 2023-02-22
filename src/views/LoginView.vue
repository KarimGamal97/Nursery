<template>
  <div>
    <login-user></login-user>
  </div>
</template>

<script>
import LoginUser from "@/components/Auth/LoginUser";

export default {
  data() {
    return {};
  },
  metaInfo: {
    titleTemplate: "%s | تسجيل الدخول للمستخدم",
  },
  components: {
    LoginUser,
  },
};
</script>
