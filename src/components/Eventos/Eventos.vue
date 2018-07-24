<template>
  <v-container fluid class="main">
    <v-layout align-space-between justify-space-between row fill-height height="100%">
      <v-flex md6 class="left" height="100%" fill-height>
        <div class="headerDiv">
          <h2>Buscador de Proyectos</h2>
          <figure>
            <img src="../../assets/modal-btn2.png" alt="">
          </figure>
        </div>
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

      
      <v-flex md6 class="rightForm" flat fill-height align-center>
        <div class="form-width">
          <h2>Crear nuevo evento</h2>
          <v-form ref="form" v-model="valid">
            <v-text-field color="purple"
              v-model="eventName"
              :rules="campoRequeridoRules"
              label="Nombre del evento"
              required
            ></v-text-field>
            <v-text-field color="purple"
              v-model="date"
              :rules="campoRequeridoRules"
              label="Fecha"
              required
            ></v-text-field>
            <v-text-field color="purple" 
              v-model="place"
              :rules="campoRequeridoRules"
              label="Lugar"
              required
            ></v-text-field>
            <v-text-field color="purple"
                v-model="fileLink"
                :rules="campoRequeridoRules"
                label="Link del proyecto"
                required
              ></v-text-field>
            
            <v-flex class="formBtns">
                <v-btn class='btns' color='purple'>Crear</v-btn>
                <v-btn color='purple' class='btns'>Limpiar</v-btn>
                <v-btn color='purple' class='btns'>Cancelar</v-btn>
            </v-flex>
            </v-form>
          </div>
        </v-flex>  

      </v-layout>
  </v-container>
</template>

<script>
import { campoRequeridoRules } from '../../validaciones'
export default {
  name: 'Eventos',
  data () {
    return {
      valid: false,
      campoRequeridoRules:campoRequeridoRules,
    }
  },
  methods: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  margin:0;
  padding: 0;
  background-color: #ffffff;

}
.left{
  padding: 1.5em;
}
.rightForm{
  opacity:0.8;
  width:50%;
  padding: 10em 13% 1.5em 13%;
}
.headerDiv{
  display: flex;
  justify-content: space-between;
}
.headerDiv figure {
  width: 48px;
  height:48px;
}
.headerDiv figure img{
  width: 100%;
  height: auto;
}
h1,h2{
  color:#7e64ab;
  font-weight:300;
  font-size:2em;
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
.formBtns{
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
.text-field  input, .text-field label{
    color: #7E57C2 !important;
}
.btn{
  padding: 0 2px 0 2px;
  margin:0;
  background: #7e64ab;
  color: #ffffff;
  border-radius: 18px;
  font-size: 12px;
}
</style>
