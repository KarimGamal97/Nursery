<template>
  <div class="home">
    <nav-bar></nav-bar>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="12" lg="6" sm="12" md="6">
          <video controls src="../assets/MVI_5540.mp4"></video>
        </v-col>
        <v-col cols="12" lg="6" sm="12" md="6">
          <div class="box">
            <h2>Child Nurrsery</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              commodi, quia veniam quae dolores laboriosam repellendus omnis
              ipsum quisquam. Harum commodi facilis sit dolorum sed. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Nemo commodi,
              quia veniam quae dolores laboriosam repellendus omnis ipsum
              quisquam. Harum commodi facilis sit dolorum sed.
            </p>
            <button>Read More ...</button>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  components: { NavBar, FooterComp },
  metaInfo: {
    titleTemplate: "%s | Home",
  },
  data() {
    return {
      items: [
        {
          src: "https://media.istockphoto.com/id/998670532/photo/childs-are-playing-with-play-clay-in-classroom.jpg?s=612x612&w=0&k=20&c=2I7FiImWG-qaoPCd9ksEcY2FyHZKXyEAk7UR_VR2AYo=",
        },
        {
          src: "https://t3.ftcdn.net/jpg/03/20/81/98/360_F_320819860_ScgqmR8DaFQLGCcg4Gq638ZorwgEpcX8.jpg",
        },
        {
          src: "https://tootris.com/edu/wp-content/uploads/2020/04/difference-between-kinder-1200x675.png",
        },
        {
          src: "https://learningexperience.ca/wp-content/uploads/2021/09/calgary-kindergarten-1.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
video {
  max-width: 100%;
}
.box {
  h2 {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #0d6efd;
  }
  p {
    line-height: 2;
    text-align: center;
    color: #333;
  }
  button {
    background: #0d6efd;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    display: block;
    margin: auto;
  }
}
</style>
