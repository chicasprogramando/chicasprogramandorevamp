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
            <v-card v-for="n in 1" :key="n" class="profile-card-cover">
              <v-img
                class="white--text align-end"
                height="200px"
                position="top center"
                :src="profile.image_path"
                style="position: relative"
              >
                <v-card-title>
                  <span class="profile-card-name">
                    {{ profile.name }}
                  </span>
                </v-card-title>
                <v-btn
                  small
                  absolute
                  dark
                  top
                  right
                  rounded
                  color="deep-purple lighten-1"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-img>

              <v-card-text class="text--primary">
                <p>
                  <b>
                    {{ profile.specialty.map(s => s.description).join(", ") }}
                  </b>
                </p>
                <p>{{ profile.skill.map(s => s.description).join(", ") }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Community",
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
