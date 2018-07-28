<template>
  <v-layout class="internal-card-projects">
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="card" width="80em">
        <v-btn class="close" @click="handleClickClose()" fab small direction="rigth">
          <v-icon class="icon">X</v-icon>
        </v-btn>
        <img :src="require('@/assets/compu.jpeg')" />

        <v-card-title primary-title>
          <div>
            <h3>{{ cardInfo.projectName }} </h3>
            <h4>Creadores: {{ cardInfo.name }}</h4>
            <h4>Tecnologias: {{ cardInfo.technologies }}</h4>
            <div>
              <p>Descripcion: {{ cardInfo.description }}</p>
            </div>
          </div>
        </v-card-title>
      </v-card>
      <div>
        <v-btn round class="button" color="deep-purple lighten-1">Ver Proyecto</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'CardInterna',
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
      handleClickClose() {
        this.$emit("closeModal")
      }
    }
  }
</script>

<style scoped>
.card {
  min-height: 40em;
  background-color: #F4F2F2;
  position: absolute;
  left: 310px;
  top: 64px;
}

img {
  width: 100%;
  height: 22em;
  background-repeat: no-repeat;
  background-size: cover;
}

h3{
  font-weight: 500;
  color: #7E57C2;
}

h4 {
  color: #333333;
  font-weight: 500;
}
.close {
  position: absolute;
  z-index: 1;
  right: 90px;
  top: 10px;
  font-weight: 600;
}

.button {
  position: absolute;
  z-index: 1;
  background: #7E57C2;
  color: #F4F2F2;
  top: 550px;
  right: 100px;
}
</style>
