<template>
  <v-col cols="12" sm="12" lg="4" md="4">
    <v-card class="mx-auto home__card" max-width="225" :elevation="6">
      <v-img :src="image" height="160px" class="home__card__image"></v-img>
      <v-card-title class="home__card__title">
        {{ title }}
      </v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Card",
  props: ["image", "title"]
};
</script>

<style scoped>
.home__card__title {
  color: #7e64ab;
  font-size: 20px;
  justify-content: center;
}
</style>
