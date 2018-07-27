<template>
  <v-layout class="internal-card-projects">
    <v-flex xs12 sm6 offset-sm3>
      <div class="card">
        <v-btn class="close" @click="$emit('close')" fab small right>
          <v-icon>X</v-icon>
        </v-btn>
        <img :src="cardInfo.image" />

        <v-card-title primary-title>
          <div>
            <h3>{{ cardInfo.projectName }} </h3>
            <h4>Creadores: {{ cardInfo.name }}</h4>
            <h4>Tecnologias: {{ cardInfo.technologies }}</h4>
            <div>
              <p>Descripcion:{{ cardInfo.description }}</p>
            </div>
          </div>
        </v-card-title>

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
      close() {
        
      }
    }
  }
</script>

<style scoped>
.card {
  width:100%;
  min-height: 500px;
  background-color: #F4F2F2;
}

h3{
  font-weight: 500;
  color: #7E57C2;
}
.close {
  position: absolute;
  z-index: 1;
}
</style>
