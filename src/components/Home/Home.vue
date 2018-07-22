<template>
<v-container class="skw-pages" fluid pa-0>
    <v-layout class="skw-page skw-page-1 active">
                  <div class="skw-page__half skw-page__half--left">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content"></div>
                    </div>
                  </div>
                  <div class="skw-page__half skw-page__half--right">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                        <h2 class="skw-page__heading">Skewed One Page Scroll</h2>
                        <p class="skw-page__description">Just scroll down</p>
                      </div>
                    </div>
                  </div>
    </v-layout>
    <v-layout class="skw-page skw-page-2">
                  <div class="skw-page__half skw-page__half--left">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                        <h2 class="skw-page__heading">Page 2</h2>
                        <p class="skw-page__description">Nothing to do here, continue scrolling.</p>
                      </div>
                    </div>
                  </div>
                  <div class="skw-page__half skw-page__half--right">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content"></div>
                    </div>
                  </div>
                </v-layout>
                <v-layout class="skw-page skw-page-3">
                  <div class="skw-page__half skw-page__half--left">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content"></div>
                    </div>
                  </div>
                  <div class="skw-page__half skw-page__half--right">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                        <h2 class="skw-page__heading">Page 3</h2>
                        <p class="skw-page__description">The end is near, I promise!</p>
                      </div>
                    </div>
                  </div>
    </v-layout>
    <v-layout class="skw-page skw-page-4">
                  <div class="skw-page__half skw-page__half--left">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                        <h2 class="skw-page__heading">Page 4</h2>
                        <p class="skw-page__description">Ok, ok, just one more scroll!</p>
                      </div>
                    </div>
                  </div>
                  <div class="skw-page__half skw-page__half--right">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content"></div>
                    </div>
                  </div>
                </v-layout>
                <div class="skw-page skw-page-5">
                  <div class="skw-page__half skw-page__half--left">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content"></div>
                    </div>
                  </div>
                  <div class="skw-page__half skw-page__half--right">
                    <div class="skw-page__skewed">
                      <div class="skw-page__content">
                        <h2 class="skw-page__heading">Epic finale</h2>
                        <p class="skw-page__description">
                          Feel free to check 
                          <a class="skw-page__link" href="https://codepen.io/suez/pens/public/" target="_blank">my other pens</a> and follow me on 
                          <a class="skw-page__link" href="https://twitter.com/NikolayTalanov" target="_blank">Twitter</a>
                        </p>
                      </div>
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
  }
}

import JQuery from 'jquery'
let $ = JQuery

$(document).ready(function() {

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

});



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
  height: 100vh;
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
  font-size: 25px;
  text-align: center;
}
.skw-page__description {
  font-size: 18px;
  text-align: center;
}
.skw-page__link {
  color: #FFA0A0;
}
.skw-page-1 .skw-page__half--left .skw-page__content {
  background-image: url("../../assets/blur-close-up-depth-of-field-911685.jpg");
}
.skw-page-1 .skw-page__half--right .skw-page__content {
  background: #1bb33c;
}
.skw-page-2 .skw-page__half--left .skw-page__content {
  background: #c71e1e;
}
.skw-page-2 .skw-page__half--right .skw-page__content {
  background-image: url("../../assets/astronomy-atmosphere-aviation-586056.jpg");
}
.skw-page-3 .skw-page__half--left .skw-page__content {
  background-image: url("../../assets/discovery-earth-nasa-23789.jpg");
}
.skw-page-3 .skw-page__half--right .skw-page__content {
  background: #39409e;
}
.skw-page-4 .skw-page__half--left .skw-page__content {
  background: #9c952c;
}
.skw-page-4 .skw-page__half--right .skw-page__content {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg");
}
.skw-page-5 .skw-page__half--left .skw-page__content {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg");
}
.skw-page-5 .skw-page__half--right .skw-page__content {
  background: #af5c17;
} 
</style>