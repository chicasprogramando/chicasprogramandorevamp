<template>
  <div class="profile-card-detail-container" :style="{ 'background-image' : 'url(' + data.image + ')' }">
    <div class="profile-card-detail-container-white">
      <div class="profile-card-detail-info deep-purple--text darken-1"> 
        <h2 class="profile-card-name">  {{ data.name }} </h2>
        <h4 class="profile-card-title"> {{ data.title }} </h4>
      </div>  
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

.profile-card-detail-container {
    width: 600px;
    height: 600px;
    margin: 0 auto;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    border: 4px solid #7E57C2; /* avoid movement when hover */
}

.profile-card-detail-container-white {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
}

.profile-card-name{
    font-weight: 400;
}
.profile-card-info {
    margin-left: 15px; 
    text-align: left;
}

</style>