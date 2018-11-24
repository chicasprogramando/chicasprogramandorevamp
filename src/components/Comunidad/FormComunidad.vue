<template>
  <v-card>
    <v-form class="form" ref="form" v-model="valid">
      <v-card-title>
        <h3>Crear nuevo perfil</h3>
      </v-card-title>
        <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field
                      v-model="nombre"
                      :rules="campoRequeridoRules"
                      label="Nombre"
                      color='purple'
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="tituto"
                      :rules="campoRequeridoRules"
                      label="Título"
                      color='purple'
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field 
                      class="text-field"
                      outline
                      v-model='imagen'
                      label="Imagen"
                      color='purple'
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
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
                  </v-flex>        
                  <v-flex xs12>
                    <v-text-field
                      v-model="apellido"
                      :rules="campoRequeridoRules"
                      label="Apellido"
                      color='purple'
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-select 
                      class="text-field"
                      color="purple"
                      label="Buscando proyectos?"
                      :items="buscandoProyectos"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      color='purple'
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="github"
                      :rules="campoRequeridoRules"
                      label="GitHub"
                      color='purple'
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="linkedIn"
                      :rules="campoRequeridoRules"
                      label="LinkedIn"
                      color='purple'
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="twitter"
                      :rules="campoRequeridoRules"
                      label="Twitter"
                      color='purple'
                    ></v-text-field>
                  </v-flex>
              </v-layout>
            </v-container>
        </v-card-text>
        <v-flex class="buttons">
          <v-btn round color='deep-purple lighten-1' class='buttons__single-btn buttons__single-btn--white'  @click="submit" :disabled="!valid">Crear</v-btn>
          <v-btn dark round color='deep-purple lighten-1' class='buttons__single-btn' @click="clear">Limpiar</v-btn>
          <v-btn dark round color='deep-purple lighten-1' class='buttons__single-btn' @click="handleClickModal()">Cancelar</v-btn>
      </v-flex> 
    </v-form>  
  </v-card>
</template>

<script>
import { emailRules, campoRequeridoRules } from '../../validaciones'
export default {
  name: 'FormComunidad',
  data() {
    return {
      valid: false,
      buscandoProyectos: ['Sí', 'No'],
      emailRules: emailRules,
      campoRequeridoRules: campoRequeridoRules
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          proyectoNombre: this.proyectoNombre,
          creadores: this.creadores,
          tecnologias: this.tecnologias,
          imagen: this.imagen,
          descripcion: this.descripcion,
          fileLink: this.fileLink,
          colaboracion: this.colaboracion
        })
      }
    },
    clear() {
      this.$refs.form.reset()
    },
    handleClickModal() {
      this.$emit('onCloseModal')
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

.buttons {
  display: flex;
  justify-content: center;
  padding-bottom: 3em;
  margin: 0;
}
.buttons__single-btn {
  padding: 0 2px 0 2px;
  margin: 0em 1em 0 1em;
  background: #7e64ab;
  color: #ffffff;
  border-radius: 18px;
  font-size: 12px;
}
.input-group {
  color: #7e64ab !important;
}
.input-group__details::before {
  background-color: #7e64ab !important;
}
</style>