<template>
  <div class="community-container">
    <div class="community-header-container">
      <h2>Nuestra comunidad</h2>
      <div>
        <v-form class="form" ref="form" @submit.prevent="onSearch">
          <v-row>
            <v-col cols="6" sm="4" md="3">
              <v-text-field
                name="name"
                label="Buscar por nombre"
                id="name"
                color="purple"
                v-model="searchQuery"
                class="community-name-input"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="4" md="3">
              <v-autocomplete
                v-model="selectedSpecialties"
                :items="specialties"
                label="Buscar por especialidades"
                return-object
                chips
                deletable-chips
                multiple
                color="purple"
                :loading="!specialties.length ? true : false"
              ></v-autocomplete>
            </v-col>
            <v-col cols="6" sm="4" md="3">
              <v-autocomplete
                v-model="selectedSkills"
                :items="skills"
                label="Buscar por skills"
                return-object
                chips
                deletable-chips
                multiple
                color="purple"
                :loading="!skills.length ? true : false"
              ></v-autocomplete>
            </v-col>
            <v-col cols="6" sm="4" md="3">
              <v-btn
                rounded
                color="deep-purple lighten-1"
                class="white--text"
                type="submit"
                :disabled="!specialties.length && !skills.length"
                >Filtrar</v-btn
              >
              <v-btn
                rounded
                class="ml-2 white--text"
                color="deep-purple lighten-1"
                @click="clearSearch"
                :disabled="
                  !selectedSkills.length && !selectedSpecialties.length
                "
              >
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </div>
    <div class="community-main-container container-grid">
      <v-container fluid v-if="!this.$store.state.profile.isLoadingProfileList">
        <v-row>
          <v-col
            cols="6"
            sm="4"
            md="3"
            v-for="profile in profiles"
            :key="profile.id"
          >
            <ProfileCardCover :profile="profile" />
          </v-col>
        </v-row>
      </v-container>
      <v-container
        fluid
        class="loader-component"
        v-if="this.$store.state.profile.isLoadingProfileList"
      >
        <Loader />
      </v-container>
    </div>
  </div>
</template>

<script>
import ProfileCardCover from "./ProfileCardCover";
import Loader from "../../components/Loader";
import { checkCommunityQueries } from "../../utils/validaciones";
import { formatListForAutoSelect } from "../../utils/helpers";

export default {
  name: "Community",
  components: {
    ProfileCardCover,
    Loader
  },
  data: () => ({
    searchQuery: "",
    selectedSpecialties: [],
    selectedSkills: []
  }),
  mounted() {
    const params = this.$router.history.current.query;

    this.$store.dispatch("fetchAllProfiles", params);
  },
  computed: {
    profiles() {
      return this.$store.getters["getAllProfiles"];
    },
    skills() {
      const skills = this.$store.getters["getSkillsList"];
      const formatedSkills = formatListForAutoSelect(skills);
      return formatedSkills;
    },
    specialties() {
      const specialties = this.$store.getters["getSpecialtiesList"];
      const formatedSpecialties = formatListForAutoSelect(specialties);
      return formatedSpecialties;
    }
  },
  methods: {
    onSearch() {
      const specialties = this.selectedSpecialties
        .map(specialty => specialty.text)
        .join(",");
      const skills = this.selectedSkills.map(skill => skill.text).join(",");
      this.$router.push({
        path: "/community",
        query: checkCommunityQueries(skills, specialties)
      });
    },
    clearSearch() {
      this.$refs.form.reset();
      this.$router.push({
        path: "/community",
        query: {}
      });
    }
  },
  watch: {
    $route(to) {
      const params = to.query;
      this.$store.dispatch("fetchAllProfiles", params);
    },
    skills() {
      const params = this.$router.history.current.query;
      if (params.skills) {
        if (this.skills) {
          this.selectedSkills = params.skills
            ? params.skills
                .split(",")
                .map(s => this.skills.find(o => o.text === s))
            : [];
        }
      }
    },
    specialties() {
      const params = this.$router.history.current.query;
      if (params.specialties) {
        if (this.specialties.length) {
          this.selectedSpecialties = params.specialties
            ? params.specialties
                .split(",")
                .map(s => this.specialties.find(o => o.text === s))
            : [];
        }
      }
    }
  }
};
</script>

<style scoped>
.community-container {
  height: 100%;
}
.community-header-container {
  padding: 20px;
}
.community-main-container {
  background-color: #ffffff;
  padding: 10px;
  height: 100%;
}
.community-name-input {
  margin-top: 5px;
}
.loader-component {
  justify-content: center;
  align-items: center;
}
</style>
