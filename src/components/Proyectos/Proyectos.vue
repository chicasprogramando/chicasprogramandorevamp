<template>
  <v-container fluid>
      <v-layout column align-center>
        <h1>Proyectos</h1>
      </v-layout>
      <v-layout column-align-center>
        <v-flex xs12 sm4 offset-sm4>
          <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="fileLink"
                :rules="fileLinkRules"
                label="Link del proyecto"
                required
              ></v-text-field>
              <v-text-field
                v-model="nombre"
                :rules="nombreRules"
                :counter="40"
                label="Nombre"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="creadores"
                :rules="creadoresRules"
                label="Creador o creadores"
                required
              ></v-text-field>
              <v-text-field
                default
                v-model="descripcion"
                :rules="descripcionRules"
                textarea
                label="Descripción del proyecto"
                counter=500
                required
              ></v-text-field>
              <v-text-field
                v-model="tags"
                :rules="tagsRules"
                label="Tags"
                required
              ></v-text-field>

              <v-btn id="enviar" @click="submit" :disabled="!valid">Enviar</v-btn>
              <v-btn @click="clear">Limpiar</v-btn>

            </v-form>
          </v-flex>
        </v-layout>
  </v-container>
</template>

<script>
//import axios from 'axios' //poner axios e importarlo

export default {
  name: 'Proyectos',
  data () {
    return {
      valid: false,
      nombre: '',
      nombreRules: [
        v => !!v || 'Nombre requerido',
        v => v.length <= 40 || 'El nombre debe tener menos de 40 caracteres'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail requerido',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      fileLink: '',
      fileLinkRules: [
        v => !!v || 'Link de proyecto requerido',
        //Falta escribir el formato de texto válido
      ],
      creadores: '',
      creadoresRules: [
        v => !!v || 'Nombre del creador o creadores requerido/s',
        //Falta escribir el formato de texto válido
      ],
      descripcion: '', 
      descripcionRules: [
        v => v.length <= 500 || 'El texto puede tener hasta 500 caracteres'
      ]
    }
  },
  methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            nombre: this.nombre,
            email: this.email,
            fileLink: this.fileLink,
            creadores: this.creadores,
            descripcion: this.descripcion,
            tags: this.tags,  
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
h1, #enviar {
  color: #7e64ab;
}
</style>