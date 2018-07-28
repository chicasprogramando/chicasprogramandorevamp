<template>
<v-container class="comunidad-container profiles-container-wrapper" fluid>
  <v-layout class="deep-purple lighten-1 search-bar-profiles" row>
    <v-flex xs12 sm6>
      <h2 class="white--text">Las Coders de Nuestra Comunidad</h2>
      <v-text-field
        name="profile"
        label="Nombre de dev"
        id="profile"
        class="search-bar-input"
        dark
        color="white"
      >
  	  </v-text-field>
    </v-flex>
  </v-layout>
  <v-layout row wrap class="profiles-padding"> 
    <v-flex
      v-for= "item in profilesInfo"
      :key="item.name"
      xs12 md3>
      <profile-card :data="item" @profileCardClick="openProfileCard(item)"> </profile-card> 
    </v-flex>
    <v-slide-x-transition mode="out-in">
    <v-flex class="profile-detail-modal-container" v-if="singleProfile">
      <div class="profile-detail-modal">
        <button class="profile-detail-close-btn" @click="closeProfileCard()">
          X
        </button>
        <profile-detail :profileInfo="singleProfile"></profile-detail>
      </div>
    </v-flex>
    </v-slide-x-transition>
  </v-layout>
</v-container>
</template>

<script>
import ProfileCard from './ProfileCard'
import ProfileDetail from './ProfileDetail'
export default {
  name: 'Comunidad',
  components: {
    ProfileCard,
    ProfileDetail
  },
  data () {
    return {
      profilesInfo:[
        {name:'Puri Bey', title:'FrontEnd Dev', image:'https://avatars2.githubusercontent.com/u/30815608?s=400&v=4',roleName:'Core Team Chicas Programando', busquedaProyecto:'Si', senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS','ReactJS','Twig','PHP'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', LinkedIn:'https://www.linkedin.com/', GitHub:'https://github.com/'},
        {name:'Pao Gutierrez', title:'FrontEnd Dev', image:'https://avatars0.githubusercontent.com/u/36400469?s=400&v=4',roleName:'Core Team Chicas Programando', busquedaProyecto:'Si', senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', LinkedIn:'https://www.linkedin.com/', GitHub:'https://github.com/'},
        {name:'Gia Castello', title:'FrontEnd Dev', image:'https://avatars2.githubusercontent.com/u/17608191?s=400&v=4',roleName:'Core Team Chicas Programando', busquedaProyecto:'Si', senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', LinkedIn:'https://www.linkedin.com/', GitHub:'https://github.com/'},
        {name:'Sofi Estevez', title:'Front End', image:'https://avatars1.githubusercontent.com/u/30813859?s=460&v=4',roleName:'Core Team Chicas Programando', busquedaProyecto:'Si', senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', LinkedIn:'https://www.linkedin.com/', GitHub:'https://github.com/'},
        {name:'Mar Calmon', title:'Back End', image:'https://scontent.faep4-1.fna.fbcdn.net/v/t1.0-1/p320x320/27857984_1820396551318183_8807487495427656876_n.jpg?_nc_cat=0&oh=3559f56daddc84167feefe60723a524a&oe=5BD7371E',roleName:'Core Team Chicas Programando', busquedaProyecto:'Si', senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS','Ruby','Angular2'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', LinkedIn:'https://www.linkedin.com/', GitHub:'https://github.com/'},
        {name:'Dada', title:'Front End Jr', image:'https://pbs.twimg.com/profile_images/961969936838152193/av3_fAJI_400x400.jpg',roleName:'Member Chicas Programando', busquedaProyecto:'Si', senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', LinkedIn:'https://www.linkedin.com/', GitHub:'https://github.com/'},
        {name:'Gise Perez', title:'Front End Jr', image:'https://avatars0.githubusercontent.com/u/37008992?s=460&v=4',roleName:'Member Chicas Programando', busquedaProyecto:'Si', senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', LinkedIn:'https://www.linkedin.com/', GitHub:'https://github.com/'},
        {name:'Cindy Potes', title:'Front End Jr', image:'https://avatars2.githubusercontent.com/u/36973945?s=400&v=4',roleName:'Member Chicas Programando', busquedaProyecto:'Si', senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', LinkedIn:'https://www.linkedin.com/', GitHub:'https://github.com/'},
        {name:'Agus Gottert', title:'FrontEnd Dev', image:'https://avatars1.githubusercontent.com/u/30804702?s=400&v=4',roleName:'Core Team Chicas Programando', busquedaProyecto:'Si', senority:'Junior', lenguajes:['Html', 'CSS', 'JavaScript','VueJS'], aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', LinkedIn:'https://www.linkedin.com/', GitHub:'https://github.com/'},
        {name:'SuperDiana', title:'DevOps Sr', image:'https://pbs.twimg.com/profile_images/1018183502578282497/5xdZ5bGN_400x400.jpg',roleName:'Mentor', busquedaProyecto:'Si', senority:'Senior', lenguajes:'De todo!', aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', LinkedIn:'https://www.linkedin.com/', GitHub:'https://github.com/'}
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
}
.search-bar-profiles, 
.profiles-padding {
  padding: 16px;
}
.search-bar-profiles {}

.search-bar-input::-moz-placeholder {
  font-size: 18px;
  font-weight: 300;
}

.search-bar-input::placeholder {
  font-size: 18px;
  font-weight: 300;
}

.profiles-container-wrapper {
  position: relative;
}

.profile-detail-modal-container {
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

.profile-detail-modal {
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.profile-detail-close-btn {
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
.profile-detail-close-btn:hover {
  background-color: rgb(89, 47, 161);
}

.profile-detail-close-btn:focus {
  outline: none;
}

</style>