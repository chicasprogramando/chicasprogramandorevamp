  <template>
  <v-layout align-center justify-start class="login">
    <v-flex class="purple__colorbg">
      <v-card xs12 class="login__card">
        <v-card-title primary-title>
          <v-img :src="require('@/assets/logo200.png')" contain height="100"></v-img>
        </v-card-title>
          <div>
          <p class="login__text">Quiero unirme a esta comunidad</p>
          </div>
        <v-card-actions>
          <v-btn dark rounded color="deep-purple lighten-1" class="login__btn" @click="auth0Login()">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
          
<script>
export default {
  name: "Login",
  methods: {
    auth0Login(){
      this.$store.dispatch('auth0Login')
    }
  },
  data: () => ({
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url("../../assets/comunidad.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.login__card {
      width: 100%;
    max-width: 500px;
}

.login__text {
  font-size: 20px;
  color: #7e64ab;
  margin: 0 auto;
  margin-bottom: 5px;
  margin-top: 5px;
}

.login__btn {
  margin: 0 auto;
  margin-bottom: 10px;
}

</style>