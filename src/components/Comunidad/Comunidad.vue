<template>
<v-container class="comunidad-container" fluid>
  <v-layout class="deep-purple lighten-1 search-bar-profiles" row>
    <v-flex xs12 sm6>
      <h2 class="white--text">Las Coders de Nuestra Comunidad</h2>
      <v-text-field
        name="profile"
        label="Nombre de dev"
        id="profile"
        class="search-bar-input"
        dark
      >
  	  </v-text-field>
    </v-flex>
  </v-layout>
  <v-layout row wrap class="profiles-padding"> 
    <v-flex 
      v-for="profile in listProfiles"
      :key="profile.name"
      xs12 sm3>
      <profile-card :title="profile.title" :name="profile.name"> </profile-card> 
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import ProfileCard from './ProfileCard'
export default {
  name: 'Comunidad',
  components: {
    ProfileCard
  },
  data () {
    return {
      listProfiles: [
        {name:"Priscila Bey", title: "Front End Dev"},
        {name:"Gia Castello", title: "Front End Dev"},
        {name:"Mariana Calmon", title: "Front End Dev"},
        {name:"Sofia Estevez", title: "Front End Dev"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.comunidad-container {
  background-color: #DCD3EB;
  padding: 0;
}
.search-bar-profiles, 
.profiles-padding {
  padding: 16px;
}

.search-bar-input::-moz-placeholder {
  font-size: 18px;
  font-weight: 300;
}

.search-bar-input::placeholder {
  font-size: 18px;
  font-weight: 300;
}

</style>