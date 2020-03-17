<template>
  <div class="loader-container">
    <div class="lds-circle">
      <img src="@/assets/logo200.png" width="100px" height="100px" />
    </div>
    <p class="loader-txt">Loading</p>
  </div>
</template>

<style>
.loader-container {
  text-align: center;
}
.lds-circle {
  display: inline-block;
  animation: lds-circle 4.5s cubic-bezier(0, 0, 0, 0.5) infinite;
}
.loader-txt {
  color: rgb(125, 99, 171);
}
@keyframes lds-circle {
  0%,
  100% {
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
