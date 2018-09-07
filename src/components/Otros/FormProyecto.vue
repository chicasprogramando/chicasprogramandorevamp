<template>
  <v-container class="container--background">
    <v-layout align-start justify-center>
      <v-flex sm4 class="main">
        <h1 class="main__h1">Crear un nuevo proyecto</h1>  
        <v-form class='main__form' ref="form" v-model="valid">
            <v-text-field 
              class="form__text-field"
              color='deep-purple lighten-1'
              v-model="proyectoNombre"
              :rules="campoRequeridoRules"
              label="Nombre del proyecto"
              required
            ></v-text-field>
            <v-text-field 
              class="form__text-field"
              color='deep-purple lighten-1'
              v-model="creadores"
              :rules="campoRequeridoRules"
              label="Nombre del creador o grupo"
              required
            ></v-text-field>
            <v-text-field 
              class="form__text-field"
              color='deep-purple lighten-1'
              v-model="tecnologias"
              :rules="campoRequeridoRules"
              label="Tecnologías"
              required
            ></v-text-field>
            <v-text-field 
              class="form__text-field"
              outline
              v-model='imagen'
              label="Imagen"
              color='deep-purple lighten-1'
            ></v-text-field>
            <v-text-field 
              class="form__text-field"
              default
              color='deep-purple lighten-1'
              v-model="descripcion"
              :rules=descripcionRules
              textarea
              label="Descripción del proyecto"
              counter=500
              rows="2"
              required
            ></v-text-field>
            <v-text-field 
              class="form__text-field"
              color='deep-purple lighten-1'
              v-model="fileLink"
              :rules="fileLinkRules"
              label="Link del proyecto"
              required
            ></v-text-field>
            <v-flex>
            <v-select 
              class="form__text-field"
              color="deep-purple lighten-1"
              label="Abierto a colaboración?"
              :items="colaboracion"
              required
            ></v-select>
            </v-flex>
          
            <v-flex class="form__buttons-container">
              <v-btn round class='buttons-container__buttons buttons-container__buttons--white' color='deep-purple lighten-1' @click="submit" :disabled="!valid">Crear</v-btn>
              <v-btn dark round color='deep-purple lighten-1' class='buttons-container__buttons' @click="clear">Limpiar</v-btn>
              <v-btn dark round color='deep-purple lighten-1' class='buttons-container__buttons'>Cancelar</v-btn>
            </v-flex>
          </v-form>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { nombreRules, emailRules, campoRequeridoRules, descripcionRules } from '../../validaciones'
export default {
  name: 'FormProyecto',
  components: {
    
  },
  data () {
    return {
      valid: false,
      proyectoNombre:'',
      campoRequeridoRules:campoRequeridoRules,
      fileLink: '',
      fileLinkRules: campoRequeridoRules,
      creadores: '',
      creadoresRules:campoRequeridoRules,
      descripcion: '', 
      descripcionRules: descripcionRules,
      colaboracion: ['Sí', 'No'],
      tecnos:['JavaScript','Vue.js','CSS','HTML'],
      imagen: null,
      tecnologias: ''
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
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

<style scoped>
h1 {
  color: #7e64ab;
  font-weight:300;
  font-size:32px;
}
.main{
  margin: 4em;
  font-size: 10px;
  padding: 2em; 
}
.form__buttons-container{
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
.buttons-container__buttons{
  padding: 0 2px 0 2px;
  margin:0;
  font-size: 12px;
}
.buttons-container__buttons--white {
  color: #ffffff;
}
.application--light .input-group .input-group__details:application--light{
 color: #7E57C2;
}
.text-field  input, .text-field label{
    color: #7E57C2 !important;
}

</style>