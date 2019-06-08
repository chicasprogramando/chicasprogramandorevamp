<template>
  <v-layout align-center justify-start class="signup">
    <v-flex class="signup__colorbg">
      <div xs12 sm5 offset-sm1 class="tarjeta">
        <div class="tarjeta__flex">
          <div class="tarjeta__title--border">
            <h2 class="tarjeta__title">Sign Up</h2>
          </div>
          <v-form @submit.prevent="signup" ref="form">
            <v-text-field
              v-model="username"
              label="User Name"
              type="text"
              :rules="campoRequeridoRules"
              id="inputUsername"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              type="email"
              :rules="emailRules"
              id="inputEmail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              hint="At least 8 characters"
              type="password"
              id="inputPassword"
              label="Password"
              :rules="campoRequeridoRules"
              counter
              @click:append="show1 = !show1"
              required
            ></v-text-field>
            <v-text-field
              v-model="repeatPassword"
              hint="At least 8 characters"
              type="password"
              id="inputRepeatPassword"
              label="Repeat Password"
              :rules="campoRequeridoRules"
              counter
              @click:append="show1 = !show1"
              required
            ></v-text-field>
            <v-flex class="form__btns">
              <v-btn
                round
                class="form_btns--white"
                color="deep-purple lighten-1"
                dark
                @click="submit()"
              >Sign Up</v-btn>
            </v-flex>
          </v-form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import {
    emailRules,
    campoRequeridoRules
  } from "../../utils/validaciones.js";
  export default {
    name: "Signup",
    data: () => ({
      valid: false,
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
      emailRules: emailRules,
      campoRequeridoRules: campoRequeridoRules,
    }),
    methods: {
      submit() {
        console.log('submitted from Signup')
      },
      clear() {
        this.$refs.form.reset();
      }
    }
  }
</script>

<style>
.signup {
  width: 100%;
  height: 100%;
}

.signup__colorbg {
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
  /* background: rgb(125, 99, 171);
  background: -webkit-linear-gradient(45deg, rgba(125, 99, 171, 0.8), rgba(166, 134, 216, 0.8));
  background: -o-linear-gradient(45deg, rgba(125,99,171,0.8), rgb(166, 134, 216, 0.8));
  background: -moz-linear-gradient(45deg, rgba(125,99,171,0.8), rgb(166, 134, 216, 0.8));
  background: linear-gradient(45deg, rgba(125,91,171,0.8), rgb(166,134,216,0.8));  */
}

.tarjeta {
  min-width: 350px;
  max-width: 750px;
  background: #fff;
  border-radius: 3px;
  overflow: hidden;
  padding-bottom: 1.6rem;
  margin: 0 1.5rem;
  /* width: 100%; */
  box-shadow: 1px 2px 8px 2px rgba(204, 173, 255, 0.8);
}

.tarjeta__flex {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tarjeta__title--border {
  width: 100%;
  margin: 1em 0;
  border-bottom: 1px solid rgba(125, 99, 171, 0.8);
}

.tarjeta__title {
  text-align: center;
  /* font-size: 30px; */
  padding-bottom: 0.1em;
  color: rgba(125, 99, 171, 0.8);
}

.signup--logo {
  width: 100px;
  height: 100px;
  margin: 1em;
}

form {
  width: 80%;
}

.form__btns {
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
}

.form_btns--white {
  color: grey;
  width: 100px;
}

.signup__btn--padding {
  /* padding-bottom: 1.5rem; */
  padding: 0.5rem 0 1.5rem 0;
}

.register-text__padding {
  padding: 1em;
}

.input-group {
  color: #7e64ab !important;
}

.input-group__details::before {
  height: 1px;
  background-color: rgba(0, 0, 0, 0.42);
}

.text-field input,
.text-field label {
  color: #7e57c2 !important;
}
.input-group__error {
  color: #ff5252 !important;
}

.signup-link__container .signup-link__color {
  color: #7e64ab;
  padding-bottom: 1rem;
}

</style>
