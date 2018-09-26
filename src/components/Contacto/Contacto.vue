<template>   
  <v-layout align-center justify-start class="main">
    <v-flex class="colorBack">
      <div xs12 sm5 offset-sm1 class="circulo">
      <div class="circulo-texto">

        <v-card-title primary-title>
          <h2>Hablemos</h2>
        </v-card-title>
      <v-form v-model="valid">
        <v-card-text class="texto">Si te interesa saber más acerca de nuestros proyectos y actividades no dudes en
          dejarnos tu mail para mandarte toda la información y de seguirnos en nuestras redes sociales
        </v-card-text>

        <v-text-field class="texto"
          v-model="email"
          :rules="emailRules"
          placeholder="Déjanos tu mail"
          required
          color="deep-purple lighten-1"
          dark
        ></v-text-field>

        <v-text-field class="texto"
          v-model="email"
          :rules="emailRules"
          placeholder="Déjanos tu mail"
          required
          color="deep-purple lighten-1"
          dark
        ></v-text-field>
      
       <v-card-actions>
              <v-btn primary large block>Enviar</v-btn>
              <v-btn round dark color="deep-purple lighten-1" class="form__buttons--styles">Cancelar</v-btn>
                <v-btn round dark color="deep-purple lighten-1" class="form__buttons--styles" @click="clear">Limpiar</v-btn>
                <v-btn round dark class="form__buttons--styles" color="deep-purple lighten-1" @click="submit">Crear</v-btn>
        </v-card-actions>

        </v-form>


        <div class="redes-sociales">
          <a href="https://www.instagram.com/chicasprogramandoarg/?hl=es-la" target="_blank"><icons propName="instagram" bgColor="#ffffff" color="#7e64ab"></icons></a>
          <a href="https://twitter.com/ArProgramando?lang=es" target="_blank"><icons propName="twitter" bgColor="#ffffff" color="#7e64ab"></icons></a>
          <a href="https://www.linkedin.com/" target="_blank"><icons propName="linkedin" bgColor="#ffffff" color="#7e64ab"></icons></a>
          <a href="https://github.com/chicasprogramando" target="_blank"><icons propName="github" bgColor="#ffffff" color="#7e64ab"></icons></a>  
        </div>

      </div>
      </div>
    </v-flex>
  </v-layout> 
</template>
          
<script>
import {emailRules} from "../../validaciones"
import image from "../../assets/bgimageFour.jpg"
import Icons from "@/components/Otros/Icons"

export default {
  name: 'Contacto',
  components: {
    Icons
  },
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
  height: 93vh;
  background-image: url('../../assets/bgimageFour.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  
}

.colorBack{
  width: 100%;  
  height: 36%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgba(219,21,99,0.8);
  background: -webkit-linear-gradient(45deg, rgba(213,0,125,0.8), rgba(229,57,53,0.8));
  background: -o-linear-gradient(45deg, rgba(213,0,125,0.8), rgba(229,57,53,0.8));
  background: -moz-linear-gradient(45deg, rgba(213,0,125,0.8), rgba(229,57,53,0.8));
  background: linear-gradient(45deg, rgba(213,0,125,0.8), rgba(229,57,53,0.8));
}


.circulo{
  width: 790px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  
}

.circulo-texto{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
}

h2 {
  color: violet;
  font-size: 40px;
}

.texto{
  padding: 30px;
  color: violet;  
  text-align: center;
  font-size: 18px;
}

.redes-sociales img{
  height: 30px;
  width: 30px;
  margin: 10px
}

.redes-sociales a{
  display: inline-block;
  margin: 0 5px;
}

</style>