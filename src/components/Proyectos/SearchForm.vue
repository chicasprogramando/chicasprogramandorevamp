<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="Tecnologia"
      :rules="TecnologiaRules"
      label="Tecnología"
      required>
    </v-text-field>
    <v-text-field
      v-model="Estado"
      :rules="EstadoRules"
      label="Estado del proyecto"
      required>
    </v-text-field>
    <div class="buttons">
      <v-btn small round outline color="white">Filtrar</v-btn>
      <v-btn small round outline color="white">Borrar</v-btn>
    </div>
  </v-form>
</template>

<style scoped>
  label {
    color: #F2F2F4 !important;
  }
  label:after {
    display: none;
  }
  .input-group {
    color: #F2F2F4 !important;
  }
  .input-group__details::before {
    background-color: #F2F2F4 !important;
  }
  .buttons {
    text-align: right;
  }
  .btn {
    margin: 3px;
  }
  .btn:focus {
    background-color: #F2F2F4 !important;
    color: #7E57C2 !important;
  }
</style>
