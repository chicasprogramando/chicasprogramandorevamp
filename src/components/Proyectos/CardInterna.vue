<template>
  <v-layout class="internal-card-projects">
    <v-flex xs12 md9>
      <v-card>
        <v-btn class="close" @click="handleClickClose()" fab small direction="rigth">
          X
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
        <div>
          <v-btn round color="deep-purple lighten-1" dark>Ver Proyecto</v-btn>
        </div>
      </v-card>
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
.internal-card-projects {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  min-height: 40em;
  background-color: #F4F2F2;
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
  top: 10px;
  right: 10px;
  font-size: 20px;
  font-weight: 300;
}
</style>
