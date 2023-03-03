<template>
  <div>
    <nav-bar></nav-bar>
    <v-container>
      <img class="instructions-img" src="../assets/instructions.jpg" />
    </v-container>
    <v-container>
      <h2 class="contact-head">
        يرجي الالتزام بقوانين اللائحة للحفاظ علي طفلك :
      </h2>
      <b-table :items="items" :fields="fields"></b-table>
    </v-container>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import http from "@/axios";
import NavBar from "@/components/NavBar.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "InstructionsView",
  components: {
    NavBar,
    FooterComp,
  },
  data() {
    return {
      fields: [
        {
          key: "instruction",
          label: "تعليمات ",
          thStyle: {
            background: "#367db5",
            color: "#fff",
            border: "1px solid",
            textAlign: "center",
          },
        },
      ],
      items: [],
    };
  },
  methods: {
    async getData() {
      try {
        await http.get("user/inetructions").then((res) => {
          this.items = res.data.data;
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

<style scoped>
.instructions-img {
  max-width: 60%;
  min-height: 50%;
  margin: auto;
  display: block;
}

.contact-head {
  color: #2980b9;
  font-size: 33px;
  font-weight: bold;
  margin-bottom: 15px;
}
ul li {
  color: #333;
  font-size: 18px;
  font-weight: 500;
}
</style>
