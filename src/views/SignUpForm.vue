<template>
  <div>
    <signin-user></signin-user>
  </div>
</template>

<script>
import SigninUser from "@/components/Auth/SiginUser.vue";
export default {
  name: "SignUpForm",
  data() {
    return {};
  },
  components: {
    SigninUser,
  },
};
</script>

<style></style>
