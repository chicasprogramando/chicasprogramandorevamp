<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar class="nav" flat>
        <v-toolbar-title class="mt-2"><img class="logo" src="@/assets/logoOnly.png" alt="Logo"></v-toolbar-title>
        <v-spacer></v-spacer> 
        <v-toolbar-items>
          <v-btn
            flat
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link"
            class="deep-purple--text lighten-1">
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <main>
        <v-slide-x-transition mode="out-in">
          <router-view> </router-view>
        </v-slide-x-transition>
      </main>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        { title: 'Home', link: '/' },
        { title: 'Proyectos', link: '/proyectos' },
        { title: 'Comunidad', link: '/comunidad' },
        { title: 'Eventos', link: '/eventos' },
        { title: 'Contacto', link: '/contacto' }
      ]
    }
  },
  name: 'App'
}
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

h1, h2, h3, h4 {
  font-weight: 300;
}

.toolbar__title {
  margin-top: 10px;
}

.logo {
  width: 100px;
}
.main-link {
  color: #7e64ab;
}

.page-enter-active, .page-leave-active {
  transition: all 1s ease-out;
}

.page-enter, .page-leave-active {
  opacity: 0;
  transform: scale(0.95);
  transform-origin: 200% 50%;
}

</style>
