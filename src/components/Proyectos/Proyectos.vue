<template>
  <v-container fluid grid-list-md class="container__proyectos">
      <v-layout class="container__proyectos--wrapper">
        <!-- Le di un md 4 al buscador para que ocupe un tercio de la pantalla -->
        <v-flex xs12 md3 class="form-container">
          <CardForm></CardForm>
        </v-flex>
        <v-flex xs12 md9 class="relative__container">
          <v-layout row wrap class="card__container">
            <v-flex
              v-if="!cardInfo"
              v-for= "card in projectsInfo" 
              :key="card.name" xs12 sm6 md4>
              <CardExterna :cardInfo="card" @cardClick="openProject(card)"></CardExterna>
            </v-flex>
            <v-slide-x-transition mode="out-in">
            <div v-if="cardInfo" class="proyecto-modal__container">
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
      <!--<form-proyecto></form-proyecto>-->
  </v-container>
</template>

<script>
import CardForm from '@/components/Proyectos/CardForm'
import CardExterna from '@/components/Proyectos/CardExterna'
import Pagination from '@/components/Proyectos/Pagination'
import CardInterna from '@/components/Proyectos/CardInterna'
import FormProyecto from '@/components/Otros/FormProyecto'

export default {
  name: 'Proyectos',
  components: {
    CardForm,
    CardExterna,
    Pagination,
    CardInterna,
    FormProyecto
  },
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
  methods: {
    openProject(card) {
      this.cardInfo = card
      console.log(card)
    },
    closeProject() {
      this.cardInfo = null
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container__proyectos {
  margin:0;
  padding: 0;
  height: 100%;
}
.container__proyectos--wrapper {
  height: 100%;
}
.relative__container {
  position: relative;
  height: 100%;
}

.proyecto-modal__container {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 20;
  height: 100%;
}

</style>

