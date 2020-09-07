
const API_DOMAIN = 'https://plataforma-chicas-prog-sandbox.herokuapp.com/api'


export default {
profiles: () => `${API_DOMAIN}/profile`,
specialties: () => `${API_DOMAIN}/specialty`,
skills: () => `${API_DOMAIN}/skill`,
}
