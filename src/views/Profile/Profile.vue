<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex xs12 md6>
        <v-card color="deep-purple lighten-2" class="white--text">
          <v-img
            :src="require('@/assets/compu.jpeg')"
            v-if="!profile.image_path"
          ></v-img>
          <v-img :src="profile.image_path" v-if="profile.image_path"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <ProfileForm :user="user" :profile="profile" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProfileForm from "./ProfileForm";

export default {
  name: "Profile",
  components: {
    ProfileForm
  },
  computed: {
    user() {
      return this.$store.getters["getUserData"];
    },
    profile() {
      return this.$store.getters["getProfileData"];
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
.about__text {
  margin: 0;
}
.about__text span {
  font-weight: 500;
}
</style>
