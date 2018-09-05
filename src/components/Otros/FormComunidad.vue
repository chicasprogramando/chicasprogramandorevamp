<template>
  <v-container fluid class="main">
  <v-layout align-start justify-center row fill-height>
    <v-flex xs12 sm6>
      <h3>Crear nuevo perfil</h3>
      <v-form class="form" ref="form" v-model="valid">
        <div>
          <v-text-field
            v-model="nombre"
            :rules="campoRequeridoRules"
            label="Nombre"
            color='purple'
            required
          ></v-text-field>
          <v-text-field
            v-model="tituto"
            :rules="campoRequeridoRules"
            label="Título"
            color='purple'
            required
          ></v-text-field>
          <v-text-field 
            class="text-field"
            outline
            v-model='imagen'
            label="Imagen"
            color='purple'
          ></v-text-field>
          <v-text-field 
            default
            class="text-field"
            color='purple'
            v-model="descripcion"
            :rules=descripcionRules
            label="Descripción del proyecto"
            counter=500
            rows="3"
            textarea
            required
          ></v-text-field>          
        </div>
        <div>
          <v-text-field
            v-model="apellido"
            :rules="campoRequeridoRules"
            label="Apellido"
            color='purple'
            required
          ></v-text-field>
          <v-select 
            class="text-field"
            color="purple"
            label="Buscando proyectos?"
            :items="buscandoProyectos"
            required
          ></v-select>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            color='purple'
            required
          ></v-text-field>
          <v-text-field
            v-model="github"
            :rules="campoRequeridoRules"
            label="GitHub"
            color='purple'
            required
          ></v-text-field>
          <v-text-field
            v-model="linkedIn"
            :rules="campoRequeridoRules"
            label="LinkedIn"
            color='purple'
            required
          ></v-text-field>
        </div>
      </v-form>
      <v-flex class="form__buttons-container">
        <v-btn round color='deep-purple lighten-1' class='buttons-container__buttons buttons-container__buttons--white'  @click="submit" :disabled="!valid">Crear</v-btn>
        <v-btn dark round color='deep-purple lighten-1' class='buttons-container__buttons' @click="clear">Limpiar</v-btn>
        <v-btn dark round color='deep-purple lighten-1' class='buttons-container__buttons'>Cancelar</v-btn>
      </v-flex>
    </v-flex>    
  </v-layout>
  </v-container>
</template>

<script>
import { emailRules, campoRequeridoRules } from '../../validaciones'
export default {
  name: 'FormComunidad',
  data () {
    return {
      valid: false,
      buscandoProyectos: ['Sí','No'], 
      emailRules:emailRules,
      campoRequeridoRules:campoRequeridoRules,     
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
h3 {
  color: #7e64ab;
  text-align: center;
  font-size: 30px;
}
.form-div{
  padding:2em;
}
.form{
  display: flex;
  justify-content: space-around;
}
.form div{
  width: 300px;
}
.form__buttons-container{
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.buttons-container__buttons{
  padding: 0 2px 0 2px;
  margin:1em 1em 0 1em;
  background: #7e64ab;
  color: #ffffff;
  border-radius: 18px;
  font-size: 12px;
}
</style>