<template>
  <v-card>
    <v-form class="form" ref="form" v-model="valid" @submit.prevent="onCreateProfile">
      <v-card-title>
        <h3>Crear nuevo perfil</h3>
      </v-card-title>
        <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field
                      v-model="name"
                      :rules="campoRequeridoRules"
                      label="Nombre Completo"
                      color='purple'
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="title"
                      :rules="campoRequeridoRules"
                      placeholder="Ej. Front End Dev"
                      label="Título"
                      color='purple'
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field 
                      class="text-field"
                      outline
                      v-model='image'
                      label="Imagen"
                      color='purple'
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <img :src="image" height="150px">
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field 
                      default
                      class="text-field"
                      color='purple'
                      v-model="about_me"
                      label="Contanos algo sobre vos"
                      counter=500
                      rows="3"
                      textarea
                      required
                    ></v-text-field>  
                  </v-flex>        
                  <v-flex xs12>
                    <v-select 
                      class="text-field"
                      color="purple"
                      v-model="role_name"
                      label="Tu rol en esta comunidad"
                      :items="role_name"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-select 
                      class="text-field"
                      color="purple"
                      v-model="search_project"
                      label="Buscando proyectos?"
                      :items="items_search_project"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-select 
                      class="text-field"
                      color="purple"
                      v-model="senority"
                      label="Seniority"
                      :items="senority"
                      required
                    ></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="skills"
                      label="Qué tecnologías manejas?"
                      color='purple'
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="github"
                      label="GitHub"
                      color='purple'
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="linkedin"
                      label="LinkedIn"
                      color='purple'
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="twitter"
                      label="Twitter"
                      color='purple'
                    ></v-text-field>
                  </v-flex>
              </v-layout>
            </v-container>
        </v-card-text>
        <v-flex class="buttons">
          <v-btn round color='deep-purple lighten-1' class='buttons__single-btn buttons__single-btn--white'  type="submit" :disabled="!valid">Crear</v-btn>
          <v-btn dark round color='deep-purple lighten-1' class='buttons__single-btn' @click="clear">Limpiar</v-btn>
          <v-btn dark round color='deep-purple lighten-1' class='buttons__single-btn' @click="handleClickModal()">Cancelar</v-btn>
      </v-flex> 
    </v-form>  
  </v-card>
</template>

<script>
import { campoRequeridoRules } from '../../validaciones'

export default {
  name: 'FormComunidad',
  data() {
    return {
      valid: false,
      campoRequeridoRules: campoRequeridoRules,
      name: '',
      title: '',
      image: '',
      about_me: '',
      search_project: '',
      role_name: ['Core Team', 'Member', 'Mentor'],
      items_search_project: ['Sí', 'No'],
      senority: ['Trainee', 'Jr', 'Ssr', 'Sr'],
      skills: '',
      linkedin: '',
      github: '',
      twitter: ''
    }
  },
  methods: {
    onCreateProfile() {
      const formData = {
        id: 1,
        name: this.name,
        title: this.title,
        image: this.image,
        role_name: this.role_name,
        search_project: this.search_project,
        senority: this.senority,
        skills: this.skills,
        about_me: this.about_me,
        linkedin: this.linkedin,
        github: this.github,
        twitter: this.twitter
      }
      this.$store.dispatch('profiles/createProfile', formData)
      this.$emit('onCloseModal')
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