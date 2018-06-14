<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar class="nav">
        <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title class="mt-3"><img class="logo" src="@/assets/logoOnly.png" alt="Logo"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            flat
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link"
            class="main-link">
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <main>
        <router-view></router-view>
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

<style scoped>
.toolbar__title {
  margin-top: 10px;
}

.logo {
  width: 100px;
}
.main-link {
  color: #7e64ab;
}

</style>
