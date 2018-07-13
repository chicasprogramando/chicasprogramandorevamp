<template>
  <div class="profile-card-container">
    <div class="profile-card-img"> </div>
    <div class="profile-card-info"> 
      <h3 class="profile-card-name"> Gati Miawington </h3>
      <h4 class="profile-card-title"> Miau.JS </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #7e64ab;
}
.profile-card-container {
    width: 250px;
    height: 115px;
    background-color: #7e64ab;
    border-radius: 500px;
    display: flex;
    align-items: center;
    
}

.profile-card-info {
    margin-left: 15px;
    
}

.profile-card-img {
  width: 50%;
  height: 100%;
  background-image: url(https://thumbs.dreamstime.com/z/gatito-divertido-del-gato-del-beb%C3%A9-36333148.jpg);
  background-size: contain;
  border-radius: 50%;
  box-sizing: border-box;
}

</style>