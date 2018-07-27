<template>
  <v-container>
  <v-layout class="form-div" justify-center align-center>
    <v-flex xs12 sm6>
      <h3>Crear nuevo perfil</h3>
      <v-form class="form" ref="form" v-model="valid">
        <div>
          <v-text-field
            v-model="nombre"
            :rules="campoRequeridoRules"
            label="Nombre"
            color='deep-purple lighten-1'
            required
          ></v-text-field>
          <v-text-field
            v-model="tituto"
            :rules="campoRequeridoRules"
            label="Título"
            color='deep-purple lighten-1'
            required
          ></v-text-field>
          <v-text-field 
            class="text-field"
            outline
            v-model='imagen'
            label="Imagen"
            color='deep-purple lighten-1'
          ></v-text-field>
          <v-text-field 
            default
            class="text-field"
            color='deep-purple lighten-1'
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
            color='deep-purple lighten-1'
            required
          ></v-text-field>
          <v-select 
            class="text-field"
            color="deep-purple lighten-1"
            label="Buscando proyectos?"
            :items="buscandoProyectos"
            required
          ></v-select>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            color='deep-purple lighten-1'
            required
          ></v-text-field>
          <v-text-field
            v-model="github"
            :rules="campoRequeridoRules"
            label="GitHub"
            color='deep-purple lighten-1'
            required
          ></v-text-field>
          <v-text-field
            v-model="linkedIn"
            :rules="campoRequeridoRules"
            label="LinkedIn"
            color='deep-purple lighten-1'
            required
          ></v-text-field>
        </div>
      </v-form>
      <v-flex class="formBtns">
        <v-btn class='btns' color='deep-purple lighten-1'>Crear</v-btn>
        <v-btn color='deep-purple lighten-1' class='btns'>Limpiar</v-btn>
        <v-btn color='deep-purple lighten-1' class='btns'>Cancelar</v-btn>
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
      nombre:'',
      titulo:'',
      imagen:'',
      descripcion:'',
      apellido:'', 
      buscandoProyectos: '',
      email: '',
      github:'',
      linkedin:'',
      buscandoProyectos: ['Sí','No'], 
      emailRules:emailRules,
      campoRequeridoRules:campoRequeridoRules,
      
      methods: {
        submit () {
        if (this.$refs.form.validate()) {
            // Native form submission is not yet supported
            axios.post('/api/submit', {
            titulo: this.titulo,
            nombre: this.nombre,
            imagen: this.imagen,
            descripcion:this.descripcion,
            apellido: this.apellido,
            buscandoProyectos: this.buscandoProyectos,
            email: this.email,
            github:this.github,
            linkedin:this.linkedin  
            })}
        },
        clear () {
        this.$refs.form.reset()
        }
      }
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
.form-div{
  padding:2em;
}
.form{
  display: flex;
  justify-content: space-around;
}
.form div{
  width: 300px;
  margin: 0 1em;
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