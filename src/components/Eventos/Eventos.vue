<template>
  <v-container fluid class="main">
    <v-layout align-space-between justify-space-between row fill-height height="100%">
      <v-flex md6 class="main__v-flex--left" height="100%" fill-height>
        <h1 class="v-flex__h1">Eventos y capacitaciones</h1>
        <p class="v-flex__subtitle">Buscamos hacer crecer a nuestras coders y a todos aquellos que deseen sumarse a nuestras capacitaciones y meetups.</p>
        <v-card class="cards" v-for="(event,index) in events" :key="index">
          <v-container fluid grid-list-md>
            <v-layout row align-content-space-between>
              <v-flex sm11>
                <div>
                  <span class="cards__span--colorSize">{{ formatedEvents(event.date) }}</span>
                  <span class="cards__span--background">{{ event.place }}</span>              
                  <v-card-text class="cards__v-card-text--padding">{{ event.name }}</v-card-text>
                </div>
              </v-flex>
              <v-flex sm1 class="button v-flex--margin">
                <figure>  
                  <img src="../../assets/arrow-btn.png">  
                </figure>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>

      <v-card sm6 class="main__v-card--right" fill-height>
          <h2 class="v-flex__h2">Otras capacitaciones</h2>
          <v-flex v-for="(twit,index) in 8" :key="index"> 
            <v-card flat class="v-flex__twits">
              <v-card-text  class="text-xs-center">Twit</v-card-text>
            </v-card>
          </v-flex>
        </v-card>
      </v-layout>
      <form-eventos></form-eventos>
  </v-container>
</template>

<script>
import FormEventos from '@/components/Otros/FormEventos';
export default {
  name: 'Eventos',
  components: {
    FormEventos
  },
  data () {
    return { }
  },
  computed: {
    events() {
      return this.$store.getters.getEvents;
    }
  },
  methods: {
    formatedEvents(event) {
      return event.split('-').reverse().join('/');
    }
  },
}
</script>

<style scoped>
.main{
  margin:0;
  padding: 0;
}
.main__v-flex--left{
  padding: 1.5em;
}
.main__v-card--right{
  background-color:#7e64ab;
  opacity:0.8;
  background-image: url(../../assets/bgimageSixx.png);
  width:50%;
  padding: 1.5em 1.5em;
}
.v-flex__h1{
  color:#7e64ab;
  font-weight:300;
  font-size:2em;
}
.v-flex__h2{
  color:#ffffff;
  font-weight:300;
  margin-bottom: 1em;
  font-size: 2em;
}
.v-flex__subtitle{
  color:#7e64ab;
  font-weight:300;
  font-size:15px;
  line-height:18px;
  margin:0.8em 0 1.5em 0;
}
.cards__span--colorSize {
  color: #7e64ab;
  font-size:13px;
}
.cards__span--background{
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
.v-flex__twits{
  margin:0.7em 0;
  padding: 0.5em;
  opacity:0.9;
}
.cards__v-card-text--padding{
  padding:1em 0 0 0;
}
.v-flex--margin{
  margin-top: 0.5em;
  cursor:pointer;
}
</style>