<template>
  <v-container>
    <v-layout>
      <v-flex md6 class="rightForm" flat fill-height align-center>
        <div class="form-width">
          <h2>Crear nuevo evento</h2>
          <v-form ref="form" v-model="valid">
            <v-text-field color="purple"
              v-model="eventName"
              :rules="campoRequeridoRules"
              label="Nombre del evento"
              required
            ></v-text-field>
            <v-text-field color="purple"
              v-model="date"
              :rules="campoRequeridoRules"
              label="Fecha"
              required
            ></v-text-field>
            <v-text-field color="purple" 
              v-model="place"
              :rules="campoRequeridoRules"
              label="Lugar"
              required
            ></v-text-field>
            <v-text-field color="purple"
                v-model="fileLink"
                :rules="campoRequeridoRules"
                label="Link del proyecto"
                required
              ></v-text-field>
            
            <v-flex class="formBtns">
                <v-btn class='btns' color='deep-purple lighten-1'>Crear</v-btn>
                <v-btn color='deep-purple lighten-1' class='btns'>Limpiar</v-btn>
                <v-btn color='deep-purple lighten-1' class='btns'>Cancelar</v-btn>
            </v-flex>
            </v-form>
          </div>
        </v-flex>  
    </v-layout>
  </v-container>
</template>

<script>
import { campoRequeridoRules } from '../../validaciones'
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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  margin:0;
  padding: 0;
  background-color: #ffffff;

}
.left{
  padding: 1.5em;
}
.rightForm{
  opacity:0.8;
  width:50%;
  padding: 10em 13% 1.5em 13%;
}
.headerDiv{
  display: flex;
  justify-content: space-between;
}
.headerDiv figure {
  width: 48px;
  height:48px;
}
.headerDiv figure img{
  width: 100%;
  height: auto;
}
h1,h2{
  color:#7e64ab;
  font-weight:300;
  font-size:2em;
}
.subtitle{
  color:#7e64ab;
  font-weight:300;
  font-size:15px;
  line-height:18px;
  margin:0.8em 0 1.5em 0;
}
.place {
  color: #7e64ab;
  font-size:13px;
}
.date{
  font-size:12px;
  background-color:#7e64ab;
  padding:0.5em 1em;
  margin-right:0.8em;
  color:#ffffff;
}
.cards{
  margin: 0.9em 0;
  padding: 0.3em;
  display: flex;
  justify-content: space-between;
  align-content:center;
}
.event{
  padding:1em 0 0 0;
}
.next-btn{
  text-align: right;
  display: flex;
  justify-content: flex-end;
}
.arrow-div{
  margin-top: 0.5em;
  cursor:pointer;
}
.formBtns{
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
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
</style>