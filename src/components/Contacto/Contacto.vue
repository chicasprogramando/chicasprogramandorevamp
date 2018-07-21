<template>
  <v-container fluid>
      <v-layout column align-center>
        <h1>Contacto</h1>
       
        <v-flex xs12 sm6 column-align-left>
          <p>Contactanos</p>

          <v-card xs12 sm6 color="purple">
            <v-card-title primary-title>
              <h4>Contactanos</h4>
            </v-card-title>  
            <v-card-text>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</v-card-text>
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
        </v-card>
      
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import { emailRules } from '../../validaciones'
export default {
  name: 'Contacto',
  data () {
    return {
      emailRules: emailRules,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #7e64ab;
}
</style>