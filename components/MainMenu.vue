<template>
  <div> 
    <header>
      <nuxt-link exact to="/nuxt">
          <div class="lds-circle"></div>
      </nuxt-link>
      <nuxt-link exact to="/">Home</nuxt-link>
      <nuxt-link to="/mapa">Mapa</nuxt-link>
      <nuxt-link to="/proyectos">Proyectos</nuxt-link>
      <nuxt-link to="/comunidad">Comunidad</nuxt-link>
    </header>
  </div>
</template>


<style scoped>
  header {
    background: rgba(255,255,255,0.5);
    width: 100vw;
    color: #7D64AB;
    box-shadow: 0px -48px 76px 14px rgba(0,0,0,0.5);
    position: fixed;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-line-pack: center;
        align-content: center;
    -webkit-box-pack: space-around;
        -ms-flex-pack: space-around;
            justify-content: space-around;
    align-items: center;
  }
  header ul {
    padding-left: 0;
  }
  header a {
    color: #7D64AB;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    padding: 0 10px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  header a:hover {
    color: #6739AC;
  }

  .stamp {
    width: 30px;
    height: 30px;
    margin: 10px;
    float: left;
  }

  .cart {
    width: 40px;
    height: 40px;
    margin: 5px;
  }
  .lds-circle {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 10px;
    background-repeat: no-repeat;
    background-image: url('../static/logo200.png');
    background-size: 80px;
  }
  .lds-circle:hover {
    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  @keyframes lds-heart {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }

</style>