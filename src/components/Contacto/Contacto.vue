<template>   
  <v-layout align-center justify-start class="main">
    <v-flex xs12 sm5 offset-sm1 class="circulo">
      <div class="circulo-texto">
        <v-card-title primary-title>
          <h1>Contactanos</h1>
        </v-card-title>
        <v-card-text class="texto">Si te interesa saber más acerca de nuestros proyectos y actividades no dudes en
          dejarnos tu mail para mandarte toda la información y de seguirnos en nuestras redes sociales
        </v-card-text>
        <v-text-field class="texto" color="white"
          v-model="email"
          :rules="emailRules"
          label="Déjanos tu mail"
          required
        ></v-text-field>
        <div class="redes-sociales">
          <a href="https://www.instagram.com/chicasprogramandoarg/?hl=es-la" target="_blank"><img :src="instagram" ></a>
          <a href="https://twitter.com/ArProgramando?lang=es" target="_blank"><img :src="twitter" ></a>
          <a href="https://www.linkedin.com/" target="_blank"><img :src="linkedin" ></a>
          <a href="https://github.com/chicasprogramando" target="_blank"><img :src="github" ></a>  
        </div>
      </div>
    </v-flex>
  </v-layout> 
</template>
          
<script>
import {emailRules} from "../../validaciones"
import image from "../../assets/bgimageFour.jpg"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"

export default {
  name: 'Contacto',
  data () {
    return {
      image:image,
      instagram:instagram,
      twitter:twitter,
      linkedin:linkedin,
      github:github,
      emailRules:emailRules
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main{
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 2em;
  background-image: url('../../assets/bgimageFour.jpg');
  background-size: 100%
}

.circulo{
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #7e64ab;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 100px;
}

.circulo-texto{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
}

h1 {
  color: #ffffff;
}

.texto{
  padding: 30px;
  color: #ffffff;  
  text-align: center
}

.redes-sociales img{
  height: 30px;
  width: 30px;
  margin: 10px
}

</style>