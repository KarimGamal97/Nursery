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
    <v-container fluid class="grey lighten-5">
      <v-row>
        <v-col cols="12" lg="12" sm="12" md="12" class="m-auto">
          <img src="../assets/Dep.jpg" />
        </v-col>
        <v-col cols="12" lg="12" sm="12" md="12" class="m-auto">
          <div class="box">
            <h2>علم طفلك</h2>
            <p>
              "مرحباً "إنه لشرف عظيم لنا في أن نعرف كل طفل على حدة ونعمل على
              مساعدتهم للوصول إلى أقصى إمكاناتهم" الآباء الأولياء هم شركاؤنا،
              لذا يساعدنا التواصل المستمر معهم على تلبية الاحتياجات الاجتماعية
              والبدنية، والعاطفية لجميع الأطفال." ترحب حضانة علم طفلك بصدر رحب
              بالأولياء وتتطلع لأن تكونوا جزءًا مشاركا فيما يتعلق بنمو أطفالكم
              نموهم العقلي والعاطفي، والبدني والاجتماعي. ولهذا السبب فإننا نركز
              على العمل مع الأولياء لمعرفة المزيد عن شخصية أطفالهم. الحضانة
              مفتوحة من الأحد إلى الخميس من الساعة 6:00 صباحاً وحتى 3:00 مساءً،
              بالإضافة إلى ساعات إضافية من الساعة 3:00 مساءً وحتى 5:00 مساءً.
              يرجى الاطلاع على معلوماتنا التفصيلية بخصوص ما يلزم إحضاره إلى
              الحضانة لكي نجعل الاستقرار عند انتقال طفلكم أمراً سلسا بقدر
              الإمكان."
            </p>
            <button>المزيد ..</button>
          </div>
        </v-col>
        <v-col cols="12" lg="12" sm="12" md="12" class="m-auto">
          <video
            poster="../assets/t3.jpeg"
            class="p-5"
            src="../assets/Video.mp4"
            controls
          ></video>
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

<style lang="scss">
main,
.v-main {
  background-image: url("../assets/t1.jpeg");
  background-size: cover;
  width: 100%;
}
.our-team {
  background-image: url("../assets/t2.jpeg");
  background-size: cover;
  width: 100%;
}
video,
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
    font-size:30px;
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
td{
  padding: 0  !important;
}
</style>
