<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 class="sideform">
      <v-card class="cardform" height="100%">
        <div>
          <h2>Buscador de Proyectos</h2>
          <p>Invitamos a la gente a buscar aquellos proyectos que los inspiren a formar parte, aprender o investigar.</p>
        </div>
        <div>
          <h3>Filtros</h3>
          <p>Buscar por tecnología, estado del proyecto, creador/es, fecha.</p>
        </div>
        <!--<SearchForm></SearchForm>-->
      </V-card>
    </v-flex>
  </v-layout>
</template>

// import SearchForm from '@/components/Proyectos/SearchForm'

export default {
  name: 'CardForm',
  data () {
    return {

    }
  },
  components: {
    SearchForm
  }
}
</script>

<style scoped>
  .sideform {
    margin-left: 0%;
  }
  .cardform {
    background-color: #7E57C2;
    color: #F2F2F4;
    padding: 2em;
    width: 22em;
  }
</style>
