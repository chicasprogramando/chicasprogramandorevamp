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
      <form-proyecto></form-proyecto>
  </v-container>
</template>

<script>
import CardForm from '@/components/Proyectos/CardForm'
import CardExterna from '@/components/Proyectos/CardExterna'
import Pagination from '@/components/Proyectos/Pagination'
import FormProyecto from '@/components/Otros/FormProyecto'

export default {
  name: 'Proyectos',
  components: {
    CardForm,
    CardExterna,
    Pagination,
    FormProyecto
  },
  data () {
    return {
    
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
</style>
