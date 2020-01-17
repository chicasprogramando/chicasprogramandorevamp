<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex xs12 md6>
        <v-card color="deep-purple lighten-2" class="white--text">
          <v-img :src="require('@/assets/compu.jpeg')"></v-img>
          <v-layout>
            <v-flex xs12>
              <v-card-title primary-title align>
                <div class="header-container">
                  <h2 class="headline">Hardcoded name</h2>
                  <h3 class="sub-headline">Hardcoded title</h3>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <v-card-text>
                <p class="about__text">
                  <span>Busco Proyecto:</span>
                  Si
                </p>
                <p class="about__text">
                  <span>Experiencia:</span>
                  Sr
                </p>
                <p class="about__text">
                  <span>Tecnologías:</span>
                  HTML
                </p>
                <p class="about__text">
                  <span>Algo sobre mi:</span>
                  Hello world
                </p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <ProfileForm />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProfileForm from "./ProfileForm";
import router from "../../router";

export default {
  name: "Profile",
  components: {
    ProfileForm
  },
  data() {
    return {};
  },
  mounted() {
    const acceptedTerms = this.$store.state.user.user.accepted_terms;
    if (!acceptedTerms) {
      router.replace("/terms");
    }
  }
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
.about__text span {
  font-weight: 500;
}
</style>
