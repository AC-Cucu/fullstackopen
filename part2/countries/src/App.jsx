import { useState, useEffect } from "react"

import countriesService from './services/countries'

function App() {
  const [filterCountry, setFilterCountry] = useState('')
  const [country, setCountry] = useState(null)
  const [countries, setCountries] = useState([])
  const [manyRequests, setManyRequests] = useState(false)

  const handleCountryChange = (event) => {
    const newCountryFromInput = event.target.value
    console.log("Country input: ", newCountryFromInput)
    setFilterCountry(newCountryFromInput)
  }

  const fetchCountries = () => {
    console.log('effect')
    countriesService
      .getAllCountries()
      .then(returnedCountries => {
        //console.log("returnedCountries:", returnedCountries)
        const filteredCountries = returnedCountries.filter(
          returnedCountry =>
            returnedCountry?.name?.common
              .toLowerCase()
              .includes(filterCountry.toLowerCase())
        );
        console.log("filteredCountries:", filteredCountries)

        if (filteredCountries.length > 10) {
          setManyRequests(true)

          setCountries([])
          setCountry(null)
          return
        }

        if (filteredCountries.length === 1) {
          setCountry(filteredCountries[0])

          setCountries([])
          setManyRequests(false)
          return
        }

        setCountries(filteredCountries)

        setManyRequests(false)
        setCountry(null)
      })
  }

  useEffect(fetchCountries, [filterCountry])


  return (
    <>
      find countries <input name="country" value={filterCountry} onChange={handleCountryChange} />

      {filterCountry && manyRequests && <p>Too many matches, specify another filter</p>}

      {
        filterCountry && country && 
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

          <img src={country.flags.svg} alt={country.flags.alt} width={200} height={200} />
        </>
      }
      
      {
        countries.map(country => {
          const {name, cca3} = country
          return <li key={cca3}>{name.common}</li>
        }) 
      }
    </>
  )
}

export default App
