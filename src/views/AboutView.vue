<template>
  <div>
    <nav-bar></nav-bar>
    <div class="about-header">
      <v-container--fluid class="grey lighten-5">
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-img
              src="../assets/6-714x402.jpg"
              max-height="500"
              contain
            ></v-img>
          </v-col>
          <v-col cols="6" md="6">
            <h1 class="heading">We will take care of your kids</h1>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut lab dolore magna aliqua. Ut enim ad
              minim.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut lab dolore magna aliqua. Ut
              enim ad minim.
            </p>
            <v-btn class="learn-more" depressed color="primary">
              Learn More..
            </v-btn>
          </v-col>
        </v-row>
      </v-container--fluid>
    </div>
    <div class="our-team">
      <h1 class="head-team">Our Team</h1>
      <v-container>
        <v-row>
          <!-- Start Card -->
          <v-col style="padding-bottom: 1%" cols="12" lg="3" sm="6" md="3">
            <v-card max-width="350">
              <v-img
                src="../assets/stuff-1-370x370.jpg"
                style="background-size: contain"
                height="250px"
              ></v-img>
              <v-card-title> Jenifer Lopez </v-card-title>
              <v-card-subtitle> +5 years exp. in educating </v-card-subtitle>
              <v-card-actions>
                <v-btn color="orange lighten-2" text> More Info </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis eaque placeat odit nobis molestias ipsum possimus
                    aperiam consequatur obcaecati ullam molestiae maxime
                    nostrum, excepturi qui earum impedit doloribus beatae.
                    Laudantium.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <!-- End Card -->
          <!-- Start Card -->
          <v-col style="padding-bottom: 1%" cols="12" lg="3" sm="6" md="3">
            <v-card max-width="350">
              <v-img
                src="../assets/stuff-2-370x370.jpg"
                style="background-size: contain"
                height="250px"
              ></v-img>
              <v-card-title> UnderTaker </v-card-title>
              <v-card-subtitle> +20 years exp </v-card-subtitle>
              <v-card-actions>
                <v-btn color="orange lighten-2" text> More Info </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <!-- End Card -->
          <!-- Start Card -->
          <v-col style="padding-bottom: 1%" cols="12" lg="3" sm="6" md="3">
            <v-card max-width="350">
              <v-img
                src="../assets/stuff-4-370x370.jpg"
                style="background-size: contain"
                height="250px"
              ></v-img>
              <v-card-title> Jhon Cena</v-card-title>
              <v-card-subtitle> +12 years of exp. </v-card-subtitle>
              <v-card-actions>
                <v-btn color="orange lighten-2" text> More Info </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <!-- End Card -->
          <!-- Start Card -->
          <v-col style="padding-bottom: 1%" cols="12" lg="3" sm="6" md="3">
            <v-card max-width="350">
              <v-img
                src="../assets/stuff-3-370x370.jpg"
                style="background-size: contain"
                height="250px"
              ></v-img>
              <v-card-title> Nadia ElGendi </v-card-title>
              <v-card-subtitle> +25 of exp. </v-card-subtitle>
              <v-card-actions>
                <v-btn color="orange lighten-2" text> More Info </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
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
FooterComp

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
