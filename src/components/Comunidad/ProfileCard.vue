<template>
  <div class="profile-card-container">
    <div class="profile-card-img"> </div>
    <div class="profile-card-info"> 
      <h3 class="profile-card-name deep-purple--text lighten-1"> {{ name }} </h3>
      <h4 class="profile-card-title deep-purple--text lighten-1"> {{ title }} </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: ['name','title'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.profile-card-container {
    width: 300px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 500px;
    display: flex;
    align-items: center;
    padding: 8px;
    border: 3px solid transparent;
    margin-bottom: 10px;
}

.profile-card-container:hover {
    border: 3px solid #5E35B1;
}

.profile-card-info {
    margin-left: 15px;
    
}

.profile-card-img {
  width: 115px;
  height: 115px;
  background-image: url(https://thumbs.dreamstime.com/z/gatito-divertido-del-gato-del-beb%C3%A9-36333148.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-sizing: border-box;
}

</style>