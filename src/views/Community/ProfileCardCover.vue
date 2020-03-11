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
      <p>
        <b>
          {{ profile.specialty.map(s => s.description).join(", ") }}
        </b>
      </p>
      <p>{{ profile.skill.map(s => s.description).join(", ") }}</p>
      <p
        v-for="(value, name) in social"
        :key="name"
        class="profile-card-social"
      >
        <span>{{ name }}</span
        >: <a :href="value" target="_blank">{{ value }}</a>
      </p>
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
.profile-card-social span {
  text-transform: capitalize;
}
</style>
