  <template>
<div class="terms">
    <div class="purple__colorbg">
 <v-container class="grey lighten-5 terms__card">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="12"
        lg="12"
        md="12"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-card-title primary-title>
          <v-img :src="require('@/assets/logo200.png')" contain height="100"></v-img>
        </v-card-title>
        <v-card-text>
<p>En caso de que seas testigue de conductas similares a las descritas por favor contacta a chicasprogramandoarg@gmail.com</p>

<p>Declaración de valores y código de conducta para les mentores, organizadores, miembres de la comunidad y público en general que asiste y participa en espacios físicos y virtuales de Chicas Programando. Como comunidad abierta, horizontal, y facilitadora de espacios seguros para les programadores, nos sostenemos sobre la buena predisposición y adhesión a nuestro código de conducta. Esto implica: </p>

<ol>

<li>Tolerancia cero frente al acoso, el abuso, la discriminación selectiva, la instigación a la violencia, la extorsión, la humillación y el hostigamiento. A chistes, comentarios y actitudes machistas, sexistas, racistas, homofóbicos, xenófobos, transodiantes y condescendientes, al uso de la imagen del otre con fines humillantes, avances no deseados, la intimidación deliberada, el acecho, el seguimiento, el acoso con fotografía o grabación, la interrupción sostenida de charlas y otros intercambios incómodos.</li>

<li>Entendemos que la violencia puede ser visible y/o invisible y es por eso que la interpretación de estos actos no se limita a expresiones físicas ni espaciales, sino que comprende también las dimensiones verbales y simbólicas.</li>

<li>Atendemos al art. 19 de la CN y a la interpretación constitucionalista en el Derecho argentino según Zaffaroni (2000) y Becerra (2009). En otras palabras, entendemos por libertad de expresión todos aquellos actos que no coarten las libertades de otres individues ni tiendan a dañar a terceres. Si les implicara y es expresada en el ámbito público, entonces se convertiría en un acto de naturaleza regulable y punible.</li>

 <li>Aceptamos y buscamos abierta y explícitamente la aceptación de la Otredad y la incorporación de minorías de poder y grupos leídos socialmente como disidentes. Buscamos construir un espacio seguro para todos los grupos interseccionales.</li>

 <li>Varones cisgénero podrán incorporarse a los eventos de Chicas Programando. Entendemos que la única forma de comenzar a balancear la enorme disparidad de los grupos históricamente dejados afuera es construir espacios donde trabajamos en comunidad, de manera interdisciplinaria, colaborativa e inclusiva, siempre y cuando se adhieran al código de conducta.</li>

 <li>Defendemos la igualdad de oportunidades de formación, educación, intercambio y retroalimentación antes, durante y después de los eventos.</li>

<li>Ante una situación que no respete los valores declarados anteriormente, nos comprometemos al tratamiento de estos casos de manera honesta y clara; y establecemos el siguiente protocolo de acción a ser utilizado y respetado por todas las partes involucradas.</li>
    </ol>

<p>Notas y referencias</p>
<ul>

<li>Basterra, M., “El derecho a la intimidad”, en Sabsay, D., Manili, P., Constitución de la Nación Argentina y normas complementarias. Análisis doctrinal y jurisprudencial, Hammurabi, Buenos Aires, 2009.</li>
<li>Mir Puig, S., Derecho Penal. Parte General, B de F, Montevideo-Buenos Aires, 2005.</li>
<li>Nino, C. S., Ética y Derechos Humanos, Astrea, Buenos Aires, 1989.</li>
<li>Zaffaroni, E. R., Alagia, A., Slokar, A., Derecho Penal. Parte General, Ediar, Buenos Aires, 2000.</li>
</ul>

<p>Este código de conducta se implementa en alianza con las siguientes organizaciones:</p>
<p>Vita-Activa.org </p>



        </v-card-text>
        <v-card-actions>
          <v-btn
            dark
            rounded
            color="deep-purple lighten-1"
            class="terms__btn"
            @click="acceptedTerms()"
          >Acepto código de conducta</v-btn>
        </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
  </div>
</template>
          
<script>
export default {
  name: "Login",
  methods: {
    acceptedTerms() {
      this.$store.dispatch("acceptedTerms", {accepted_terms: true});
    }
  },
  data: () => ({
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.terms {
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url("../../assets/comunidad.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.terms__card {
      max-height: 80vh;
    overflow: scroll;
    text-align: left;
}

.terms__btn {
  margin: 0 auto;
  margin-bottom: 10px;
}
</style>