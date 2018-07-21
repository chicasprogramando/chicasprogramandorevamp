<template>
  <v-container fluid class="main">
      <v-layout align-space-between justify-space-between fill-height row/>
        
        <v-layout row>
          <v-flex xs6 order-lg2 class="left">
            <h1>Eventos y capacitaciones</h1>
            <p class="subtitle">Buscamos hacer crecer a nuestras coders y a todos aquellos que deseen sumarse a nuestras capacitaciones y meetups.</p>
        
            <v-card class="cards">
              <v-container fluid grid-list-md>
                  <v-layout row align-space-around>
                    <v-flex xs10>
                      <div>
                        <span class="date">12/07/2018</span>
                        <span class="place">Centro Cultural Recoleta</span>              
                        <v-card-text class="event">Vue.js Meetup</v-card-text>
                      </div>
                    </v-flex>
                    <v-flex xs2>
                      <v-btn  fab dark right small color="purple">
                        <v-icon>arrow_right</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
              </v-container>
           </v-card>

            <v-card class="cards">
              <v-container fluid grid-list-md>
                  <v-layout row align-space-around>
                    <v-flex xs10>
                      <div>
                        <span class="date">12/07/2018</span>
                        <span class="place">Centro Cultural Recoleta</span>              
                        <v-card-text class="event">Vue.js Meetup</v-card-text>
                      </div>
                    </v-flex>
                    <v-flex xs2>
                      <v-btn fab dark right small color="purple">
                        <v-icon>arrow_right</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
              </v-container>
            </v-card>

            <v-card class="cards">
              <v-container fluid grid-list-md>
                  <v-layout row align-space-around>
                    <v-flex xs10>
                      <div>
                        <span class="date">12/07/2018</span>
                        <span class="place">Centro Cultural Recoleta</span>              
                        <v-card-text class="event">Vue.js Meetup</v-card-text>
                      </div>
                    </v-flex>
                    <v-flex xs2>
                      <v-btn  fab dark right small color="purple">
                        <v-icon>arrow_right</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
              </v-container>
          </v-card>

          <v-card class="cards">
              <v-container fluid grid-list-md>
                  <v-layout row align-space-around>
                    <v-flex xs10>
                      <div>
                        <span class="date">12/07/2018</span>
                        <span class="place">Centro Cultural Recoleta</span>              
                        <v-card-text class="event">Vue.js Meetup</v-card-text>
                      </div>
                    </v-flex>
                    <v-flex xs2>
                      <v-btn  fab dark right small color="purple">
                        <v-icon>arrow_right</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
              </v-container>
           </v-card>

            <v-card class="cards">
              <v-container fluid grid-list-md>
                  <v-layout row align-space-around>
                    <v-flex xs10>
                      <div>
                        <span class="date">12/07/2018</span>
                        <span class="place">Centro Cultural Recoleta</span>              
                        <v-card-text class="event">Vue.js Meetup</v-card-text>
                      </div>
                    </v-flex>
                    <v-flex xs2 justify-end>
                      <v-btn  fab dark right small color="purple">
                        <v-icon>arrow_right</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex xs6 class="right" color="purple">
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
          </v-flex>
      
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
  padding:0;
}
.left{
  margin: 0 1em 0 1.5em;
  padding-top:1.5em;
}
.right{
  background-color:#7e64ab;
  opacity:0.8;
  background-image: url(../../assets/bgimageSixx.png);
  background-size:100%;
  margin-left:1em;
  padding: 1.5em 1.5em;
}
h1{
  color:#7e64ab;
  font-weight:300;
  font-size:1.5em;
}
h2{
  color:#ffffff;
  font-weight:300;
  margin-bottom: 1em;
}
.subtitle{
  color:#7e64ab;
  font-weight:300;
  font-size:12px;
  line-height:14px;
  margin:0.6em 0 1.5em 0;
}
.place {
  color: #7e64ab;
  font-size:12px;
}
.date{
  font-size:11px;
  background-color:#7e64ab;
  padding:0.5em;
  margin-right:0.8em;
  color:#ffffff;
}
.cards{
  margin: 0.8em 0;
}
.twits{
  margin:0.4em 0;
  opacity:0.9;
}
.event{
  padding:0.6em 0 0 0;
}
</style>