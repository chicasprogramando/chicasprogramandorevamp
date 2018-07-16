<template>
  <v-container fluid>
    <v-layout column align-center class="lds-ball">
      <img src="@/assets/logo200.png">
    </v-layout>
  </v-container>
</template>

<style>
  .lds-ball {
   animation: loading 0.5s infinite;
  }

  @keyframes loading {
   0%, 100% {
     transform: translateY(0px);
     animation-timing-function: ease-out;
   }
   50% {
     transform: translateY(-30px);
     animation-timing-function: ease-in;
   }
  }
</style>
