import axios from 'axios'

// import axios from 'axios'

const _projects = [
  {
    id: 1,
    project_name: 'Web Chicas Programando',
    name: 'Chicas Programando',
    technologies: 'Vue.js, Vuetify, Firebase',
    image_url:
      'https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640',
    description:
      'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
    disabled: false
  },
  {
    id: 2,
    project_name: 'Web Chicas Programando',
    name: 'Chicas Programando',
    technologies: 'Vue.js, Vuetify, Firebase',
    image_url:
      'https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640',
    description:
      'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
    disabled: false
  },
  {
    id: 3,
    project_name: 'Web Chicas Programando',
    name: 'Chicas Programando',
    technologies: 'Vue.js, Vuetify, Firebase',
    image_url:
      'https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640',
    description:
      'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
    disabled: false
  },
  {
    id: 4,
    project_name: 'Web Chicas Programando',
    name: 'Chicas Programando',
    technologies: 'Vue.js, Vuetify, Firebase',
    image_url:
      'https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640',
    description:
      'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
    disabled: false
  },
  {
    id: 5,
    project_name: 'Web Chicas Programando',
    name: 'Chicas Programando',
    technologies: 'Vue.js, Vuetify, Firebase',
    image_url:
      'https://programacionparatodossite.files.wordpress.com/2016/05/yeswecode.jpg?w=640',
    description:
      'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
    disabled: false
  }
]

// Created a simulation of asynchronous call
export default {
  getProjects(cb) {
    // axios.get()
    axios.get('https://api-chicas-programando.herokuapp.com/api/projects')
    .then(function(res){
      cb(res.data.projects)
    })
    .catch(error => console.log(error))
  }
}
