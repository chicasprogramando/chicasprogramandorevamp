<template>
<v-container class="skw-pages" fluid pa-0>
    <v-layout class="skw-page skw-page-1 active">
                  <div class="skw-page__half skw-page__half--left">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                         <h2 class="skw-page__heading">CHICAS PROGRAMANDO</h2>
                        <p class="skw-page__description">Una ventana al mundo para los proyectos de mujeres en tecnología.</p>
                        <v-btn class="my-5 botones1" to="/proyectos" round>Ver proyectos</v-btn>
                        <v-btn fab flat class="my-5 scroll" to=".skw-page-2"><v-icon>keyboard_arrow_down</v-icon></v-btn>
                      </div>
                    </div>
                  </div>
                  <div class="skw-page__half skw-page__half--right">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                        
                      </div>
                    </div>
                  </div>
    </v-layout>
    <v-layout class="skw-page skw-page-2">
                  <div class="skw-page__half skw-page__half--left">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content"></div>
                    </div>
                  </div>
                  <div class="skw-page__half skw-page__half--right">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                        <h2 class="skw-page__heading my-5">Proyectos</h2>
                        <p class="skw-page__description my-5">Queremos visibilizar emprendimientos que tengan al menos a una mujer o programadorx no binarie. Mirá lo que están haciendo las mujeres en tecnología. Podés buscar por nombre del proyecto, por lenguaje o por programadorx.</p>
                        <v-btn round class="botones" to="/proyectos" flat>
                         Ir a Proyectos 
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </v-layout>
                <v-layout class="skw-page skw-page-3">
                  <div class="skw-page__half skw-page__half--left">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                        <h2 class="skw-page__heading my-5">Comunidad</h2>
                        <p class="skw-page__description my-5">Mirá quienes están detrás de los proyectos, en qué lenguajes programan, qué proyectos actuales tienen y cómo contactarlxs.</p>
                        <v-btn flat round class="botones" to="/comunidad">Conocelxs</v-btn>
                      </div>
                    </div>
                  </div>
                  <div class="skw-page__half skw-page__half--right">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                        
                      </div>
                    </div>
                  </div>
    </v-layout>
    <v-layout class="skw-page skw-page-4">
                  <div class="skw-page__half skw-page__half--left">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content"></div>
                    </div>
                  </div>
                  <div class="skw-page__half skw-page__half--right">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                        <h2 class="skw-page__heading my-5">Eventos</h2>
                        <p class="skw-page__description my-5">Enterate de qué se está haciendo, dónde y cuándo.</p>
                        <v-btn round flat class="botones" to="/eventos">Próximas fechas</v-btn>
                      </div>
                    </div>
                  </div>
                </v-layout>
                <div class="skw-page skw-page-5">
                  <div class="skw-page__half skw-page__half--left">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                        <h2 class="skw-page__heading my-5">Contacto</h2>
                        <p class="skw-page__description my-5">
                          ¿Tenés alguna consulta para las que hacemos chicasprogramando.com o querés sumarte a la página? </p>
                          <v-btn round flat class="botones" to="/contacto">Hablemos</v-btn>
                          <!--<a class="skw-page__link" href="https://codepen.io/suez/pens/public/" target="_blank">my other pens</a> and follow me on 
                          <a class="skw-page__link" href="https://twitter.com/NikolayTalanov" target="_blank">Twitter</a>-->
                       
                      </div>
                    </div>
                  </div>
                  <div class="skw-page__half skw-page__half--right">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content"></div>
                    </div>
                  </div>
                </div>
        </v-container>
</template> 
<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  mounted(){
  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });

  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });    
  }
}

//$(document).ready(function() { fue borrado, no usar en vue.

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /*colores violeta, el primero es con opacity background-color: rgb(126,87,194,0.9);
    color: #7e64ab;*/
*, *:before, *:after {
  margin: 0;
  padding: 0;
}

body {
  background: #15181A;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

.skw-pages {
  overflow: hidden;
  position: relative;
  height: 91.5vh;
  display: flex;
  align-items: flex-end;
}

.skw-page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
.skw-page__half {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100vh;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
}
.skw-page__half--left {
  left: 0;
  -webkit-transform: translate3d(-32.4vh, 100%, 0);
          transform: translate3d(-32.4vh, 100%, 0);
}
.skw-page__half--right {
  left: 49.9%;
  -webkit-transform: translate3d(32.4vh, -100%, 0);
          transform: translate3d(32.4vh, -100%, 0);
}
.skw-page.active .skw-page__half {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.skw-page__skewed {
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 140%;
  height: 100%;
  -webkit-transform: skewX(-18deg);
          transform: skewX(-18deg);
  background:#7e64ab;
}
.skw-page__half--left .skw-page__skewed {
  left: -40%;
}
.skw-page__half--right .skw-page__skewed {
  right: -40%;
}
.skw-page__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 30%;
  color: #fff;
  -webkit-transform: skewX(18deg);
          transform: skewX(18deg);
  transition: opacity 1s, -webkit-transform 1s;
  transition: transform 1s, opacity 1s;
  transition: transform 1s, opacity 1s, -webkit-transform 1s;
  background-size: cover;
}
.skw-page__half--left .skw-page__content {
  padding-left: 30%;
  padding-right: 30%;
  -webkit-transform-origin: 100% 0;
          transform-origin: 100% 0;
}
.skw-page__half--right .skw-page__content {
  padding-left: 30%;
  padding-right: 30%;
  -webkit-transform-origin: 0 100%;
          transform-origin: 0 100%;
}
.skw-page.inactive .skw-page__content {
  opacity: 0.5;
  -webkit-transform: skewX(18deg) scale(0.95);
          transform: skewX(18deg) scale(0.95);
}
.skw-page__heading {
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 5vh;
  text-align: left;
}
.skw-page__description {
  font-size: 20px;
  text-align: left;
}
.skw-page__link {
  color: #FFA0A0;
}
.skw-page-1 .skw-page__half--right .skw-page__content {
background-image: url("../../assets/blur-close-up-depth-of-field-911685.jpg");
}
.skw-page-1 .skw-page__half--left .skw-page__content {
  background:  #7e64ab;
}
.skw-page-2 .skw-page__half--right .skw-page__content {
  background:  #7e64ab;
}
.skw-page-2 .skw-page__half--left .skw-page__content {
  background-image: url("../../assets/astronomy-atmosphere-aviation-586056.jpg");
}
.skw-page-3 .skw-page__half--right .skw-page__content {
  background-image: url("../../assets/discovery-earth-nasa-23789.jpg");
}
.skw-page-3 .skw-page__half--left .skw-page__content {
  background: #7e64ab;
}
.skw-page-4 .skw-page__half--right .skw-page__content {
  background:  #7e64ab;
}
.skw-page-4 .skw-page__half--left .skw-page__content {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg");
}
.skw-page-5 .skw-page__half--right .skw-page__content {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg");
}
.skw-page-5 .skw-page__half--left .skw-page__content {
  background:  #7e64ab;
} 

.botones{
  width: 25vh;
  height: 8vh;
  font-size: 1.5rem;
  text-transform: none;
  border: solid 2px white;
  background-color: transparent;
  color: white;
}

.botones1{
  width: 25vh;
  height: 8vh;
  font-size: 1.5rem;
  text-transform: none;
  color: #7e64ab; 
}

.scroll{
  font-size: 1.5rem;
  text-transform: none;
  border: solid white;
  color: white;
}
</style>