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

export default {
  name: 'Proyectos',
  data () {
    return {

    }
  },
  components: {
    CardForm,
    CardExterna,
    Pagination
  }
}
</script>
