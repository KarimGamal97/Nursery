<template>
  <div>
    <login-admin></login-admin>
  </div>
</template>

<script>
import LoginAdmin from "@/components/Auth/LoginAdmin.vue";

export default {
  data() {
    return {};
  },
  metaInfo: {
    titleTemplate: "%s | تسجيل الدخول للادمن",
  },
  components: {
    LoginAdmin,
  },
};
</script>
