<template>
  <v-container fluid class="eventos">
    <v-layout align-space-between justify-space-between row fill-height height="100%">
      <v-flex md6 class="eventos__half-left" height="100%" fill-height>
        <h1 class="half-left__h1">Eventos y capacitaciones</h1>
        <p class="half-left__p">Buscamos hacer crecer a nuestras coders y a todos aquellos que deseen sumarse a nuestras capacitaciones y meetups.</p>
        <v-card class="cards" v-for="(event,index) in events" :key="index">
          <v-container fluid grid-list-md>
            <v-layout row align-content-space-between>
              <v-flex sm11>
                <div>
                  <span class="cards__date">{{ formatDate(event.date) }}</span>
                  <span class="cards__place">{{ event.place }}</span>              
                  <v-card-text class="cards__eventName">{{ event.name }}</v-card-text>
                </div>
              </v-flex>
              <v-flex sm1 class="cards__button">
                <figure>  
                  <img src="../../assets/arrow-btn.png">  
                </figure>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>

      <v-card sm6 class="eventos__half-right" fill-height>
          <h2 class="half-right__h2">Otras capacitaciones</h2>
          <v-flex v-for="(twit,index) in 10" :key="index"> 
            <v-card flat class="half-right__tweets">
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
    formatDate(date) {
      return date.split('-').reverse().join('/');
    }
  },
}
</script>

<style scoped>
.eventos{
  margin:0;
  padding: 0;
}
.eventos__half-left{
  padding: 1.5em;
}
.eventos__half-right{
  background-color:#7e64ab;
  opacity:0.8;
  background-image: url(../../assets/bgimageSixx.png);
  width:50%;
  padding: 1.5em 1.5em;
}
.half-left__h1{
  color:#7e64ab;
  font-weight:300;
  font-size:2em;
}
.half-right__h2{
  color:#ffffff;
  font-weight:300;
  margin-bottom: 1em;
  font-size: 2em;
}
.half-left__p{
  color:#7e64ab;
  font-weight:300;
  font-size:15px;
  line-height:18px;
  margin:0.8em 0 1.5em 0;
}
.cards__date {
  color: #7e64ab;
  font-size:13px;
}
.cards__place{
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
.half-right__tweets{
  margin:0.7em 0;
  padding: 0.5em;
  opacity:0.9;
}
.cards__eventName{
  padding:1em 0 0 0;
}
.cards__button{
  margin-top: 0.5em;
  cursor:pointer;
}
</style>