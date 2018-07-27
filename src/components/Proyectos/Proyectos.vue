<template>
  <v-container fluid grid-list-md class="container">
      <v-layout>
        <v-flex d-flex xs12 sm12 md2 class="form-container">
          <CardForm></CardForm>
        </v-flex>
        <v-flex>
          <v-layout wrap>
            <v-flex 
              v-if="!cardInfo"
              v-for= "card in projectsInfo" 
              :key="card.name" xs12 sm6 md4>
              <CardExterna :cardInfo="card" @cardClick="openProject(card)"></CardExterna>
            </v-flex>
            <v-layout v-if="cardInfo">
              <v-flex>
                <CardInterna :cardInfo="cardInfo"></CardInterna>
              </v-flex>
            </v-layout>
          </v-layout>
          <v-layout>
            <v-flex>
              <Pagination></Pagination>
            </v-flex>
          </v-layout>
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
import CardForm from '@/components/Proyectos/CardForm'
import CardExterna from '@/components/Proyectos/CardExterna'
import Pagination from '@/components/Proyectos/Pagination'
import CardInterna from '@/components/Proyectos/CardInterna'

export default {
  name: 'Proyectos',
  data () {
    return {
      cardInfo: null,
      projectsInfo: [
        {projectName: 'Web Chicas Programando', name: 'Chicas Programando', technologies: 'Vue.js, Vuetify, Firebase', image: 'https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640', description: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'},
        {projectName: 'Web Chicas Programando', name: 'Mar Calmon', technologies: 'Vue.js, Vuetify, Firebase', image:'https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640', description: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'},
        {projectName: 'Web Chicas Programando', name: 'Priscila Bey', technologies: 'Vue.js, Vuetify, Firebase', image:'https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640', description: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'},
        {projectName: 'Web Chicas Programando', name: 'Gia Castello', technologies: 'Vue.js, Vuetify, Firebase', image:'https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640', description: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'},
        {projectName: 'Web Chicas Programando', name: 'Paola Gutierrez', technologies: 'Vue.js, Vuetify, Firebase', image:'https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640', description: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'},
        {projectName: 'Web Chicas Programando', name: 'Sofia', technologies: 'Vue.js, Vuetify, Firebase', image:'https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640', description: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'}
      ]
    }
  },

  components: {
    CardForm,
    CardExterna,
    Pagination,
    CardInterna
  },

  methods: {
    openProject(card) {
      this.cardInfo = card
      console.log(card)
    }
  }
}
</script>