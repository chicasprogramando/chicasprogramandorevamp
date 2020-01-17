# Chicas Programando

> Esta plataforma fue creada para pormover los perfiles de mujeres en tecnología. Nuestro stack se conforma de Vue.js para el front-end y Ruby on Rails para el back-end.

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

  // check if the route to be accessed requires authorizaton
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