<template>
<v-container class="comunidad-container" fluid="">
  <v-layout class="deep-purple lighten-1 search-bar-profiles" row>
    <v-flex xs12 sm6>
      <h2 class="white--text">Las Coders de Nuestra Comunidad</h2>
      <v-text-field
        name="profile"
        label="Nombre de dev"
        id="profile"
        class="title"
        dark
      >
  	  </v-text-field>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'Comunidad',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #7e64ab;
}
.comunidad-container {
  background-color: #DCD3EB;
  padding: 0;
}
.search-bar-profiles {
  padding: 16px;
}
</style>