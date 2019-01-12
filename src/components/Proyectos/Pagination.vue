<template>
  <div class="text-xs-right">
    <v-pagination v-model="page" :length="4" circle></v-pagination>
  </div>
</template>

<style scoped>
  v-pagination {
    position: fixed;
    z-index: 1;
  }
  .pagination__item {
    color: #7357C2 !important;
    font-weight: bold;
    box-shadow: none;
    border: 1.4px solid #7357C2;
  }
  .pagination__item:active {
    background-color: #7357C2 !important;
    color: #F2F2F4 !important;
  }
  
  button:focus {
    outline: 0;
  }
  .pagination__navigation {
    box-shadow: none;
    border: 1.4px solid #7375C2;
  }
  .pagination__navigation .icon {
    font-size: 1rem;
  }
</style>

