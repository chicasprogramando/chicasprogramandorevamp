<template>
  <v-layout align-center justify-start class="welcome">
    <v-flex class="purple__colorbg">
      <v-card xs12 sm6 offset-sm3 class="welcome__card">
        <v-card-title primary-title>
          <v-img
            :src="require('@/assets/logo200.png')"
            contain
            height="100"
          ></v-img>
        </v-card-title>
        <v-card-actions>
          <p class="welcome_text">Te damos la Bienvenida!</p>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "AuthCallBack",
  data: () => ({})
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/comunidad.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.welcome__card {
  width: 100%;
  max-width: 500px;
}

.welcome_text {
  font-size: 24px;
  color: #7e64ab;
  margin: 0 auto;
  margin-bottom: 10px;
}
</style>
