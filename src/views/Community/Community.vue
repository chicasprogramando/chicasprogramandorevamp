<template>
  <div class="community-conteiner">
    <div class="community-header-conteiner">
      <h2>Nuestra comunidad</h2>
      <div></div>
    </div>
    <div class="community-main-conteiner container-grid">
      <v-container fluid>
        <v-row>
          <v-col
            cols="6"
            sm="4"
            md="3"
            v-for="profile in profiles"
            :key="profile.id"
          >
            <ProfileCardCover :profile="profile" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import ProfileCardCover from "./ProfileCardCover";
export default {
  name: "Community",
  components: {
    ProfileCardCover
  },
  data: () => ({}),
  mounted() {
    this.$store.dispatch("fetchAllProfiles");
  },
  computed: {
    profiles() {
      return this.$store.getters["getAllProfiles"];
    }
  }
};
</script>

<style scoped>
.community-conteiner {
  height: 100%;
}
.community-header-conteiner {
  padding: 20px;
}
.community-main-conteiner {
  background-color: #ffffff;
  padding: 10px;
  height: 100%;
}
.profile-card-cover p {
  margin: 0;
}
.profile-card-name {
  background: rgb(125, 99, 171);
  color: #ffffff;
  padding: 0 5px;
}
</style>
