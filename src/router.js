/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import Contact from "./views/Contact/Contact.vue";
import Profile from "./views/Profile/Profile.vue";
import Login from "./views/Login/Login.vue";
import AuthCallBack from "./views/Others/AuthCallBack.vue";
import PageNotFound from "./views/Others/PageNotFound.vue";
import Terms from "./views/Terms/Terms.vue";
import Store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/callback",
      name: "AuthCallBack",
      component: AuthCallBack
    },
    {
      path: "/terms",
      name: "Terms",
      component: Terms,
      meta: { requiresAuth: true }
    },
    {
      path: "*",
      name: "PageNotFound",
      component: PageNotFound
    }
  ]
});

// Read README.md to understand router.beforeEach
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.path == "/callback")) {
    Store.dispatch("auth0HandleAuthentication");
    next(false);
  }

  let routerAuthCheck = false;
  if (
    localStorage.getItem("access_token") &&
    localStorage.getItem("id_token") &&
    localStorage.getItem("expires_at")
  ) {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    routerAuthCheck = new Date().getTime() < expiresAt;
  }

  Store.commit("setUserIsAuthenticated", routerAuthCheck);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (routerAuthCheck) {
      next();
    } else {
      router.replace("/login");
    }
  } else {
    next();
  }
});

export default router;
