
const API_DOMAIN = 'https://plataforma-chicas-prog-sandbox.herokuapp.com/api'


export default {
profiles: () => `${API_DOMAIN}/profile`,
specialties: () => `${API_DOMAIN}/specialty`,
skills: () => `${API_DOMAIN}/skill`,
contact: () => `${API_DOMAIN}/mailer`,
login: () => `${API_DOMAIN}/signin`
}
