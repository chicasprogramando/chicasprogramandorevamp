<template>
  <v-app>
    <v-app-bar app flat>
      <v-toolbar-title class="headline text-uppercase">
        <v-img
          :src="require('./assets/logoOnly.png')"
          class="logo"
          contain
          height="100"
        ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          class="deep-purple--text lighten-1 menu-btn"
          color="white"
        >
          {{ item.title }}
        </v-btn>
        <v-btn
          to="/login"
          class="deep-purple--text lighten-1 menu-btn"
          v-if="!this.$store.state.auth.userIsAuthorized"
          color="white"
        >
          Login / Sign Up
        </v-btn>
        <v-btn
          class="deep-purple--text lighten-1 menu-btn"
          to="/profile"
          v-if="this.$store.state.auth.userIsAuthorized"
          color="white"
        >
          Profile
        </v-btn>
        <v-btn
          class="deep-purple--text lighten-1 menu-btn"
          @click="logout"
          v-if="this.$store.state.auth.userIsAuthorized"
          color="white"
        >
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    menuItems: [
      { title: "Home", link: "/" },
      { title: "Codigo de conducta", link: "/terms" },
      { title: "Comunidad", link: "/community" },
      { title: "Contacto", link: "/contact" }
    ],
    clientId: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN
  }),
  methods: {
    logout() {
      this.$store.dispatch("auth0Logout");
    }
  },
  mounted() {
    // every time someone enters the app we check for the sub to get the user info
    const user_id = localStorage.getItem("user_id");
    if (user_id) {
      this.$store.dispatch("getUser", { id: user_id });
    }
    this.$store.dispatch("getSharedData");
  }
};
</script>

<style>
html,
body,
main {
  height: 100%;
}

h2 {
  font-size: 34px;
}

h1,
h2,
h3,
h4 {
  font-weight: 300;
}

.toolbar__title {
  margin-top: 10px;
}

.logo {
  width: 100px;
}
.menu-btn.v-btn--contained {
  box-shadow: none;
}
.main-link {
  color: #7e64ab;
}
.purple__colorbg {
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
</style>
