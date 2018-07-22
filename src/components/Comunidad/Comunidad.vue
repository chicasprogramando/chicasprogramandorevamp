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
  <div class="container-comunidad">
    <v-layout row wrap class="profiles-padding profiles-container-wrapper"> 
      <v-flex 
        v-for= "item in profilesInfo"
        :key="item.name">
        <profile-card :data="item" @profileCardClick="openProfileCard(item)"> </profile-card> 
      </v-flex>
    </v-layout>
    <v-layout class="derecha">
      <v-flex class="profile-detail-modal-container" v-if="singleProfile">
        <div class="profile-detail-modal">
          <button class="profile-detail-close-btn" @click="closeProfileCard()">
            X
          </button>
          <profile-detail :data="singleProfile"></profile-detail>
        </div>
      </v-flex>
    </v-layout>
  </div>
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
        {name:'Puri Bey', title:'FrontEnd Dev', image:'https://avatars2.githubusercontent.com/u/30815608?s=400&v=4'},
        {name:'Pao Gutierrez', title:'FrontEnd Dev', image:'https://avatars0.githubusercontent.com/u/36400469?s=400&v=4'},
        {name:'Gia Castello', title:'FrontEnd Dev', image:'https://avatars2.githubusercontent.com/u/17608191?s=400&v=4'},
        {name:'Sofi Estevez', title:'BackEnd Dev', image:'https://avatars1.githubusercontent.com/u/30813859?s=460&v=4'},
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
  display: inline-block;
}

.derecha {
  display: inline-block;
  width: 50%;
}

.profile-detail-modal-container {
  background-color: #ffffff;
  box-sizing: border-box;
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