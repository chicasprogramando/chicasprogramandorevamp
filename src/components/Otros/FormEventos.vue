<template>
  <v-card>
    <v-form ref="form" v-model="valid">
      <v-card-title>
        <h3>Crear nuevo evento</h3>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
            <v-text-field color="deep-purple lighten-1"
              v-model="eventName"
              :rules="campoRequeridoRules"
              label="Nombre del evento"
              required
            ></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-text-field color="deep-purple lighten-1"
              v-model="date"
              :rules="campoRequeridoRules"
              label="Fecha"
              required
            ></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-text-field color="deep-purple lighten-1" 
              v-model="place"
              :rules="campoRequeridoRules"
              label="Lugar"
              required
            ></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-text-field color="deep-purple lighten-1"
                v-model="fileLink"
                :rules="campoRequeridoRules"
                label="Link del proyecto"
                required
              ></v-text-field>
            </v-flex>
            </v-layout>
            </v-container>
        </v-card-text>
            <v-flex class="form__buttons pb-4">
                <v-btn round dark class="form__buttons--styles" color="deep-purple lighten-1" @click="submit">Crear</v-btn>
                <v-btn round dark color="deep-purple lighten-1" class="form__buttons--styles" @click="clear">Limpiar</v-btn>
                <v-btn round dark color="deep-purple lighten-1" class="form__buttons--styles" @click="handleClickModal()">Cancelar</v-btn>
            </v-flex>
    </v-form>
  </v-card>
</template>

<script>
import { campoRequeridoRules } from '../../validaciones.js'
export default {
  name: 'FormEventos',
  components: {
    
  },
  data () {
    return {
      valid: false,
      campoRequeridoRules:campoRequeridoRules,
      eventName: "",
      fileLink: "",
      date: "",
      place: ""
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        axios.post('/api/submit', {
        proyectoNombre: this.proyectoNombre,
        creadores: this.creadores,
        tecnologias: this.tecnologias,
        imagen:this.imagen,
        descripcion: this.descripcion,
        fileLink: this.fileLink,
        colaboracion: this.colaboracion,  
        })
      }
    },
    clear () {
    this.$refs.form.reset()
    },
    handleClickModal() {
      this.$emit("onCloseModal");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  color: #7e64ab;
  text-align: center;
  font-size: 30px;
}
.formEventos{
  opacity:0.8;
  width:50%;
  padding: 10em 13% 1.5em 13%;
}
h2{
  color:#7e64ab;
  font-weight:300;
  font-size:2em;
}
.form__buttons{
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.text-field  input, .text-field label{
    color: #7E57C2 !important;
}
.form__buttons--styles{
  padding: 0 2px 0 2px;
  margin: 0em 1em 0 1em;
  font-size: 12px;
}

</style>