<template>
  <v-container fluid>
    <v-layout column align-center class="lds-star">
      <img src="@/assets/logo200.png">
    </v-layout>
  </v-container>
</template>

<style>
.lds-star {
  animation: 2.5s rotate infinite;
  animation-timing-function: linear;
}

.lds-star {
  margin: 50px auto;
}
.lds-star:after {
  transform: rotate(45deg);
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
