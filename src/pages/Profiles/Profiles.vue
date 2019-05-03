<template>
  <v-container class="comunidad-container" fluid>
    <v-layout class="deep-purple lighten-1 comunidad__searchbar" row>
      <v-flex xs12 sm6>
        <h2 class="white--text">Las Coders de Nuestra Comunidad</h2>
        <v-text-field
          name="profile"
          label="Nombre de dev"
          id="profile"
          class="searchbar__input"
          dark
          color="white"
          v-model="search"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="comunidad__profiles--padding">
      <v-flex v-for="item in profiles(search)" :key="item.name" xs12 md6 lg3>
        <profile-card :data="item" @profileCardClick="openProfileCard(item)"></profile-card>
      </v-flex>
      <v-slide-x-transition mode="out-in">
        <v-flex class="profile-container" v-if="singleProfile">
          <div class="profile_modal">
            <button class="profile-modal__btn" @click="closeProfileCard()">X</button>
            <profile-detail :profileInfo="singleProfile"></profile-detail>
          </div>
        </v-flex>
      </v-slide-x-transition>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn color="deep-purple lighten-2" dark fab fixed bottom right slot="activator">
          <v-icon>add</v-icon>
        </v-btn>
        <ProfileForm @onCloseModal="onCloseModal()"/>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import ProfileCard from "./ProfileCard";
import ProfileDetail from "./ProfileDetail";
import ProfileForm from "./ProfileForm";

import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Profiles",
  components: {
    ProfileCard,
    ProfileDetail,
    ProfileForm
  },
  data() {
    return {
      loading: false,
      singleProfile: null,
      search: "",
      dialog: false
    };
  },
  computed: {
    ...mapState({
      profiles: state => state.profiles.items
    }),
    ...mapGetters("profiles", {
      profiles: "getFilteredProfiles"
    })
  },
  methods: {
    ...mapActions({
      fetchProfiles: "profiles/fetchProfiles"
    }),
    openProfileCard(item) {
      this.singleProfile = item;
    },
    closeProfileCard() {
      this.singleProfile = null;
    },
    onCloseModal() {
      this.dialog = false;
    }
  },
  created() {
    this.loading = true;
    this.fetchProfiles().then(() => (this.loading = false));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comunidad-container {
  background-color: #dcd3eb;
  padding: 0;
  height: 100%;
  position: relative;
}
.comunidad__searchbar,
.comunidad__profiles--padding {
  padding: 16px;
}
.searchbar__input::-moz-placeholder {
  font-size: 18px;
  font-weight: 300;
}

.searchbar__input::placeholder {
  font-size: 18px;
  font-weight: 300;
}

.profile-container {
  background-color: rgba(0, 0, 0, 0.75);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.profile_modal {
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.profile-modal__btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #7e57c2;
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 20px;
}
.profile-modal__btn:hover {
  background-color: rgb(89, 47, 161);
}

.profile-modal__btn:focus {
  outline: none;
}
</style>