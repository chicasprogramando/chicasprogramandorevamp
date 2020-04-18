<template>
  <v-layout align-center justify-start class="contact">
    <v-flex class="contact__colorbg">
      <div xs12 sm5 offset-sm1 class="tarjeta">
        <div class="tarjeta__flex">
          <h2>HABLEMOS</h2>
          <v-card-text class="texto"
            >¿Tenés algo que contarnos? ¡Escribinos!</v-card-text
          >
          <v-form v-model="valid" ref="form">
            <v-select
              v-model="subject"
              :items="subjectList"
              label="Motivo del contacto"
              color="deep-purple"
              required
            ></v-select>
            <v-text-field
              v-if="subject === 'Otro'"
              v-model="specialSubject"
              color="deep-purple"
              :rules="textRules"
              :counter="100"
              label="Nuevo motivo"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              color="deep-purple"
              :rules="emailRules"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              default
              color="deep-purple"
              v-model="text"
              label="Consulta"
              :rules="textRules"
              counter="500"
              rows="3"
              textarea
              required
            ></v-text-field>
            <v-flex class="form__btns--container">
              <v-btn
                rounded
                color="deep-purple lighten-1"
                class="white--text"
                :disabled="!valid"
                @click="submit"
                :loading="submitLoading"
                >Enviar</v-btn
              >
              <v-btn
                dark
                rounded
                color="deep-purple lighten-1"
                class="form_btns"
                @click="clear"
                >Limpiar</v-btn
              >
            </v-flex>
          </v-form>
          <div class="email_success" v-if="emailSuccess">
            Su email ha sido enviado con éxito!
          </div>
          <div class="email_error" v-if="emailError">
            Se ha comeido un error a la hora de enviarnos el email! Por favor,
            vuelva a intentarlo.
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// import axios from "axios";
import { emailRules, descripcionRules } from "../../utils/validaciones";

export default {
  name: "Contact",
  components: {},
  data() {
    return {
      valid: false,
      emailRules: emailRules,
      textRules: descripcionRules,
      email: "",
      text: "",
      subject: "",
      specialSubject: "",
      subjectList: [
        "Quiero reportar un bug",
        "Reportar una situación incomoda",
        "Quiero hacer un evento",
        "Quiero dar una charla/taller",
        "Quiero ser sponsor",
        "Otro",
      ],
      submitLoading: false,
    };
  },
  methods: {
    submit() {
      let trueSubject;
      this.subject === "Otro"
        ? (trueSubject = this.specialSubject)
        : (trueSubject = this.subject);

      const body = {
        subject: trueSubject,
        email: this.email,
        text: this.text,
      };
      this.$store.dispatch("sendContactEmail", body);
      this.submitLoading = true;

      this.$refs.form.reset();
    },
    clear() {
      this.$refs.form.reset();
    },
  },
  computed: {
    emailSuccess() {
      const success = this.$store.getters["getEmailSuccess"];
      if (success) {
        this.submitLoading = false;
      }
      return success;
    },
    emailError() {
      const error = this.$store.getters["getEmailError"];
      return error;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/teclado.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.contact__colorbg {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgb(125, 99, 171);
  background: -webkit-linear-gradient(
    45deg,
    rgba(125, 99, 171, 0.8),
    rgba(166, 134, 216, 0.8)
  );
  background: -o-linear-gradient(
    45deg,
    rgba(125, 99, 171, 0.8),
    rgb(166, 134, 216, 0.8)
  );
  background: -moz-linear-gradient(
    45deg,
    rgba(125, 99, 171, 0.8),
    rgb(166, 134, 216, 0.8)
  );
  background: linear-gradient(
    45deg,
    rgba(125, 91, 171, 0.8),
    rgb(166, 134, 216, 0.8)
  );
}

.tarjeta {
  width: 100%;
  max-width: 750px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 2rem;
  margin: 0 1.5rem;
}

.tarjeta__flex {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h2 {
  color: #7e64ab;
  font-size: 3.5rem;
  padding-top: 1rem;
  font-weight: 600;
  text-transform: uppercase;
}

form {
  width: 80%;
}

.texto {
  color: #7e64ab;
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
}

.form__btns--container {
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
}

.form_btns {
  color: #fff;
  border-radius: 500px;
  margin: 0px 5px;
}
.email_success {
  color: #02a702;
  font-weight: bold;
}
.email_error {
  color: #ff0000;
  font-weight: bold;
}
</style>
