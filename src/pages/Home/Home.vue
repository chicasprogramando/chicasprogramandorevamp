<template>
  <v-container class="skw-pages" fluid pa-0>
    <v-layout class="skw-page skw-page-1 active">
      <div class="skw-page__half skw-page__half--left">
        <div class="skw-page__skewed">
          <div class="skw-page__content">
            <transition appear name="animar2">
              <h2 class="skw-page__heading main__header">CHICAS PROGRAMANDO</h2>
            </transition>

            <transition appear>
              <p
                class="skw-page__description mb-5"
              >Una ventana al mundo para los proyectos de mujeres en tecnología.</p>
            </transition>

            <transition class="skw-page__description mt-5" appear name="animar">
              <p class="scroll">scroll</p>
            </transition>

            <transition appear name="animar">
              <v-icon color="white" class="arrow">keyboard_arrow_down</v-icon>
            </transition>
          </div>
        </div>
      </div>
      <div class="skw-page__half skw-page__half--right">
        <div class="skw-page__skewed">
          <div class="skw-page__content"></div>
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
            <h2 class="skw-page__heading">Proyectos</h2>
            <p
              class="skw-page__description mb-4"
            >Queremos visibilizar emprendimientos que tengan al menos a una mujer o programadorx no binarie. Podés buscar por nombre del proyecto, por lenguaje o por programadorx.</p>
            <v-btn round class="botones" to="/projects" flat>Ir a Proyectos</v-btn>
          </div>
        </div>
      </div>
    </v-layout>
    <v-layout class="skw-page skw-page-3">
      <div class="skw-page__half skw-page__half--left">
        <div class="skw-page__skewed">
          <div class="skw-page__content">
            <h2 class="skw-page__heading">Comunidad</h2>
            <p
              class="skw-page__description mb-4"
            >Mirá quienes están detrás de los proyectos, en qué lenguajes programan, qué están haciendo y cómo contactarlxs.</p>
            <v-btn flat round class="botones" to="/profiles">Conocelxs</v-btn>
          </div>
        </div>
      </div>
      <div class="skw-page__half skw-page__half--right">
        <div class="skw-page__skewed">
          <div class="skw-page__content"></div>
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
            <h2 class="skw-page__heading">Eventos</h2>
            <p
              class="skw-page__description mb-4"
            >Aquí vas a enterarte de qué se está haciendo, en dónde, cuándo y cómo sumarte.</p>
            <v-btn round flat class="botones" to="/eventos">Próximas fechas</v-btn>
          </div>
        </div>
      </div>
    </v-layout>
    <div class="skw-page skw-page-5">
      <div class="skw-page__half skw-page__half--left">
        <div class="skw-page__skewed">
          <div class="skw-page__content">
            <h2 class="skw-page__heading">Contacto</h2>
            <p
              class="skw-page__description mb-4"
            >¿Tenés una consulta para quienes hacemos Chicas Programando, querés contactarnos o sumarte a la página?</p>
            <v-btn round flat class="botones" to="/contact">Hablemos</v-btn>
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
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";

    function pagination() {
      scrolling = true;

      $(pgPrefix + curPage)
        .removeClass("inactive")
        .addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");

      setTimeout(function() {
        scrolling = false;
      }, animTime);
    }

    function navigateUp() {
      if (curPage === 1) return;
      curPage--;
      pagination();
    }

    function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
    }

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

    $("#boton1").on("click", function(e) {
      if (scrolling) return;
      if (e.which === 38) {
        navigateUp();
      } else if (e.which === 40) {
        navigateDown();
      }
    });
  }
};

//$(document).ready(function() { fue borrado, no usar en vue.
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*colores violeta, el primero es con opacity background-color: rgb(126,87,194,0.9);
    color: #7e64ab;*/
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
}

body {
  background: #15181a;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

.skw-pages {
  overflow: hidden;
  position: relative;
  height: 100%;
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
  background: #7e64ab;
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
  font-size: 40px;
  font-weight: 600;
  text-align: left;
}
.skw-page__description {
  font-size: 24px;
  font-weight: 300;
  text-align: left;
}
.skw-page__link {
  color: #ffa0a0;
}
.skw-page-1 .skw-page__half--right .skw-page__content {
  background-image: url("../../assets/chicas.jpg");
}
.skw-page-1 .skw-page__half--left .skw-page__content {
  background: #7e64ab;
}
.skw-page-2 .skw-page__half--right .skw-page__content {
  background: #7e64ab;
}
.skw-page-2 .skw-page__half--left .skw-page__content {
  background-image: url("../../assets/compu.jpeg");
}
.skw-page-3 .skw-page__half--right .skw-page__content {
  background-image: url("../../assets/comunidad.jpg");
}
.skw-page-3 .skw-page__half--left .skw-page__content {
  background: #7e64ab;
}
.skw-page-4 .skw-page__half--right .skw-page__content {
  background: #7e64ab;
}
.skw-page-4 .skw-page__half--left .skw-page__content {
  background-image: url("../../assets/calendar.jpg");
}
.skw-page-5 .skw-page__half--right .skw-page__content {
  background-image: url("../../assets/puente.jpg");
}
.skw-page-5 .skw-page__half--left .skw-page__content {
  background: #7e64ab;
}

.main__header {
  font-size: 60px;
  line-height: 1;
}

.botones {
  width: 24vh;
  height: 6vh;
  font-size: 1.5rem;
  text-transform: none;
  border: solid 2px white;
  background-color: transparent;
  color: white;
  border-radius: 500px;
}

/*
.botones:hover{
  border: none;
  color: #7e64ab;
  background-color: white;
} 

.botones1{
  width: 25vh;
  height: 8vh;
  font-size: 1.5rem;
  text-transform: none;
  color: #7e64ab; 
} */

.animar-enter-active {
  transition: all 2s ease;
}
.animar-leave-active {
  transition: all 0.4s; /*cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
}
.animar-enter, .animar-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(40px);
  opacity: 0;
}

.animar2-enter-active {
  transition: all 2s ease;
}
.animar2-leave-active {
  transition: all 0.8s; /*cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
}
.animar2-enter, .animar2-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(40px);
  opacity: 0;
}

.scroll {
  margin-top: 4rem;
  font-size: 1.8rem;
  text-transform: none;
  color: white;
}

.arrow {
  font-size: 40px;
}
</style>