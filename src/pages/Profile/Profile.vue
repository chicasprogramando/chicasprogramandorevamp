<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex xs12 md2>
        <div>Image</div>
      </v-flex>
      <v-flex xs12 md4>
        <div>Info</div>
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
      loading: false
    };
  },
  computed: {},
  methods: {},
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>