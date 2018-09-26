<template>
  <div class="pastilla" @click="handleClick(data)">
    <div class="pastilla__img" :style="{ 'background-image' : 'url(' + data.image + ')' }"> </div>
    <div class="pastilla__info deep-purple--text lighten-1"> 
      <h3 class="pastilla__info__name">  {{ data.name }} </h3>
      <h4 class="pastilla__info__title"> {{ data.title }} </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    data: {
      type: Object
    }
  }, 
  data () {
    return {
    }
  },
  methods: {
    handleClick(data) {
      this.$emit("profileCardClick", data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pastilla {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 500px;
    display: flex;
    align-items: center;
    padding: 8px;
    margin: 15px;
    border: 3px solid transparent; /* avoid movement when hover */
}

.pastilla:hover{
  border: 3px solid #7E57C2;
}

.pastilla__info__name{
  font-weight: 500;
  font-size: 20px;
}
.pastilla__info__title {
  font-size: 18px;
}
.pastilla__info {
    margin-left: 15%; 
    text-align: left;
}

.pastilla__img {
  width: 125px;
  height: 125px;
  /* background-image: url(https://thumbs.dreamstime.com/z/gatito-divertido-del-gato-del-beb%C3%A9-36333148.jpg);*/
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-sizing: border-box;
}

</style>