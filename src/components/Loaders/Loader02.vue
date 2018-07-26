<template>
  <v-container fluid>
    <v-layout column align-center class="lds-heart">
      <img src="@/assets/logo200.png">
    </v-layout>
  </v-container>
</template>

<style>
  .lds-heart {
    top: 23px;
    left: 19px;
    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  @keyframes lds-heart {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }
</style>
