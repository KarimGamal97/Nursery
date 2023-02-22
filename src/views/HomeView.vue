<template>
  <div class="home">
    <nav-bar></nav-bar>
    <v-carousel style="height: 40vh" hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="12" lg="6" sm="12" md="6">
          <img src="../assets/Depositphotos_12359307_original.jpg" />
        </v-col>
        <v-col cols="12" lg="6" sm="12" md="6">
          <div class="box">
            <h2>علم طفلك</h2>
            <p>
              "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت
              دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا .
              يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو
              لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي
              أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم
              دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات
              كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا
              ديسيريونتموليت انيم أيدي ايست لابوريوم."
            </p>
            <button>المزيد ..</button>
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
img {
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
