<template>
  <div>
    <nav-bar></nav-bar>
    <div class="about-header">
      <v-container class="grey lighten-5">
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-img
              src="../assets/6-714x402.jpg"
              max-height="500"
              contain
            ></v-img>
          </v-col>
          <v-col cols="6" md="6">
            <h1 class="heading">سوف نعتني بأطفالك وننميهم في بيئة جيدة</h1>
            <p class="desc">
              في حضانة علم طفلك نسعى لتنمية الأطفال لكي يكتسبوا حب التعلم مدى الحياة. حيث نساعد أطفالنا على تنمية العقول المبدعة والشغوفة وتزويدهم بالمهارات والمعارف التي ستعدهم لحياة ناجحة وصحية ومستقبل مشرق
            </p>
            <v-btn class="learn-more" depressed color="primary">
              المزيد ..
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-continer>
      <v-row>
        <v-col lg="4" md="6" sm="12" class="m-auto">
          <img src="../assets/98d5b2f3-ad68-4d8b-82cf-7c83a55fe1d9.jpg" class="img-fluid">
        </v-col>
        <v-col lg="4" md="6" sm="12" class="m-auto">
          <img src="../assets/af93a7c5-4140-45d3-9657-a1b0b1a99a1e.jpg" class="img-fluid">
        </v-col>
        <v-col lg="4" md="6" sm="12" class="m-auto">
          <img src="../assets/f06c0c57-62ac-46fd-bb71-18d07bb79de1.jpg" class="img-fluid">
        </v-col>
        <v-col lg="4" md="6" sm="12" class="m-auto">
          <img src="../assets/df443ea4-3eb4-4756-ad4e-fe410b7f7ece.jpg" class="img-fluid">
        </v-col>
        <v-col lg="4" md="6" sm="12" class="m-auto">
          <img src="../assets/cd9a46bc-9ca0-4401-a493-2fdbcadb8aad.jpg" class="img-fluid">
        </v-col>
        <v-col lg="4" md="6" sm="12" class="m-auto">
          <img src="../assets/9cfd47cc-7c93-40e7-bf8d-a812e610b9ad.jpg" class="img-fluid">
        </v-col>
        <v-col lg="4" md="6" sm="12" class="m-auto">
          <img src="../assets/28986d2a-d79f-460d-9763-9db7d20c48a7.jpg" class="img-fluid">
        </v-col>
        <v-col lg="4" md="6" sm="12" class="m-auto">
          <img src="../assets/cf825aa5-49a3-44c4-889d-1ed8da46ac7d.jpg" class="img-fluid">
        </v-col>
        
      </v-row>
    </v-continer>
    <div class="our-team">
      <h1 class="head-team">فريقنا</h1>
      <v-container>
        <v-row>
          <!-- Start Card -->
          <v-col style="padding-bottom: 1%" cols="12" lg="3" sm="6" md="3">
            <v-card max-width="350" dark>
              <v-img
                src="../assets/stuff-1-370x370.jpg"
                style="background-size: contain"
                height="250px"
              ></v-img>
              <v-card-title style="font-weight: bold">سهي محمد</v-card-title>
              <v-card-subtitle>
                +5 سنوات من الخبرة في التدريس و معاملة الطفل
              </v-card-subtitle>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange lighten-2" depressed text>
                  المزيد..
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- End Card -->
          <!-- Start Card -->
          <v-col style="padding-bottom: 1%" cols="12" lg="3" sm="6" md="3">
            <v-card max-width="350" dark>
              <v-img
                src="../assets/stuff-2-370x370.jpg"
                style="background-size: contain"
                height="250px"
              ></v-img>
              <v-card-title style="font-weight: bold"> أحمد جمال </v-card-title>
              <v-card-subtitle
                >+2 سنوات من الخبرة في السيكولوجي</v-card-subtitle
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange lighten-2" depressed text>
                  المزيد..
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- End Card -->
          <!-- Start Card -->
          <v-col style="padding-bottom: 1%" cols="12" lg="3" sm="6" md="3">
            <v-card max-width="350" dark>
              <v-img
                src="../assets/stuff-4-370x370.jpg"
                style="background-size: contain"
                height="250px"
              ></v-img>
              <v-card-title style="font-weight: bold"
                >عبدالله شريف</v-card-title
              >
              <v-card-subtitle
                >+4 سنوات من الخبرة في تنمية مهارات الطفل
              </v-card-subtitle>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange lighten-2" depressed text>
                  المزيد..
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- End Card -->
          <!-- Start Card -->
          <v-col style="padding-bottom: 1%" cols="12" lg="3" sm="6" md="3">
            <v-card max-width="350" dark>
              <v-img
                src="../assets/stuff-3-370x370.jpg"
                style="background-size: contain"
                height="250px"
              ></v-img>
              <v-card-title style="font-weight: bold">اسراء حسن</v-card-title>
              <v-card-subtitle
                >+3 سنوات من الخبرة في تدريب الطفل
              </v-card-subtitle>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange lighten-2" depressed text>
                  المزيد..
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- End Card -->
        </v-row>
      </v-container>
    </div>

    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "AboutView",
  data() {
    return {};
  },
  components: {
    NavBar,
    FooterComp,
  },
};
</script>

<style scoped>
.about-header {
  padding: 3% 0 8% 0;
}
.heading {
  font-size: 45px;
}
.desc {
  font-weight: 400;
  color: #555;
  margin-top: 5%;
  line-height: 2;
}
.learn-more {
  margin-top: 5%;
}

.our-team {
  background-color: #eee;
  padding: 3% 0 5% 0;
}
.head-team {
  color: dimgrey;
  text-align: center;
  background-color: #fff;
}
</style>
