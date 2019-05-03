<template>
  <v-container fluid grid-list-md class="container-projects">
    <v-layout class="container-projects--wrapper">
      <v-flex xs12 md3>
        <SearchFormContainer></SearchFormContainer>
      </v-flex>
      <v-flex xs12 md9 class="projects-right">
        <v-layout v-if="!open" row wrap class="projects-right__cards">
          <v-flex v-for="(card, i) in projects" :key="i" xs12 sm6 md4>
            <CardCover :cardInfo="card" @cardClick="openProject(card)"></CardCover>
          </v-flex>
        </v-layout>
        <v-layout v-if="open" row wrap class="projects-right__cards">
          <v-slide-x-transition mode="out-in">
            <div class="projects-right__cards__modal">
              <CardInfo :cardInfo="cardInfo" @closeModal="closeProject()"></CardInfo>
            </div>
          </v-slide-x-transition>
        </v-layout>
        <v-layout v-if="!cardInfo" row>
          <v-flex>
            <Pagination></Pagination>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn color="deep-purple lighten-2" dark fab fixed bottom right slot="activator">
        <v-icon>add</v-icon>
      </v-btn>
      <ProjectForm @onCloseModal="onCloseModal()"/>
    </v-dialog>
  </v-container>
</template>

<script>
import SearchFormContainer from "@/pages/Projects/SearchFormContainer";
import CardCover from "@/pages/Projects/CardCover";
import Pagination from "@/pages/Projects/Pagination";
import CardInfo from "@/pages/Projects/CardInfo";
import ProjectForm from "@/pages/Projects/ProjectForm";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "ProjectsContainer",
  components: {
    SearchFormContainer,
    CardCover,
    Pagination,
    CardInfo,
    ProjectForm
  },
  data() {
    return {
      cardInfo: null,
      dialog: false,
      open: false
    };
  },
  computed: {
    ...mapState({
      projects: state => state.projects.items
    }),
    ...mapGetters("projects", {
      projects: "getAllProjects"
    })
  },
  methods: {
    ...mapActions({
      fetchProjects: "projects/fetchProjects"
    }),
    openProject(card) {
      this.cardInfo = card;
      this.open = !this.open;
    },
    closeProject() {
      this.cardInfo = null;
      this.open = !this.open;
    },
    onCloseModal() {
      this.dialog = false;
    }
  },
  created() {
    this.loading = true;
    this.fetchProjects().then(() => (this.loading = false));
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container-projects {
  margin: 0;
  padding: 0;
  height: 100%;
}
.container-projects--wrapper {
  height: 100%;
}
.projects-right {
  position: relative;
  height: 100%;
}
.projects-right__cards__modal {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 20;
  height: 100%;
}
</style>

