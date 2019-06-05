<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex xs12 md6>
        <v-card color="deep-purple lighten-2" class="white--text">
          <v-card-media height="350px">
            <img :src="require('@/assets/compu.jpeg')">
          </v-card-media>
          <v-layout>
            <v-flex xs12>
              <v-card-title primary-title align>
                <div class="header-container">
                  <h2 class="headline">{{ name }}</h2>
                  <h3 class="sub-headline">{{title}}</h3>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <v-card-text>
                <p class="about__text">
                  <span>Rol en la comunidad:</span>
                  {{ role_name }}
                </p>
                <p class="about__text">
                  <span>Busco Proyecto:</span>
                  {{ search_project }}
                </p>
                <p class="about__text">
                  <span>Experiencia:</span>
                  {{ senority }}
                </p>
                <p class="about__text">
                  <span>Tecnologías:</span>
                  {{ skills }}
                </p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <ProfileForm/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProfileForm from "./ProfileForm";

import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Profile",
  components: {
    ProfileForm
  },
  data() {
    return {
      loading: false,
      name: "Puri",
      title: "Front end dev",
      role_name: "Co-founder",
      search_project: true,
      senority: "Ssr",
      skills: ["vue", "react", "jest", "js", "html"]
    };
  },
  computed: {},
  methods: {},
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
.profile_img {
  width: 100%;
}
.sub-headline {
  font-size: 20px;
}
</style>