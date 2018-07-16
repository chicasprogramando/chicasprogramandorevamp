<template>
  <v-container fluid>
    <v-layout class="lds-circle">
      <img src="@/assets/logo200.png">
    </v-layout>
  </v-container>
</template>

<style>
  .lds-circle {
    display: inline-block;
    animation: lds-circle 4.5s cubic-bezier(0, 0, 0, 0.5) infinite;
  }
  @keyframes lds-circle {
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
</style>
