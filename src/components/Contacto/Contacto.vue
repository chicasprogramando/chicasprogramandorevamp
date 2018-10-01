<template>   
  <v-layout align-center justify-start class="contacto">
    <v-flex class="contacto__colorbg">
      <div xs12 sm5 offset-sm1 class="tarjeta">
        <div class="tarjeta__flex">
          <h2>HABLEMOS</h2>
          <v-card-text class="texto">¿Tenés algo que contarnos? ¡Escribinos!</v-card-text>
          <v-form v-model="valid" ref="form">  
            <v-text-field
                v-model="name"
                color='deep-purple'
                :rules="nombreRules"
                :counter="10"
                label="Me llamo"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                color='deep-purple'
                :rules="emailRules"
                label="Mi email es"
                required
              ></v-text-field>
               <v-text-field 
            default
            color='deep-purple'
            v-model="descripcion"
            :rules=descripcionRules
            label="Y mi consulta es:"
            counter=500
            rows="3"
            textarea
            required
            ></v-text-field>  
             <v-flex class="form__btns">
              <v-btn round class='form_btns--white' color='deep-purple lighten-1' dark @click="submit" >Enviar</v-btn>
              <v-btn dark round color='deep-purple lighten-1' class='btns__singlebtn' @click="clear">Limpiar</v-btn>
            </v-flex>
          </v-form>
          <div class="tarjeta__redes">
            <a href="https://www.instagram.com/chicasprogramandoarg/?hl=es-la" target="_blank"><Icons propName="instagram" bgColor="#7e64ab" color="#ffffff"></Icons></a>
            <a href="https://twitter.com/ArProgramando?lang=es" target="_blank"><Icons propName="twitter" bgColor="#7e64ab" color="#ffffff"></Icons></a>
            <a href="https://www.linkedin.com/" target="_blank"><Icons propName="linkedin" bgColor="#7e64ab" color="#ffffff"></Icons></a>
            <a href="https://github.com/chicasprogramando" target="_blank"><Icons propName="github" bgColor="#7e64ab" color="#ffffff"></Icons></a>  
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout> 
</template>
          
<script>
import { nombreRules, emailRules, campoRequeridoRules, descripcionRules } from '../../validaciones'
import Icons from "@/components/Otros/Icons"

export default {
  name: 'Contacto',
  components: {
    Icons
  },
  data () {
    return {
    valid: false,
    campoRequeridoRules:campoRequeridoRules,
    descripcion: '', 
    descripcionRules: descripcionRules,
    emailRules:emailRules,
    nombreRules: nombreRules,
    email: '',
    name: ''
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
        descripcion: this.descripcion, 
        })
      }
    },
    clear () {
    this.$refs.form.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contacto{
  width: 100%;
  height: 100%;
  background-image: url('../../assets/teclado.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  
}

.contacto__colorbg{
  width: 100%;  
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgb(125, 99, 171);
  background: -webkit-linear-gradient(45deg, rgba(125, 99, 171, 0.8), rgba(166, 134, 216, 0.8));
  background: -o-linear-gradient(45deg, rgba(125,99,171,0.8), rgb(166, 134, 216, 0.8));
  background: -moz-linear-gradient(45deg, rgba(125,99,171,0.8), rgb(166, 134, 216, 0.8));
  background: linear-gradient(45deg, rgba(125,91,171,0.8), rgb(166,134,216,0.8)); 
}

.tarjeta{
  width: 100%;
  max-width: 750px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 2rem;
  margin: 0 1.5rem;
}

.tarjeta__flex{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h2 {
  color: #7e64ab;
  font-size: 3.5rem;
  padding-top: 1rem;
  font-weight: 600;
  text-transform: uppercase;
}

form{
width: 80%;
}

.texto{
  color: #7e64ab;  
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
}

.form__btns{
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
}

.form_btns--white{
  color: grey;
}


.tarjeta__redes a{
  display: inline-block;
  margin: 0 5px;
}

</style>