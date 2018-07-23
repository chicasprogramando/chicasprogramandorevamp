<template>
  <div class="profile-card-container">
    <div class="profile-card-img" :style="{ 'background-image' : 'url(' + data.image + ')' }"> </div>
    <div class="profile-card-info deep-purple--text lighten-1"> 
      <h3 class="profile-card-name">  {{ data.name }} </h3>
      <h4 class="profile-card-title"> {{ data.title }} </h4>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.profile-card-container {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 500px;
    display: flex;
    align-items: center;
    width:80%;
    height:80%;
    padding: 8px;
    margin: 15px;
    border: 3px solid transparent; /* avoid movement when hover */
}

.profile-card-container:hover{
  border: 3px solid #7E57C2;
}

.profile-card-name{
  font-weight: 500;
  text-align:center;
}

.profile-card-info {
    margin-left: 15px; 
    text-align: left;
}

.profile-card-img {
  width: 45%;
  height: auto;
  padding-bottom: 45%;
  margin: 20px;
  /* background-image: url(https://thumbs.dreamstime.com/z/gatito-divertido-del-gato-del-beb%C3%A9-36333148.jpg);*/
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-sizing: border-box;
}

</style>