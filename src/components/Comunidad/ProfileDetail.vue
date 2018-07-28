<template>
  <div class="profile-card-container">
    <div class="profile-card-img" :style="{ 'background-image' : 'url(' + profileInfo.image + ')' }"> </div>
    <div class="profile-card-info deep-purple--text lighten-1"> 
      <h3 class="profile-card-name">  {{ profileInfo.name }} </h3>
      <h4 class="profile-card-title"> {{ profileInfo.title }} </h4>
      <div class="profile-card-roleName"> {{ profileInfo.roleName }} </div>
      <div class="profile-card-about"> 
        <p class="profile-card-text"><span>Busco Proyecto: </span> {{ profileInfo.busquedaProyecto }} </p>
        <p class="profile-card-text"><span>Experiencia: </span> {{ profileInfo.senority }} </p>
        <p class="profile-card-text"><span>Tecnologías: </span><i v-for="lang in profileInfo.lenguajes" :key="lang">{{ lang }}, </i>.</p>
        <p class="profile-card-text"><span>About: </span> {{ profileInfo.aboutMe }} </p>
      </div>
      <div class="redes-sociales">
        <a href="https://www.instagram.com/chicasprogramandoarg/?hl=es-la" target="_blank"><icons propName="instagram" bgColor="#7e64ab" color="#ffffff"></icons></a>
        <a href="https://twitter.com/ArProgramando?lang=es" target="_blank"><icons propName="twitter" bgColor="#7e64ab" color="#ffffff"></icons></a>
        <a href="https://www.linkedin.com/" target="_blank"><icons propName="linkedin" bgColor="#7e64ab" color="#ffffff"></icons></a>
        <a href="https://github.com/chicasprogramando" target="_blank"><icons propName="github" bgColor="#7e64ab" color="#ffffff"></icons></a>  
      </div>
    </div>
  </div>
</template>

<script>
import Icons from "@/components/Otros/Icons"

export default {
  name: 'ProfileCard',
  components : {
    Icons
  },
  props: {
    profileInfo: {
      type: Object
    }
  }, 
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.profile-card-container {
    background-color: rgba(255, 255, 255,1);
    border-radius: 500px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 60%;
    padding: 18px;
    margin: 15px;
}

.profile-card-name {
    font-weight: 600;
    font-size: 28px;
}
.profile-card-title {
    font-size: 22px;
    margin-top: -3px;
}

.profile-card-info {
    margin-left: 25px; 
    text-align: left;
    width:50%;
}


.profile-card-img {
  width: 45%;
  height: auto;
  padding-bottom: 45%;
  /* background-image: url(https://thumbs.dreamstime.com/z/gatito-divertido-del-gato-del-beb%C3%A9-36333148.jpg);*/
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-sizing: border-box;
}

.profile-card-text {
  margin-bottom: 0px;
  font-weight: 300;
  font-size: 16px;
}

.profile-card-text span {
  font-weight: 500;
}

.profile-card-roleName {
  background-color: #7E57C2;
  border-radius: 500px;
  padding:0 10px;
  margin:15px 0;
  display: inline-block;
  color: #fff;
  width: auto;
}

.redes-sociales {
  margin-top: 20px;
}

.redes-sociales a{
  display: inline-block;
  margin: 0 5px;
}

</style>