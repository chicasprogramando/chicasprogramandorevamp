<template>
  <div>
    <v-container grid-list-md class="profile_form_container">
      <v-form class="form" ref="form" @submit.prevent="onUpdateUserName">
        <v-layout class="align-center">
          <v-flex md9>
            <v-text-field
              label="Nombre de usuario"
              v-model="user_name"
              color="purple"
            ></v-text-field>
          </v-flex>
          <v-flex md3>
            <v-btn
              rounded
              color="deep-purple lighten-1"
              class="buttons__single-btn buttons__single-btn--white"
              type="submit"
              dark
              >Guardar</v-btn
            >
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
    <v-form class="form" ref="form" @submit.prevent="onUpdateProfile">
      <v-container grid-list-md class="profile_form_container">
        <v-layout wrap>
          <v-flex xs12>
            <v-autocomplete
              v-model="stateProfile.specialty"
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
              v-model="stateProfile.skill"
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
              v-model="stateProfile.image_path"
              label="Url de imagen para el perfil"
              color="purple"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              v-model="stateProfile.github"
              label="GitHub link"
              color="purple"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              v-model="stateProfile.linkedin"
              label="LinkedIn link"
              color="purple"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              v-model="stateProfile.twitter"
              label="Twitter link"
              color="purple"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 v-if="!user.accepted_terms">
            <p>
              Para poder completar tu perfil debes aceptar nuestro
              <router-link to="/terms">codigo de conducta</router-link> primero.
            </p>
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
          :disabled="!user.accepted_terms"
          v-if="!user.profile"
          >Finalizar Perfil</v-btn
        >
        <v-btn
          rounded
          color="deep-purple lighten-1"
          class="buttons__single-btn buttons__single-btn--white"
          type="submit"
          v-if="user.profile"
          >Actualizar</v-btn
        >
      </v-flex>
    </v-form>
  </div>
</template>

<script>
import { formatListForApi } from "../../utils/helpers";
export default {
  name: "ProfileForm",
  props: {
    user: {
      type: Object
    },
    profile: {
      type: Object
    }
  },
  data() {
    return {
      stateProfile: this.profile,
      user_name: this.user.user_name,
      generalError: null
    };
  },
  methods: {
    onUpdateUserName() {
      this.$store.dispatch("updateUserName", { user_name: this.user_name });
    },
    onUpdateProfile() {

      const formData = {
        image_path: this.stateProfile.image_path,
        twitter: this.stateProfile.twitter,
        linkedin: this.stateProfile.linkedin,
        github: this.stateProfile.github,
        specialty: formatListForApi(this.stateProfile.specialty),
        skill: formatListForApi(this.stateProfile.skill)
      };

      if (this.user.profile) {
        this.$store.dispatch("updateProfile", formData);
      } else {
        this.$store.dispatch("createProfile", formData);
      }
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
  },
  watch: {
    user: function() {
      this.user_name = this.user.user_name;
    },
    profile: function() {
      this.stateProfile = this.profile;
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
