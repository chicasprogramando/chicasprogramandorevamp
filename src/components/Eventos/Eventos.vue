<template>
  <v-container fluid class="main">
    <v-layout align-space-between justify-space-between row fill-height height="100%">
      <v-flex md6 class="left" height="100%" fill-height>
        <h1>Eventos y capacitaciones</h1>
        <p class="subtitle">Buscamos hacer crecer a nuestras coders y a todos aquellos que deseen sumarse a nuestras capacitaciones y meetups.</p>
        <v-card class="cards">
          <v-container fluid grid-list-md>
            <v-layout row align-content-space-between>
              <v-flex sm11>
                <div>
                  <span class="date">12/07/2018</span>
                  <span class="place">Centro Cultural Recoleta</span>              
                  <v-card-text class="event">Vue.js Meetup</v-card-text>
                </div>
              </v-flex>
              <v-flex sm1 class="arrow-div">
                <figure>  
                  <img src="../../assets/arrow-btn.png">  
                </figure>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <v-card class="cards">
          <v-container fluid grid-list-md>
            <v-layout row align-content-space-between>
              <v-flex sm11>
                <div>
                  <span class="date">12/07/2018</span>
                  <span class="place">Centro Cultural Recoleta</span>              
                  <v-card-text class="event">Vue.js Meetup</v-card-text>
                </div>
              </v-flex>
              <v-flex sm1 class="arrow-div">
                <figure>  
                  <img src="../../assets/arrow-btn.png">  
                </figure>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <v-card class="cards">
          <v-container fluid grid-list-md>
            <v-layout row align-space-around>
              <v-flex sm11>
                <div>
                  <span class="date">12/07/2018</span>
                  <span class="place">Centro Cultural Recoleta</span>              
                  <v-card-text class="event">Vue.js Meetup</v-card-text>
                </div>
              </v-flex>
              <v-flex sm1 class="arrow-div">
                <figure>  
                  <img src="../../assets/arrow-btn.png">  
                </figure>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <v-card class="cards">
          <v-container fluid grid-list-md>
            <v-layout row align-space-around>
              <v-flex sm11>
                <div>
                  <span class="date">12/07/2018</span>
                  <span class="place">Centro Cultural Recoleta</span>              
                  <v-card-text class="event">Vue.js Meetup</v-card-text>
                </div>
              </v-flex>
              <v-flex sm1 class="arrow-div">
                <figure>  
                  <img src="../../assets/arrow-btn.png">  
                </figure>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <v-card class="cards">
          <v-container fluid grid-list-md>
            <v-layout row align-space-around>
              <v-flex sm11>
                <div>
                  <span class="date">12/07/2018</span>
                  <span class="place">Centro Cultural Recoleta</span>              
                  <v-card-text class="event">Vue.js Meetup</v-card-text>
                </div>
              </v-flex>
              <v-flex sm1 class="arrow-div">
                <figure>  
                  <img src="../../assets/arrow-btn.png">  
                </figure>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

      </v-flex>

      <v-card sm6 class="right" fill-height>
          <h2>Otras capacitaciones</h2>

          <v-card flat class="twits">
            <v-card-text  class="text-xs-center">Twit</v-card-text>
          </v-card>

          <v-card flat class="twits">
            <v-card-text class="text-xs-center">Twit</v-card-text>
          </v-card>
        
          <v-card flat class="twits">
            <v-card-text class="text-xs-center">Twit</v-card-text>
          </v-card>
    
          <v-card flat class="twits">
            <v-card-text class="text-xs-center">Twit</v-card-text>
          </v-card>
        
          <v-card flat class="twits">
            <v-card-text class="text-xs-center">Twit</v-card-text>
          </v-card>

          <v-card flat class="twits">
            <v-card-text class="text-xs-center">Twit</v-card-text>
          </v-card>
        </v-card>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Eventos',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  margin:0;
  padding: 0;
}
.left{
  padding: 1.5em;
}
.right{
  background-color:#7e64ab;
  opacity:0.8;
  background-image: url(../../assets/bgimageSixx.png);
  width:50%;
  /*margin-left:1em;*/
  padding: 1.5em 1.5em;
}
h1{
  color:#7e64ab;
  font-weight:300;
  font-size:2em;
}
h2{
  color:#ffffff;
  font-weight:300;
  margin-bottom: 1em;
  font-size: 2em;
}
.subtitle{
  color:#7e64ab;
  font-weight:300;
  font-size:15px;
  line-height:18px;
  margin:0.8em 0 1.5em 0;
}
.place {
  color: #7e64ab;
  font-size:13px;
}
.date{
  font-size:12px;
  background-color:#7e64ab;
  padding:0.5em 1em;
  margin-right:0.8em;
  color:#ffffff;
}
.cards{
  margin: 0.9em 0;
  padding: 0.3em;
  display: flex;
  justify-content: space-between;
  align-content:center;
}
.twits{
  margin:0.7em 0;
  padding: 0.5em;
  opacity:0.9;
}
.event{
  padding:1em 0 0 0;
}
.next-btn{
  text-align: right;
  display: flex;
  justify-content: flex-end;
}
.arrow-div{
  margin-top: 0.5em;
  cursor:pointer;
}
</style>
