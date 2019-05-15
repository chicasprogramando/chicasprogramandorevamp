import axios from "axios";
const _profiles = [
  {
    id: 1,
    name: "Puri Bey",
    title: "Frontend Developer ",
    image: "https://avatars2.githubusercontent.com/u/30815608?s=400&v=4",
    role_name: "Core Team",
    search_project: true,
    senority: "Jr",
    skills: "Html5, Css3, Javascript, Vue.js, Bootstrap, React.js",
    about_me: "s,cmvn slvknfjc slvknvsdvmnc dklnvsdn sdvn sdjvnj skdjvn",
    redes: {
      linkedin: "https://ar.linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com"
    },
    created_at: "2018-10-17T21:27:58.810Z",
    updated_at: "2018-10-17T21:27:58.810Z"
  }
];

export default {
  getProfiles(cb) {
    axios
      .get("https://api-chicas-programando.herokuapp.com/api/users")
      .then(function(res) {
        cb(res.data);
      })
      .catch(error => console.log(error));
  },
  // TODO: Cambiar a heroku cuando este deployado el endpoint ahi
  createProfile(payload, cb) {
    axios
      .post("http://0.0.0.0:3000/api/users", { user: { ...payload } })
      .then(function(res) {
        // ver cómo manejar esto.. no sé a qué debería llamar
        cb(res.data);
      })
      .catch(error => console.log(error)); // TODO: implementar sentry o algun servicio de log
  }
};
