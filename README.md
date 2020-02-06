# Chicas Programando

> Esta plataforma fue creada para pormover los perfiles de mujeres en tecnología. Nuestro stack se conforma de Vue.js para el front-end y Node.js para el back-end.

# Documentación
Acá dejamos algunos datos útiles para el área de desarrollo de la plataforma.

### router.beforeEach Explanation

```
router.beforeEach((to, from, next) => {
  // Allow finishing callback url for logging in
  if (to.matched.some(record => record.path == "/callback")) {
    Store.dispatch("auth0HandleAuthentication");
    next(false);
  }

  // check if user is logged in (start assuming the user is not logged in = false)
  let routerAuthCheck = false;
  // Verify all the proper access variables are present for proper authorization
  if (
    localStorage.getItem("access_token") &&
    localStorage.getItem("id_token") &&
    localStorage.getItem("expires_at")
  ) {
    // Check whether the current time is past the Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    // set localAuthTokenCheck true if unexpired / false if expired
    routerAuthCheck = new Date().getTime() < expiresAt;
  }

  // set global ui understanding of authentication
  Store.commit("SET_USER_IS_AUTH", routerAuthCheck);

  // check if the route to be accessed requires auth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if user is Authenticated
    if (routerAuthCheck) {
      // user is Authenticated - allow access
      next();
    } else {
      // user is not authenticated - redirect to login
      router.replace("/login");
    }
  }
  // Allow page to load
  else {
    next();
  }
});
```

### Store Modules Explanation
En el index de `/store` vamos a encontrar algo como esto:

```
import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import user from "./user";
import profile from "./profile";
import errors from "./errors";
import shared from "./shared";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user,
    profile,
    errors,
    shared
  }
});
```

Lo que quisimos hacer en la plataforma fue tener las diferentes llamadas ordenadas por categoría. En general estamos intentando que cada sector del store represente cada sector del backend para que ambos dos laburen en conjunto y se puedan entender. Por ende, cada módulo tiene sus propios `getters`, `mutations` y `actions`. Entonces si en el back se crea una nueva ruta llamada `/projects`, nuestro store debería tener un modulo nuevo llamado `projects` también.

### Auth0 Explanation

En la plataforma usamos `Auth0` para nuestra autenticación de usuarios. Y nuestro flujo es el siguiente:

- Entramos al login y nos redirige a Auth0
- Elegimos con que red social/mail nos queremos registrar
- Auth0 no devuelve unos tokens y el mail del usuario seleccionado
- Usamos ese mail para pegarle a nuestro back para ver si el usuario existe y sino lo creamos

### Profile vs User
Hay grandes diferencias entre lo que es un perfil y lo que es un usuario. El usuario se va a usar para cosas de alto nivel mientras que el perfil será lo que se muestre al publico. 

**Flujo de usuario y perfil:**
- Se crea un usuario sin perfil
- Para crear el perfil uno tiene que aceptar nuestro codigo de conducta
- La primera vez que ingresemos nuestro perfil se creara un perfil dentro de nuestro usuario en la base de datos
- Las proximas modificaciones de nuestro perfil seran directo sobre el mismo
- Si queremos eliminar nuestro perfil de chicas programando debemos eliminar el usuario