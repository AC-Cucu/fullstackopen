import { useState, useEffect } from 'react'
import weatherService from '../services/weather'
import WeatherDetails from './WeatherDetails'

const CountryDetails = ({country}) => {
    const [weather, setWeather] = useState(null)

    const fetchWeatherfrom = (city) => {
        weatherService
            .getCityWeather(city)
            .then(returnedWeather => {
                console.log("returnedWeather:", returnedWeather)
                setWeather(returnedWeather)
            })
            .catch(error => {
                console.error("Error fetching the weather: ", error)
                setWeather(null)
            })
    }

    useEffect(() => {
        fetchWeatherfrom(country.capital[0])
    }, [country.capital])



    return (
        <>
          <h1> {country.name.common}</h1>

          <p>Capital {country.capital[0]}</p>
          <p>Area {country.area}</p>

          <h2>Languages</h2>
          <ul>
            {
              Object.entries(country.languages).map(([langCode, langName]) => (
                <li key={langCode}>{langName}</li>
              ))
            }
          </ul>

          <img src={country.flags.svg} alt={country.flags.alt} width={256} />

          { country.capital[0] && weather &&
            <WeatherDetails weather={weather}/>
          }
        </>        
    )
}

export default CountryDetails