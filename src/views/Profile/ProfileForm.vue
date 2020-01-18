<template>
  <v-form
    class="form"
    ref="form"
    v-model="valid"
    @submit.prevent="onUpdateProfile"
  >
    <v-container grid-list-md class="profile_form_container">
      <v-layout wrap>
        <v-flex xs12>
          <v-autocomplete
            v-model="selectedSpecialties"
            :items="specialties"
            label="Especialidades"
            placeholder="Buscá tus especialidades"
            return-object
            chips
            deletable-chips
            multiple
            color="purple"
          ></v-autocomplete>
        </v-flex>
        <v-flex xs12>
          <v-autocomplete
            v-model="selectedSkills"
            :items="skills"
            label="Qué tecnologías manejas?"
            placeholder="Buscá tus skills"
            return-object
            chips
            deletable-chips
            multiple
            color="purple"
          ></v-autocomplete>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            v-model="image_path"
            label="Url de imagen para el perfil"
            color="purple"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            v-model="github"
            label="GitHub link"
            color="purple"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            v-model="linkedin"
            label="LinkedIn link"
            color="purple"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            v-model="twitter"
            label="Twitter link"
            color="purple"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
    <v-flex class="buttons">
      <v-btn
        dark
        rounded
        color="deep-purple lighten-1"
        class="buttons__single-btn"
        @click="clear"
        >Cancelar</v-btn
      >
      <v-btn
        rounded
        color="deep-purple lighten-1"
        class="buttons__single-btn buttons__single-btn--white"
        type="submit"
        :disabled="!valid"
        v-if="!user.profile"
        >Finalizar Perfil</v-btn
      >
      <v-btn
        rounded
        color="deep-purple lighten-1"
        class="buttons__single-btn buttons__single-btn--white"
        type="submit"
        :disabled="!valid"
        v-if="user.profile"
        >Actualizar</v-btn
      >
    </v-flex>
  </v-form>
</template>

<script>
import { campoRequeridoRules } from "../../utils/validaciones.js";

export default {
  name: "ProfileForm",
  props: {
    user: {
      type: Object
    }
  },
  data() {
    return {
      valid: false,
      campoRequeridoRules: campoRequeridoRules,
      image_path: null,
      linkedin: null,
      github: null,
      twitter: null,
      selectedSpecialties: [],
      selectedSkills: []
    };
  },
  methods: {
    onUpdateProfile() {
      const specialties = this.selectedSpecialties.map(specialty => {
        return { id: specialty.value, description: specialty.text };
      });
      const skills = this.selectedSkills.map(skill => {
        return { id: skill.value, description: skill.text };
      });
      const formData = {
        image_path: this.image_path,
        linkedin: this.linkedin,
        github: this.github,
        twitter: this.twitter,
        specialties: specialties,
        skills: skills
      };

      if (this.user.profile) {
        this.$store.dispatch("updateProfile", formData);
      } else {
        this.$store.dispatch("createProfile", formData);
      }
      this.$refs.form.reset();
    },
    clear() {
      this.$refs.form.reset();
    }
  },
  computed: {
    skills() {
      const skills = this.$store.getters["getSkillsList"];
      const formatedSkills = skills.map(skill => {
        return { text: skill.description, value: skill.id };
      });
      return formatedSkills;
    },
    specialties() {
      const specialties = this.$store.getters["getSpecialtiesList"];
      const formatedSpecialties = specialties.map(specialty => {
        return { text: specialty.description, value: specialty.id };
      });
      return formatedSpecialties;
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
