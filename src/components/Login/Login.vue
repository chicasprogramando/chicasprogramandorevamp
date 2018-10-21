  <template>   
  <v-layout align-center justify-start class="login">
    <v-flex class="login__colorbg">
      <div xs12 sm5 offset-sm1 class="tarjeta">
        <div class="tarjeta__flex">
          <img class="login--logo" src="@/assets/logo200.png" alt="">
          <v-form v-model="valid" ref="form">  
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
              <v-text-field
              v-model="password"
              :append-icon="show1 ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
          ></v-text-field>
             <v-flex class="form__btns">
              <v-btn round class='form_btns--white' color='deep-purple lighten-1' dark @click="submit" >Log in</v-btn>
            </v-flex>
          </v-form>
        </div>
      </div>
    </v-flex>
  </v-layout> 
</template>
          
<script>
import { nombreRules, emailRules, campoRequeridoRules, descripcionRules } from '../../validaciones'
import Icons from "@/components/Otros/Icons"

export default {
  name: 'Login',
  components: {
    Icons
  },
  data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
    }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
        descripcion: this.descripcion, 
        })
      }
    },
    clear () {
    this.$refs.form.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login{
  width: 100%;
  height: 100%;
  background-image: url('../../assets/teclado.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  
}

.login__colorbg{
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
  background: -webkit-linear-gradient(45deg, rgba(125, 99, 171, 0.8), rgba(166, 134, 216, 0.8));
  background: -o-linear-gradient(45deg, rgba(125,99,171,0.8), rgb(166, 134, 216, 0.8));
  background: -moz-linear-gradient(45deg, rgba(125,99,171,0.8), rgb(166, 134, 216, 0.8));
  background: linear-gradient(45deg, rgba(125,91,171,0.8), rgb(166,134,216,0.8)); 
}

.tarjeta{
  width: 100%;
  max-width: 750px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 2rem;
  margin: 0 1.5rem;
}

.tarjeta__flex{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login--logo {
  width: 100px;
  padding: 1em;
}

h2 {
  color: #7e64ab;
  font-size: 3.5rem;
  padding-top: 1rem;
  font-weight: 600;
  text-transform: uppercase;
}

form{
width: 80%;
}

.form__btns{
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
}

.form_btns--white{
  color: grey;
  width: 100px;
}
</style>