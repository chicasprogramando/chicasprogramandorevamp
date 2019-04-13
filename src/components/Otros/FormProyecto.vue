<template>
  <v-card>
    <v-form class="main__form" ref="form" v-model="valid">
      <v-card-title>
        <h1 class="main__h1">Crear un nuevo proyecto</h1>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                class="form__text-field"
                color="deep-purple lighten-1"
                v-model="project_name"
                :rules="campoRequeridoRules"
                label="Nombre del proyecto"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                class="form__text-field"
                color="deep-purple lighten-1"
                v-model="creator"
                :rules="campoRequeridoRules"
                label="Nombre del creador o grupo"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                class="form__text-field"
                color="deep-purple lighten-1"
                v-model="technologies"
                :rules="campoRequeridoRules"
                label="Tecnologías"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                class="form__text-field"
                outline
                v-model="image_url"
                label="Imagen"
                color="deep-purple lighten-1"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                class="form__text-field"
                default
                color="deep-purple lighten-1"
                v-model="description"
                :rules="descripcionRules"
                textarea
                label="Descripción del proyecto"
                counter="500"
                rows="2"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                class="form__text-field"
                color="deep-purple lighten-1"
                v-model="url"
                :rules="fileLinkRules"
                label="Link del proyecto"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-select
                class="form__text-field"
                color="deep-purple lighten-1"
                label="Abierto a colaboración?"
                v-model="open"
                :items="colaboracion"
                required
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-flex class="form__buttons-container pb-4">
        <v-btn
          dark
          round
          color="deep-purple lighten-1"
          class="buttons-container__singlebtn"
          @click="handleClickModal()"
        >Cancelar</v-btn>
        <v-btn
          dark
          round
          color="deep-purple lighten-1"
          class="buttons-container__singlebtn"
          @click="clear"
        >Limpiar</v-btn>
        <v-btn
          round
          class="buttons-container__singlebtn buttons-container__singlebtn--white"
          color="deep-purple lighten-1"
          @click="onCreateProject()"
          :disabled="!valid"
        >Crear</v-btn>
      </v-flex>
    </v-form>
  </v-card>
</template>

<script>
import {
  nombreRules,
  emailRules,
  campoRequeridoRules,
  descripcionRules
} from "../../validaciones";

export default {
  name: "FormProyecto",
  components: {},
  data() {
    return {
      valid: false,
      project_name: "",
      creator: "",
      technologies: "",
      image_url: "",
      description: "",
      url: "",
      open: "",
      campoRequeridoRules: campoRequeridoRules,
      fileLinkRules: campoRequeridoRules,
      creadoresRules: campoRequeridoRules,
      descripcionRules: descripcionRules,
      colaboracion: ["Si", "No"]
    };
  },
  methods: {
    onCreateProject() {
      if (!this.valid) {
        return;
      }

      // TODO: this is not the best way to do this, please refactor later
      const openProject = { No: false, Si: true };

      const formData = {
        project_name: this.project_name,
        creator: this.creator,
        technologies: this.technologies,
        image_url: this.image_url,
        description: this.description,
        url: this.image_url,
        open: openProject[this.open]
      };

      this.$store.dispatch("projects/createProject", formData);
      this.$emit("onCloseModal");
    },
    clear() {
      this.$refs.form.reset();
    },
    handleClickModal() {
      this.$emit("onCloseModal");
    }
  }
};
</script>

<style scoped>
h1 {
  color: #7e64ab;
  font-weight: 300;
  font-size: 32px;
}
.main {
  margin: 4em;
  font-size: 10px;
  padding: 2em;
}
.form__buttons-container {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.buttons-container__singlebtn {
  padding: 0 2px 0 2px;
  margin: 0em 1em 0 1em;
  font-size: 12px;
}
.buttons-container__singlebtn--white {
  color: #ffffff;
}
.application--light .input-group .input-group__details:application--light {
  color: #7e57c2;
}
.text-field input,
.text-field label {
  color: #7e57c2 !important;
}
</style>