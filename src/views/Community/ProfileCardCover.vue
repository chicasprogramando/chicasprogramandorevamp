<template>
  <v-card class="profile-card-cover">
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
    </v-img>

    <v-card-text class="text--primary">
      <p v-if="profile.specialty">
        <b>
          {{ profile.specialty.map(s => s.description).join(", ") }}
        </b>
      </p>
      <p v-if="profile.skill">
        {{ profile.skill.map(s => s.description).join(", ") }}
      </p>
      <div class="profile-card-social">
        <p v-for="(value, name) in social" :key="name">
          <a :href="value" target="_blank">{{ name }}</a> <span> / </span>
        </p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { pick } from "ramda";
export default {
  name: "ProfileCardCover",
  props: {
    profile: {
      type: Object
    }
  },
  data: () => ({
    social: []
  }),
  mounted() {
    const social = pick(["linkedin", "github", "twitter"], this.profile);
    this.social = Object.keys(social).reduce((acc, key) => {
      if (social[key] !== "") {
        acc = Object.assign(acc, { [key]: social[key] });
      }
      return acc;
    }, {});
  }
};
</script>

<style scoped>
.profile-card-cover p {
  margin: 0;
}
.profile-card-name {
  background: rgb(125, 99, 171);
  color: #ffffff;
  padding: 0 5px;
}
.profile-card-social {
  display: flex;
}
.profile-card-social a {
  text-transform: capitalize;
  color: #7e57c2;
}

.profile-card-social p:last-of-type span {
  display: none;
}
</style>
