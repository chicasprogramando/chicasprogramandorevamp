<template>
<v-container class="comunidad-container" fluid>
  <v-layout class="deep-purple lighten-1 comunidad__searchbar" row>
    <v-flex xs12 sm6>
      <h2 class="white--text">Las Coders de Nuestra Comunidad</h2>
      <v-text-field
        name="profile"
        label="Nombre de dev"
        id="profile"
        class="searchbar__input"
        dark
        color="white"
      >
  	  </v-text-field>
    </v-flex>
  </v-layout>
  <v-layout row wrap class="comunidad__profiles--padding"> 
    <v-flex
      v-for= "item in profilesInfo"
      :key="item.name"
      xs12 md3>
      <profile-card :data="item" @profileCardClick="openProfileCard(item)"> </profile-card> 
    </v-flex>
    <v-slide-x-transition mode="out-in">
    <v-flex class="profile-container" v-if="singleProfile">
      <div class="profile_modal">
        <button class="profile-modal__btn" @click="closeProfileCard()">
          X
        </button>
        <profile-detail :profileInfo="singleProfile"></profile-detail>
      </div>
    </v-flex>
    </v-slide-x-transition>
    <!--<form-comunidad></form-comunidad>-->
  </v-layout>
</v-container>
</template>

<script>
import ProfileCard from './ProfileCard'
import ProfileDetail from './ProfileDetail'
import FormComunidad from '@/components/Otros/FormComunidad'
export default {
  name: 'Comunidad',
  components: {
    ProfileCard,
    ProfileDetail,
    FormComunidad
  },
  data () {
    return {
      profilesInfo:[
        {name:'Puri Bey', title:'FrontEnd Dev', image:'https://avatars2.githubusercontent.com/u/30815608?s=400&v=4',roleName:'Core Team Chicas Programando', busquedaProyecto:true, senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS','ReactJS','Twig','PHP'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', redes: {linkedin:'https://www.linkedin.com/', github:'https://github.com/', twitter: 'www.twitter.com'}},
        {name:'Pao Gutierrez', title:'FrontEnd Dev', image:'https://avatars0.githubusercontent.com/u/36400469?s=400&v=4',roleName:'Core Team Chicas Programando', busquedaProyecto:'Si', senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', redes: {linkedin:'https://www.linkedin.com/', github:'https://github.com/', twitter: 'www.twitter.com'}},
        {name:'Gia Castello', title:'FrontEnd Dev', image:'https://avatars2.githubusercontent.com/u/17608191?s=400&v=4',roleName:'Core Team Chicas Programando', busquedaProyecto:'Si', senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', redes: {linkedin:'https://www.linkedin.com/', github:'https://github.com/', twitter: 'www.twitter.com'}}
      ],
      singleProfile: null
    }
  },
  methods: {
    openProfileCard(item) {
      console.log(item)
      this.singleProfile = item
    },
    closeProfileCard() {
      this.singleProfile = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.comunidad-container {
  background-color: #DCD3EB;
  padding: 0;
  height: 100%;
  position: relative;
}
.comunidad__searchbar, 
.comunidad__profiles--padding {
  padding: 16px;
}
.searchbar__input::-moz-placeholder {
  font-size: 18px;
  font-weight: 300;
}

.searchbar__input::placeholder {
  font-size: 18px;
  font-weight: 300;
}


.profile-container {
  background-color: rgba(0,0,0,0.75);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.profile_modal {
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.profile-modal__btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #7E57C2;
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 20px;
}
.profile-modal__btn:hover {
  background-color: rgb(89, 47, 161);
}

.profile-modal__btn:focus {
  outline: none;
}

</style>