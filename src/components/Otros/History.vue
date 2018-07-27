<template>
  <div>
    <profile-card></profile-card>
    <CardInterna></CardInterna>
  </div>
</template>

<script>
import ProfileCard from '../Comunidad/ProfileCard.vue';
import CardInterna from '../Proyectos/CardInterna';
export default {
  name: 'History',
  components: {
    ProfileCard,
    CardInterna
  },
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
  width: 200px;
  height: 100px;
  background-color: #7e64ab;
  border-radius: 50%;
}
</style>