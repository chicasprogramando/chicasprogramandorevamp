<template>
  <v-container>
    <v-layout>
      <v-flex md6 class="v-flex--right" flat fill-height align-center>
        <div class="div--formWidth">
          <h2>Crear nuevo evento</h2>
          <v-form ref="form" v-model="valid">
            <v-text-field color="deep-purple lighten-1"
              v-model="eventName"
              :rules="campoRequeridoRules"
              label="Nombre del evento"
              required
            ></v-text-field>
            <v-text-field class="texto purple--text" color="deep-purple lighten-1"
              v-model="date"
              :rules="campoRequeridoRules"
              label="Fecha"
              required
            ></v-text-field>
            <v-text-field color="deep-purple lighten-1" 
              v-model="place"
              :rules="campoRequeridoRules"
              label="Lugar"
              required
            ></v-text-field>
            <v-text-field color="deep-purple lighten-1"
                v-model="fileLink"
                :rules="campoRequeridoRules"
                label="Link del proyecto"
                required
              ></v-text-field>
            
            <v-flex class="v-form__flexButtons">
                <v-btn round dark color="deep-purple lighten-1" class="flexButtons__button">Cancelar</v-btn>
                <v-btn round dark color="deep-purple lighten-1" class="flexButtons__button" @click="clear">Limpiar</v-btn>
                <v-btn round dark class="flexButtons__button" color="deep-purple lighten-1" @click="submit">Crear</v-btn>
            </v-flex>
            </v-form>
          </div>
        </v-flex>  
    </v-layout>
  </v-container>
</template>

<script>
import { campoRequeridoRules } from '../../validaciones.js'
export default {
  name: 'FormEventos',
  components: {
    
  },
  data () {
    return {
      valid: false,
      campoRequeridoRules:campoRequeridoRules,
      eventName: "",
      fileLink: "",
      date: "",
      place: ""
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        axios.post('/api/submit', {
        proyectoNombre: this.proyectoNombre,
        creadores: this.creadores,
        tecnologias: this.tecnologias,
        imagen:this.imagen,
        descripcion: this.descripcion,
        fileLink: this.fileLink,
        colaboracion: this.colaboracion,  
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
.v-flex--right{
  opacity:0.8;
  width:50%;
  padding: 10em 13% 1.5em 13%;
}
h2{
  color:#7e64ab;
  font-weight:300;
  font-size:2em;
}
.v-form__flexButtons{
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
.text-field  input, .text-field label{
    color: #7E57C2 !important;
}
.flexButtons__button{
  padding: 0 2px 0 2px;
  margin:0;
  font-size: 12px;
}

</style>