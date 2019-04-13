<template>
  <v-container fluid grid-list-md class="container-proyectos">
    <v-layout class="container-proyectos--wrapper">
      <v-flex xs12 md3>
        <CardForm></CardForm>
      </v-flex>
      <v-flex xs12 md9 class="proyectos-right">
        <v-layout v-if="!open" row wrap class="proyectos-right__cards">
          <v-flex v-for="(card, i) in projects" :key="i" xs12 sm6 md4>
            <CardExterna :cardInfo="card" @cardClick="openProject(card)"></CardExterna>
          </v-flex>
        </v-layout>
        <v-layout v-if="open" row wrap class="proyectos-right__cards">
          <v-slide-x-transition mode="out-in">
            <div class="proyectos-right__cards__modal">
              <CardInterna :cardInfo="cardInfo" @closeModal="closeProject()"></CardInterna>
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
      <FormProyecto @onCloseModal="onCloseModal()"/>
    </v-dialog>
  </v-container>
</template>

<script>
import CardForm from "@/components/Proyectos/CardForm";
import CardExterna from "@/components/Proyectos/CardExterna";
import Pagination from "@/components/Proyectos/Pagination";
import CardInterna from "@/components/Proyectos/CardInterna";
import FormProyecto from "@/components/Otros/FormProyecto";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Proyectos",
  components: {
    CardForm,
    CardExterna,
    Pagination,
    CardInterna,
    FormProyecto
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
      this.cardInfo = card
      this.open = !this.open
    },
    closeProject() {
      this.cardInfo = null
      this.open = !this.open
    },
    onCloseModal() {
      this.dialog = false
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
.container-proyectos {
  margin: 0;
  padding: 0;
  height: 100%;
}
.container-proyectos--wrapper {
  height: 100%;
}
.proyectos-right {
  position: relative;
  height: 100%;
}
.proyectos-right__cards__modal {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 20;
  height: 100%;
}
</style>

