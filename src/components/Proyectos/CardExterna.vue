<template>
  <v-layout @click="handleClick(cardInfo)">
    <v-flex class="cardProyectos">
      <v-card>
        <v-card-media :src="cardInfo.image_url" height="180px">
        </v-card-media>
        <v-card-title primary-title class="cardProyectos__title">
        <div>
          <h3 class="cardProyectos__title__h3">{{ cardInfo.project_name }}</h3>
          <span>{{ cardInfo.name }}</span><br>
          <span>{{ cardInfo.technologies }}</span>
          <Icons propName="cerrado" bgColor="#FF8A80" color="#ffffff"></Icons>
        </div>
          </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>   

<style scoped>
  .cardProyectos {
    height: 100%;
  }
  .cardProyectos__title {
    background-color: #F4F2F2;
    box-shadow: none;
  }
  .cardProyectos__title__h3 {
    color: #5E35B1;
  }
  span {
    color: #333333;
  }
</style>

<script>
import Icons from "@/components/Otros/Icons"

  export default {
    name: 'CardExterna',
    components: {Icons},
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
