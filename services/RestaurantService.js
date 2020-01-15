import axios from 'axios'

const restaurantApiClient = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json '
  }
})

export default {
  async fetchItems() {
    const response = await restaurantApiClient.get('/menu/all')
    return response.data
  }
}
