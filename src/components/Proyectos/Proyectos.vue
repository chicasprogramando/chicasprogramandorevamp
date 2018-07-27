<template>
  <v-container fluid grid-list-md class="container">
      <v-layout>
        <v-flex d-flex xs12 sm12 md2 class="form-container">
          <CardForm></CardForm>
        </v-flex>
        <v-flex>
          <v-layout wrap>
            <v-flex v-for="n in 6" :key="n" xs12 sm6 md4>
              <CardExterna></CardExterna>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <Pagination></Pagination>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      
     <v-layout>
      <v-flex sm4 class="mainForm">
        <h1>Crear un nuevo proyecto</h1>  
        <v-form class='form' ref="form" v-model="valid">
            <v-text-field 
              class="text-field"
              color='purple'
              v-model="proyectoNombre"
              :rules="campoRequeridoRules"
              label="Nombre del proyecto"
              required
            ></v-text-field>
            <v-text-field 
              class="text-field"
              color='purple'
              v-model="creadores"
              :rules="campoRequeridoRules"
              label="Nombre del creador o grupo"
              required
            ></v-text-field>
            <v-text-field 
              class="text-field"
              color='purple'
              v-model="tecnologias"
              :rules="campoRequeridoRules"
              label="Tecnologías"
              required
            ></v-text-field>
            <v-text-field 
              class="text-field"
              outline
              v-model='imagen'
              label="Imagen"
              color='purple'
            ></v-text-field>
            <v-text-field 
              class="text-field"
              default
              color='purple'
              v-model="descripcion"
              :rules=descripcionRules
              textarea
              label="Descripción del proyecto"
              counter=500
              rows="2"
              required
            ></v-text-field>
            <v-text-field 
              class="text-field"
              color='purple'
              v-model="fileLink"
              :rules="fileLinkRules"
              label="Link del proyecto"
              required
            ></v-text-field>
            <v-flex>
            <v-select 
              class="text-field"
              color="purple"
              label="Abierto a colaboración?"
              :items="colaboracion"
              required
            ></v-select>
            </v-flex>
          
            <v-flex class="formBtns">
              <v-btn class='btns' color='purple' @click="submit" :disabled="!valid">Crear</v-btn>
              <v-btn color='purple' class='btns' @click="clear">Limpiar</v-btn>
              <v-btn color='purple' class='btns'>Cancelar</v-btn>
            </v-flex>
          </v-form>
        </v-flex>
    
    </v-layout>
  </v-container>
</template>

<style scoped>
  .container {
    padding: 0;
  }
  .form-container {
    max-width: none;
  }
</style>

<script>
//import axios from 'axios' //poner axios e importarlo
import { nombreRules, emailRules, campoRequeridoRules, descripcionRules } from '../../validaciones'
import CardForm from '@/components/Proyectos/CardForm'
import CardExterna from '@/components/Proyectos/CardExterna'
import Pagination from '@/components/Proyectos/Pagination'

export default {
  name: 'Proyectos',
  components: {
    CardForm,
    CardExterna,
    Pagination
  },
  data () {
    return {
      valid: false,
      proyectoNombre:'',
      campoRequeridoRules:campoRequeridoRules,
      fileLink: '',
      fileLinkRules: campoRequeridoRules,
      creadores: '',
      creadoresRules:campoRequeridoRules,
      descripcion: '', 
      descripcionRules: descripcionRules,
      colaboracion: ['Sí', 'No'],
      tecnos:['JavaScript','Vue.js','CSS','HTML']
    }
  },
  methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
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
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin:0;
  padding: 0;
}
h1, #enviar {
  color: #7e64ab;
  font-weight:300;
  font-size:32px;
}
h2{
  font-weight:300;
  font-size:32px;
  line-height: 34px;
  margin-bottom: 0.5em;
}
h3{
  font-weight:300;
  font-size:20px;
}

.containerCard{
  width: 22em;
}
.sideform {
  margin-left: 0%;
}
.sideform-padding{
  padding: 2em;
}
.cardform {
  background-color: #7E57C2;
  color: #ffffff;
  width: 22em;
  display:flex;
  flex-direction:column;
  align-items:space-between;
  justify-content: space-between;
}
.mainForm{
  margin: 4em;
  font-size: 10px;
  padding: 2em; 
}
.textField input{
  color:#7E57C2;
  margin: 0.3em;
}
#filtrar-btn{
  color:#7E57C2;
  margin-right:5px;
}
#borrar-btn{
  border:  #ffffff;
}
.cardHeader{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.cardHeader figure{
  height: 100px;
  width: 100px;
}
.cardHeader figure img{
  width: 100%;
  height: auto;
}
.formBtns{
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
.sideFormBtns{
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
}
.filtersDiv{
  background-color: #5e35b1;
  width: 22em;
  padding:1em 2em 2em 2em;
}
.subFilter{
  width: 60px;
  display: flex;
  justify-content:space-around;
  align-content: center;
  background-color: #f4f2f2;
  padding:0.2em 0.4em;
  border-radius:20px;;
}
.subFilter p{
  margin:0;
  color: #979797;
  font-size:12px;
}
.subFilter figure{
  width: 13px;
  height:13px;
}
.subFilter figure img{
  width: 100%;
  height: auto;
}
.text-field  input, .text-field label{
    color: #7E57C2 !important;
}
.btn{
  padding: 0 2px 0 2px;
  margin:0;
  background: #7e64ab;
  color: #ffffff;
  border-radius: 18px;
  font-size: 12px;
}
/*NOT WORKING
.application--light .input-group .input-group__details:application--light{
 color: #7E57C2;
}*/

</style>
