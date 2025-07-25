import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const api_key = import.meta.env.VITE_WEATHER_KEY


const getCityWeather = (name) => {
  const request = axios.get(`${baseUrl}?q=${name}&appid=${api_key}&units=metric`)
  return request.then(response => response.data)
}

export default { getCityWeather }