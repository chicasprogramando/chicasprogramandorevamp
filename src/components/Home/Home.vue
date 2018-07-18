<template>
  <v-container fluid>
      <v-layout column align-center>
        <section class="total">
	<div class="content">
		<h1>CHICAS <br>PROGRAMANDO</h1>
		<h2>Esta página es una ventana al mundo para los proyectos de mujeres en tecnología.<br>
		Queremos visibilizar equipos y emprendimientos que tengan al menos a una mujer o a une programadorx no binarie.</h2>

		<button class="verMas">Ver proyectos</button>

	</div>
	
	<div class="inicio">¿Qué voy a encontrar en esta página?</div>
	<a class="scrollDown" href=".section2"><span class="fa fa-angle-up"></span></a>	
</section>

<section class="section2"></section>

      </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
	margin: 0;
	padding: 0;
	height: 100%;
	box-sizing: border-box;
}



.container{
	height: 100vh;
}

nav{
	height: 10%;
	background-color: #f4f2f2;
}

.total{
	background-image: url(../../assets/girlvr.jpg);
	background-size: cover;
	height: 90%;
	width: 100%;
}

.content{
	width: 800px;
	position: relative;
	height: 95%;
	right: 200px;
  background-color: rgb(126,87,194,0.9);
    color: #7e64ab;
	transform: skew(20deg);
	-ms-transform: skew(20deg);
	-webkit-transform: skew(20deg);
	display: flex;
	flex-direction: column;
	justify-content: center;
}

h1{
	display: flex;
	justify-content: center;
	position: relative;
	left: 2em;
	transform: skew(-20deg);
	-ms-transform: skew(-20deg);
	-webkit-transform: skew(-20deg);
	font-family: 'Gameplay', sans-serif;
	font-size: 2.5em;
	letter-spacing: 0.1em;
	color: white;
	margin-bottom: 0px;

}

h2{
	display: flex;
	justify-content: flex-end;
	width: 25em;
	position: relative;
	left: 12em;
	transform: skew(-20deg);
	-ms-transform: skew(-20deg);
	-webkit-transform: skew(-20deg);
	font-family:'Roboto', sans-serif;
	font-size: 1.2em;
	font-weight: bold;
  color: white;

}

.verMas{
	transform: skew(-20deg);
	-ms-transform: skew(-20deg);
	-webkit-transform: skew(-20deg);
	color: #7e57c2;
	background-color: white;
	width: 10em;	
	position: relative;
	left: 20em;
	border-style: none;
	padding: 15px;
	font-size: 1.2em;
	font-family:'Roboto', sans-serif;
	font-weight: bold;
	margin-top: 20px;
	border-radius: 7px;
	border: solid transparent 2px;
}

.verMas:hover{
	background-color: #7e57c2;
	border: solid white 2px;
	color: white; 
}

.inicio{
	background-color: green;
	height: 5%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
}

.inicio:hover{
background-color: white;
color: green;
}

</style>