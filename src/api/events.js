import axios from 'axios'
const _events = [
  { name: 'Evento 1', date: '2018-12-2', place: 'Centro Cultural Recoleta' },
  { name: 'Evento 2', date: '2018-4-10', place: 'Centro Cultural San Martin' }
]

export default {
  getEvents(cb) {
    axios
      .get('https://api-chicas-programando.herokuapp.com/api/events')
      .then(function(res) {
        cb(res.data.events)
      })
      .catch(error => console.log(error))
  }
}
