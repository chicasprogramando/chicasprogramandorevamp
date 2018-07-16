<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 class="media-card">
      <v-card>
        <v-card-media src="https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640" height="160px"></v-card-media>
          <v-card-title primary-title class="card">
            <div>
              <h3 class="headline">Proyecto</h3>
              <span>Gia Castello</span><br>
              <span>Vue.js, Python, MySQL</span>
            </div>
          </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  .media-card {
    margin-left: 3em;
  }
  .card {
    background-color: #F4F2F2;
    box-shadow: none;
    width: 18em;
  }
  .headline {
    color: #5E35B1;
    font-weight: bold;
  }
  span {
    color: #333333;
  }
</style>
