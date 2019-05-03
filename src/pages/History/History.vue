<template>
  <div>
    <!-- 
    Attributes to call buttons as components
    mixins
    component para barra, y segun el link, asignar el ícono 
    -->
    <icons propName="twitter" bgcolor="pink" color="#000000"></icons>
    <icons propName="instagram" bgcolor="#cccccc" color="#000000"></icons>
    <icons propName="linkedin" bgcolor="#cccccc" color="#000000"></icons>
    <icons propName="github" bgcolor="#cccccc" color="#000000"></icons>
  </div>
</template>

<script>
import Icons from "../../components/Icons/Icons";

export default {
  name: "History",
  components: {
    Icons
  },
  data() {
    return {};
  }
};
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
.svg-button:hover {
  box-shadow: 0 0 0 10 rgba(0, 0, 0, 1);
}
</style>

