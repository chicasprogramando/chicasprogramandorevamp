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
          <v-layout>
            <v-flex xs12>
              <v-card-title primary-title>
                <div class="header-container">
                  <h1 class="headline">{{ user.user_name }}</h1>
                  <v-btn
                    class="ma-2"
                    color="deep-purple lighten-1"
                    dark
                    @click="toggleIsEditingName"
                  >
                    <v-icon class="mr-1" medium>edit</v-icon>
                    Editar nombre
                  </v-btn>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-card-text>
              <p class="about__text white--text" v-if="profile.github">
                <span>Github: </span>{{ profile.github }}
              </p>
              <p class="about__text white--text" v-if="profile.linkedin">
                <span>LinkedIn: </span>{{ profile.linkedin }}
              </p>
              <p class="about__text white--text" v-if="profile.twitter">
                <span>Twitter: </span>{{ profile.twitter }}
              </p>
            </v-card-text>
          </v-layout>
        </v-card>
        <v-form
          class="form"
          ref="form"
          @submit.prevent="onUpdateUserName"
          v-if="this.isEditingName"
        >
          <v-container grid-list-md fluid>
            <v-layout class="align-center">
              <v-flex md9>
                <v-text-field
                  v-model="user_name"
                  :placeholder="user.user_name"
                  color="purple"
                ></v-text-field>
              </v-flex>
              <v-flex md3>
                <v-btn
                  rounded
                  color="deep-purple lighten-1"
                  class="buttons__single-btn buttons__single-btn--white"
                  type="submit"
                  dark
                  >Guardar</v-btn
                >
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-flex>
      <v-flex xs12 md6>
        <ProfileForm :user="user" />
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
  data() {
    return {
      user_name: "",
      isEditingName: false
    };
  },
  computed: {
    user() {
      return this.$store.getters["getUserData"];
    },
    profile() {
      return this.$store.getters["getProfileData"];
    }
  },
  methods: {
    toggleIsEditingName() {
      this.isEditingName = !this.isEditingName;
    },
    onUpdateUserName() {
      this.$store.dispatch("updateUserName", { user_name: this.user_name });
      this.isEditingName = false;
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
