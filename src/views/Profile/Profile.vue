<template>
  <v-container fluid grid-list-md class="profile-container">
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
        <ProfileForm />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProfileForm from "./ProfileForm";
// import Loader from "../../components/Loader";

export default {
  name: "Profile",
  components: {
    ProfileForm,
    // Loader
  },
  computed: {
    profile() {
      return this.$store.getters["getProfileData"];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-container {
  height: 100%;
}
.loader-component {
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
