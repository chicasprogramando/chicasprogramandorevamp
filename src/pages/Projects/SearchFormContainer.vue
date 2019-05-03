<template>
  <!-- Saque el flex y el layout the esto por que se pisaban con los del padre, no se tienen que volver a llamar en los hijos si el padre ya se los esta poniendo -->
  <v-card class="cardform" height="100%">
    <div>
      <h2>Buscador de Proyectos</h2>
      <p>Invitamos a la gente a buscar aquellos proyectos que los inspiren a formar parte, aprender o investigar.</p>
    </div>
    <div>
      <h3>Filtros</h3>
      <p>Buscar por tecnología, estado del proyecto, creador/es, fecha.</p>
    </div>
    <SearchForm></SearchForm>
  </v-card>
</template>

<script>
import SearchForm from "@/pages/Projects/SearchForm";

export default {
  name: "SearchFormContainer",
  data() {
    return {};
  },
  components: {
    SearchForm
  }
};
</script>

<style scoped>
.cardform {
  background-color: #7e57c2;
  color: #f2f2f4;
  padding: 2em;
  width: 100%;
}
</style>
