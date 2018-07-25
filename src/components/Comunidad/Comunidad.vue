<template>
  <v-container fluid class="comunidad-container">
  <v-layout class="deep-purple lighten-1 search-bar-profiles" row justify-space-between>
    <v-flex xs12 sm6>
      <h2 class="white--text">Las Coders de Nuestra Comunidad</h2>
      <v-text-field
        name="profile-search"
        label="Buscar por nombre o apellido"
        id="profile"
        class="search-bar-input"
        dark
      ></v-text-field>
    </v-flex>
    <figure>
      <img src="../../assets/modal-btn2.png" alt="">
    </figure>
  </v-layout>
  <v-layout class="form-div" justify-center align-center>
    <v-flex xs12 sm6>
      <h3>Crear nuevo perfil</h3>
      <v-form class="form" ref="form" v-model="valid">
        <div>
          <v-text-field
            v-model="nombre"
            :rules="campoRequeridoRules"
            label="Nombre"
            color='purple'
            required
          ></v-text-field>
          <v-text-field
            v-model="tituto"
            :rules="campoRequeridoRules"
            label="Título"
            color='purple'
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
            default
            class="text-field"
            color='purple'
            v-model="descripcion"
            :rules=descripcionRules
            label="Descripción del proyecto"
            counter=500
            rows="3"
            textarea
            required
          ></v-text-field>          
        </div>
        <div>
          <v-text-field
            v-model="apellido"
            :rules="campoRequeridoRules"
            label="Apellido"
            color='purple'
            required
          ></v-text-field>
          <v-select 
            class="text-field"
            color="purple"
            label="Buscando proyectos?"
            :items="buscandoProyectos"
            required
          ></v-select>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            color='purple'
            required
          ></v-text-field>
          <v-text-field
            v-model="github"
            :rules="campoRequeridoRules"
            label="GitHub"
            color='purple'
            required
          ></v-text-field>
          <v-text-field
            v-model="linkedIn"
            :rules="campoRequeridoRules"
            label="LinkedIn"
            color='purple'
            required
          ></v-text-field>
        </div>
      </v-form>
      <v-flex class="formBtns">
        <v-btn class='btns' color='purple'>Crear</v-btn>
        <v-btn color='purple' class='btns'>Limpiar</v-btn>
        <v-btn color='purple' class='btns'>Cancelar</v-btn>
      </v-flex>
    </v-flex>    
  </v-layout>
  </v-container>
</template>

<script>
import { emailRules, campoRequeridoRules } from '../../validaciones'
export default {
  name: 'Comunidad',
  data () {
    return {
      valid: false,
      buscandoProyectos: ['Sí','No'], 
      emailRules:emailRules,
      campoRequeridoRules:campoRequeridoRules,     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2,h3{
  font-weight: 300;
  font-size: 24px;
}
h3 {
  color: #7e64ab;
  text-align: center;
  font-size: 30px;
}
.comunidad-container {
  padding: 0;
}
.search-bar-profiles, .profiles-padding {
  padding: 16px;
}
.search-bar-input::-moz-placeholder {
  font-size: 18px;
  font-weight: 300;
}
.search-bar-input::placeholder {
  font-size: 18px;
  font-weight: 300;
}
.search-bar-profiles figure {
  width: 48px;
  height:48px;
}
.search-bar-profiles figure img{
  width: 100%;
  height: auto;
}
.form-div{
  padding:2em;
}
.form{
  display: flex;
  justify-content: space-around;
}
.form div{
  width: 300px;
}
.formBtns{
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.btn{
  padding: 0 2px 0 2px;
  margin:1em 1em 0 1em;
  background: #7e64ab;
  color: #ffffff;
  border-radius: 18px;
  font-size: 12px;
}

</style>