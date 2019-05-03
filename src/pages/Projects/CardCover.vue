<template>
  <v-layout @click="handleClick(cardInfo)">
    <v-flex class="cardProjects">
      <v-card>
        <v-card-media :src="cardInfo.image_url" height="180px"></v-card-media>
        <v-card-title primary-title class="cardProjects__title">
          <div>
            <h3 class="cardProjects__title__h3">{{ cardInfo.project_name }}</h3>
            <span>{{ cardInfo.creator }}</span>
            <br>
            <span>{{ cardInfo.technologies }}</span>
            <Icons propName="cerrado" bgcolor="#FF8A80" color="#ffffff"></Icons>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>   


<script>
import Icons from "@/components/Icons/Icons";

export default {
  name: "CardCover",
  components: { Icons },
  props: {
    cardInfo: {
      type: Object
    }
  },

  data() {
    return {};
  },
  methods: {
    handleClick(cardInfo) {
      this.$emit("cardClick", cardInfo);
    }
  }
};
</script>

<style scoped>
.cardProjects {
  height: 100%;
}
.cardProjects__title {
  background-color: #f4f2f2;
  box-shadow: none;
}
.cardProjects__title__h3 {
  color: #5e35b1;
  font-weight: 500;
}
span {
  color: #333333;
}
</style>