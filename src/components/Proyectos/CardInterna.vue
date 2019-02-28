<template>
  <v-layout class="modal-proyecto">
    <v-flex xs12 md9>
      <v-card class="modal-proyecto__card">
        <v-btn class="card__btn-close" @click="onClickClose()" fab small direction="rigth">
          X
        </v-btn>
        <img class="card__img" :src="cardInfo.image_url" />
        <v-card-title primary-title>
          <div>
            <h3 class="card__project-name">{{ cardInfo.project_name }} </h3>
            <h4 class="card__text">Creadores: {{ cardInfo.name }}</h4>
            <h4 class="card__text">Tecnologias: {{ cardInfo.technologies }}</h4>
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
      onClickClose() {
        this.$emit("closeModal")
      }
    }
  }
</script>

<style scoped>
.modal-proyecto {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-proyecto__card {
  min-height: 40em;
  background-color: #F4F2F2;
}

.card__btn-close {
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
  font-size: 20px;
  font-weight: 300;
}

.card__img {
  width: 100%;
  height: 22em;
  background-repeat: no-repeat;
  background-size: cover;
}

.card__project-name{
  font-weight: 500;
  color: #7E57C2;
}

.card__text {
  color: #333333;
  font-weight: 500;
}

</style>
