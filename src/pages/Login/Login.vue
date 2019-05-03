  <template>
  <v-layout align-center justify-start class="login">
    <v-flex class="login__colorbg">
      <div xs12 sm5 offset-sm1 class="tarjeta">
        <div class="tarjeta__flex">
          <!-- <img class="login--logo" src="@/assets/logo200.png" alt=""> -->
          <div class="tarjeta__title--border">
            <h2 class="tarjeta__title">Admin Login</h2>
          </div>
          <v-form @submit.prevent="login" ref="form">
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
            <v-flex class="form__btns">
              <v-btn
                round
                class="form_btns--white"
                color="deep-purple lighten-1"
                dark
                @click="submit()"
              >Log in</v-btn>
            </v-flex>
          </v-form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
          
<script>
// import axios from 'axios'; ** habria que instalar axios npm i --save axios
import {
  nombreRules,
  emailRules,
  campoRequeridoRules,
  descripcionRules
} from "../../utils/validaciones.js";
import Icons from "@/components/Icons/Icons";

export default {
  name: "Login",
  components: {
    Icons
  },
  data: () => ({
    valid: false,
    email: "",
    emailRules: emailRules,
    password: "",
    campoRequeridoRules: campoRequeridoRules,

    // temporarily removing this since I dont think its neccessary
    // name: '',
    // nameRules: [
    //   v => !!v || 'Name is required',
    //   v => v.length <= 10 || 'Name must be less than 10 characters'
    // ],
    // email: '',
    // emailRules: [
    //   v => !!v || 'E-mail is required',
    //   v => /.+@.+/.test(v) || 'E-mail must be valid'
    // ],

    // ask if i should move this to validaciones.js
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
  }),
  methods: {
    submit() {
      // if (this.$refs.form.validate()) {
      //   // Native form submission is not yet supported
      //   axios.post('/api/submit', {
      //   descripcion: this.descripcion,
      //   })
      console.log("email: ", this.email, "pass:", this.password);
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 100%;
  /* background-image: url('../../assets/teclado.jpg');
  background-repeat: no-repeat;
  background-size: cover; */
}

.login__colorbg {
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
  padding-bottom: 1.2rem;
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

.login--logo {
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
</style>