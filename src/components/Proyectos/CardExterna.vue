<template>
<<<<<<< HEAD
  <v-layout>
    <v-flex class="media-card">
=======
  <v-layout @click="handleClick(cardInfo)">
    <v-flex xs12 sm6 offset-sm3 class="media-card">
>>>>>>> master
      <v-card>
        <v-card-media src="https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640" height="160px"></v-card-media>
          <v-card-title primary-title class="card">
            <div>
              <h3 class="headline">{{ cardInfo.projectName }}</h3>
              <span>{{ cardInfo.name }}</span><br>
              <span>{{ cardInfo.technologies }}</span>
            </div>
          </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  .card {
    background-color: #F4F2F2;
    box-shadow: none;
  }
  .headline {
    color: #5E35B1;
  }
  span {
    color: #333333;
  }
</style>

<script>
  export default {
    name: 'CardExterna',
    props: {
      cardInfo: {
        type: Object
      }
    },

    data () {
      return {
      }
    },
    methods: {
      handleClick(cardInfo) {
        this.$emit("cardClick", cardInfo)
        console.log(cardInfo)
      }
    }
  }
</script>
