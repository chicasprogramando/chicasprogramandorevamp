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
      v-for= "item in profilesInfo"
      :key="item.name">
      <profile-card :name="item.name" :title="item.title" :image="item.image"> </profile-card> 
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
      profilesInfo:[
        {name:'Puri Bey', title:'FrontEnd Dev', image:'https://avatars2.githubusercontent.com/u/30815608?s=400&v=4'},
        {name:'Pao Gutierrez', title:'FrontEnd Dev', image:'https://avatars0.githubusercontent.com/u/36400469?s=400&v=4'},
        {name:'Gia Castello', title:'FrontEnd Dev', image:'https://avatars2.githubusercontent.com/u/17608191?s=400&v=4'},
        {name:'Sofi Estevez', title:'BackEnd Dev', image:'https://avatars1.githubusercontent.com/u/30813859?s=460&v=4'},
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