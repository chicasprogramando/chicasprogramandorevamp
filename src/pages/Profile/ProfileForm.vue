<template>
  <v-form class="form" ref="form" v-model="valid" @submit.prevent="onUpdateProfile">
    <v-container grid-list-md class="profile_form_container">
      <v-layout wrap>
        <v-flex xs12>
          <v-text-field
            v-model="name"
            :rules="campoRequeridoRules"
            label="Nombre Completo"
            color="purple"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-select
            v-model="title"
            :rules="campoRequeridoRules"
            label="Especialidad"
            color="purple"
            :items="title_items"
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
            :items="senority_items"
            required
          ></v-select>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="skills" label="Qué tecnologías manejas?" color="purple"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="about_me" label="Contanos algo sobre vos" color="purple"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="github" label="GitHub" color="purple"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="linkedin" label="LinkedIn" color="purple"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="twitter" label="Twitter" color="purple"></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-flex class="buttons">
      <v-btn
        dark
        round
        color="deep-purple lighten-1"
        class="buttons__single-btn"
        @click="clear"
      >Cancelar</v-btn>
      <v-btn
        round
        color="deep-purple lighten-1"
        class="buttons__single-btn buttons__single-btn--white"
        type="submit"
        :disabled="!valid"
      >Actualizar</v-btn>
    </v-flex>
  </v-form>
</template>

<script>
import { campoRequeridoRules } from "../../utils/validaciones.js";

export default {
  name: "ProfileForm",
  data() {
    return {
      valid: false,
      campoRequeridoRules: campoRequeridoRules,
      name: "",
      title: "",
      about_me: "",
      title_items: [
        "Front End Dev",
        "Back End Dev",
        "Full Stack Dev",
        "QA",
        "Seguridad Informática",
        "UX/UI"
      ],
      search_project: "",
      items_search_project: ["Sí", "No"],
      senority: "",
      senority_items: ["Trainee", "Jr", "Ssr", "Sr"],
      skills: "",
      linkedin: "",
      github: "",
      twitter: ""
    };
  },
  methods: {
    onUpdateProfile() {
      const formData = {
        name: this.name,
        title: this.title,
        about_me: this.about_me,
        search_project: this.search_project,
        senority: this.senority,
        skills: this.skills,
        linkedin: this.linkedin,
        github: this.github,
        twitter: this.twitter
      };
      this.$store.dispatch("profiles/updateUserProfile", formData);
      this.$refs.form.reset();
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
h3 {
  color: #7e64ab;
  text-align: center;
  font-size: 30px;
}
.profile_form_container {
  max-width: 95%;
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