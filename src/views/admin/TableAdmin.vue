<template>
  <div>
    <navbar-admin></navbar-admin>
    <b-table :fields="fields" :items="items"></b-table>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import http from "@/axios";
import NavbarAdmin from "@/components/admin/NavbarAdmin.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "TableAdmin",
  components: {
    FooterComp,
    NavbarAdmin,
  },
  data() {
    return {
      fields: [
        {
          key: "body",
          label: "تعليمات ",
          thStyle: {
            background: "#367db5",
            color: "#fff",
            border: "1px solid",
          },
        },
      ],
      items: [],
    };
  },
  methods: {
    async getData() {
      try {
        await http.get("admin/inetructions").then((res) => {
          this.items.push(res.data.data);
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
