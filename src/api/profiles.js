// const _profiles = [
//   {
//     "id": 1,
//     "name": "Priscila Bey",
//     "title": "Frontend Developer ",
//     "image": "https://avatars2.githubusercontent.com/u/30815608?s=400&v=4",
//     "role_name": "Core Team",
//     "search_project": false,
//     "senority": "Jr",
//     "skills": "Html5, Css3, Javascript, Vue.js, Bootstrap, React.js",
//     "about_me": "Lorem Lorem Lorem",
//     "redes": {
//       "linkedin": "https://ar.linkedin.com/",
//       "github": "https://github.com/",
//       "twitter": "https://twitter.com"
//     },
//     "created_at": "2018-10-15T11:41:00.216Z",
//     "updated_at": "2018-10-15T11:41:00.216Z"
//   },
//   {
//     "id": 2,
//     "name": "Mariana Calmón",
//     "title": "Backend developer",
//     "image": "https://media.licdn.com/dms/image/C4D03AQG4TkQ0m8xgZw/profile-displayphoto-shrink_800_800/0?e=1546473600&v=beta&t=1sMfp39sPWZKHmHL6E6yTBo7MEmZONU3en2svMFbtiU",
//     "role_name": "Core Team",
//     "search_project": true,
//     "senority": "Jr",
//     "skills": "Ruby on Rails",
//     "about_me": "skjb dsvkcjdsn sdnvkjsd sjd jsd kjs kasj jdbcuds isdchi sdjc sdkjcn skdjcn skdjcn skdcnskdjch ",
//     "redes": {
//       "linkedin": "https://ar.linkedin.com/",
//       "github": "https://github.com/",
//       "twitter": "https://twitter.com"
//     },
//     "created_at": "2018-10-17T20:41:10.248Z",
//     "updated_at": "2018-10-17T20:41:10.248Z"
//   },
//   {
//     "id": 3,
//     "name": "Gia Castello",
//     "title": "Frontend Developer ",
//     "image": "https://avatars2.githubusercontent.com/u/17608191?s=400&v=4",
//     "role_name": "Core Team",
//     "search_project": true,
//     "senority": "Jr",
//     "skills": "Html5, Css3, Javascript, Vue.js, Bootstrap, React.js",
//     "about_me": "s,cmvn slvknfjc slvknvsdvmnc dklnvsdn sdvn sdjvnj skdjvn",
//     "redes": {
//       "linkedin": "https://ar.linkedin.com/",
//       "github": "https://github.com/",
//       "twitter": "https://twitter.com"
//     },
//     "created_at": "2018-10-17T21:27:58.810Z",
//     "updated_at": "2018-10-17T21:27:58.810Z"
//   }
// ];
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
  },
   {
    id: 2,
    name: "Gia Castello",
    title: "Frontend Developer ",
    image: "https://avatars2.githubusercontent.com/u/17608191?s=400&v=4",
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
  },
   {
    id: 3,
    name: "Mariana Calmon",
    title: "Frontend Developer ",
    image: "https://pbs.twimg.com/profile_images/932792000931393536/Dlg5Ag1w_200x200.jpg",
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
  },
];

export default {
  getProfiles(cb) {
    // console.log(cb)
    setTimeout( () => cb(_profiles), 100);
  }
}