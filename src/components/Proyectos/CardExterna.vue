<template>
  <v-layout @click="handleClick(cardInfo)">
    <v-flex class="media-card">
      <v-card>
        <v-card-media :src="require('@/assets/compu.jpeg')" height="180px"></v-card-media>
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
  .media-card {
    height: 100%;
  }
  .card {
    background-color: #F4F2F2;
    box-shadow: none;
  }
  .card__title {
    padding: 10px;
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
