<template>
  <v-layout align-center justify-start class="login">
    <v-flex class="purple__colorbg">
      <v-card class="home__card">
        <v-card-title primary-title>
          <v-img
            :src="require('@/assets/logo200.png')"
            contain
            height="100"
          ></v-img>
        </v-card-title>
        <div>
          <h2 class="home__title">
            ¿Qué es Chicas Programando?
          </h2>
          <p class="home__text">
            Es una <strong>comunidad</strong> que busca hacer
            <strong>más diversos</strong> los <strong>proyectos</strong> de
            tecnología, abriendo espacios de capacitación y creando una
            plataforma para <strong>visibilizar</strong> talento tecnológico de
            <strong>mujeres y personas no binarias.</strong>
          </p>
        </div>
        <div>
          <h2 class="home__title">
            ¿Qué hace Chicas Programando?
          </h2>
          <p class="home__text">
            Organizamos charlas, workshops y sesiones de coding con el objetivo
            de acercar conocimientos y generar espacios de debate con y para la
            comunidad.
          </p>
        </div>
        <v-container class="cards__container">
          <v-row>
            <Card
              v-for="(card, i) in cards"
              :key="i"
              :title="card.title"
              :image="card.img"
            >
            </Card>
          </v-row>
        </v-container>
        <div class="social-media-container">
          <Icon
            v-for="(link, i) in links"
            :key="i"
            :icon="link.icon"
            :link="link.href"
          >
          </Icon>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Card from "./Card";
import Icon from "./Icon";

export default {
  name: "Home",
  components: {
    Card,
    Icon
  },
  data() {
    return {
      cards: [
        {
          title: "Charlas",
          img: require("@/assets/home-charlas.jpg")
        },
        {
          title: "Workshops",
          img: require("@/assets/home-workshops.jpg")
        },
        {
          title: "Sesiones de coding",
          img: require("@/assets/home-coding-sessions.jpg")
        }
      ],
      links: [
        {
          href: "https://github.com/chicasprogramando/",
          icon: require("@/assets/icons/github.svg")
        },
        {
          href: "https://www.instagram.com/chicasprogramando/",
          icon: require("@/assets/icons/instagram.svg")
        },
        {
          href: "https://twitter.com/ChicasProgAR",
          icon: require("@/assets/icons/twitter.svg")
        },
        {
          href: "https://www.linkedin.com/company/chicas-programando/",
          icon: require("@/assets/icons/linkedin.svg")
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100vw;
  height: 100%;
  text-align: center;
  background-image: url("../../assets/pins.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.home__card {
  width: 80%;
  max-width: 1200px;
  margin: 10px 0;
  padding: 0 10px;
}

.home__title {
  font-size: 22px;
  font-weight: bold;
  color: #7e64ab;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
}

.home__text {
  font-size: 16px;
  color: #7e64ab;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
  max-width: 600px;
}

.social-media-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}
</style>
