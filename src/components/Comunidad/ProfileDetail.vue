<template>
  <div class="profileCard">
    <div class="profileCard__img" :style="{ 'background-image' : 'url(' + profileInfo.image + ')' }"> </div>
    <div class="profileCard__info deep-purple--text lighten-1"> 
      <h3 class="info__name">  {{ profileInfo.name }} </h3>
      <h4 class="info__title"> {{ profileInfo.title }} </h4>
      <div class="info__rolename"> {{ profileInfo.roleName }} </div>
      <div class="info__about"> 
        <p class="about__text"><span>Busco Proyecto: </span> {{ profileInfo.busquedaProyecto }} </p>
        <p class="about__text"><span>Experiencia: </span> {{ profileInfo.senority }} </p>
        <p class="about__text"><span>Tecnologías: </span><i v-for="lang in profileInfo.lenguajes" :key="lang">{{ lang }}, </i>.</p>
        <p class="about__text"><span>About: </span> {{ profileInfo.aboutMe }} </p>
      </div>
      <div class="info__redes">
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

.profileCard {
    background-color: rgba(255, 255, 255,1);
    border-radius: 500px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 60%;
    padding: 18px;
    margin: 15px;
}

.info__name {
    font-weight: 600;
    font-size: 28px;
}
.info__title {
    font-size: 22px;
    margin-top: -3px;
}

.profileCard__info {
    margin-left: 25px; 
    text-align: left;
    width:50%;
}

.profileCard__img {
  width: 45%;
  height: auto;
  padding-bottom: 45%;
  /* background-image: url(https://thumbs.dreamstime.com/z/gatito-divertido-del-gato-del-beb%C3%A9-36333148.jpg);*/
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-sizing: border-box;
}

.about__text {
  margin-bottom: 0px;
  font-weight: 300;
  font-size: 16px;
}

.about__text span {
  font-weight: 500;
}

.info__rolename {
  background-color: #7E57C2;
  border-radius: 500px;
  padding:0 10px;
  margin:15px 0;
  display: inline-block;
  color: #fff;
  width: auto;
}

.info__redes {
  margin-top: 20px;
}

.info__redes a{
  display: inline-block;
  margin: 0 5px;
}

</style>