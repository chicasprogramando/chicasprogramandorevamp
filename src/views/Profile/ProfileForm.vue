<template>
  <div>
    <v-form class="form" ref="form" @submit.prevent="onUpdateProfile">
      <v-container grid-list-md class="profile_form_container">
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field
              label="Nombre"
              color="purple"
              v-model="name"
            ></v-text-field>
          </v-flex>
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
              label="Twitter link"
              color="purple"
              v-model="twitter"
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
import { omit, merge } from "ramda";
import { mapFields } from "vuex-map-fields";
import { formatListForApi, formatListForAutoSelect } from "../../utils/helpers";
export default {
  name: "ProfileForm",
  data() {
    return {
      generalError: null
    };
  },
  methods: {
    onUpdateProfile() {
      const profile = omit(
        ["skill", "specialty", "id", "UserId", "createdAt", "updatedAt"],
        this.$store.state.profile.profile
      );

      const formData = merge(profile, {
        skills: this.$store.state.profile.profile.skill,
        specialties: this.$store.state.profile.profile.specialty
      });
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
    ...mapFields([
      "profile.name",
      "profile.image_path",
      "profile.twitter",
      "profile.linkedin",
      "profile.github"
    ]),
    selectedSpecialties: {
      get() {
        const formatedSpecialties = formatListForAutoSelect(
          this.$store.state.profile.profile.specialty
        );
        return formatedSpecialties;
      },
      set(value) {
        const formatedSpecialties = formatListForApi(value);
        this.$store.commit("SET_PROFILE_INFO", {
          specialty: formatedSpecialties
        });
      }
    },
    selectedSkills: {
      get() {
        const formatedSkills = formatListForAutoSelect(
          this.$store.state.profile.profile.skill
        );
        return formatedSkills;
      },
      set(value) {
        const formatedSkills = formatListForApi(value);
        this.$store.commit("SET_PROFILE_INFO", { skill: formatedSkills });
      }
    },
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
    },
    user() {
      return this.$store.getters["getUserData"];
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
