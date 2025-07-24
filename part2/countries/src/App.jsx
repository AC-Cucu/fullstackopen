import { useState, useEffect } from "react"

import countriesService from './services/countries'
import CountryDetails from "./components/CountryDetails"

function App() {
  const [filterCountry, setFilterCountry] = useState('')
  const [country, setCountry] = useState(null)
  const [countries, setCountries] = useState([])
  const [manyRequests, setManyRequests] = useState(false)
  const [showDetail, setShowDetail] = useState(null)

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

  const toggleShowDetails = (id) => {
    if (showDetail) {
      setShowDetail(null) 
      return
    }
    setShowDetail(id)
  }


  return (
    <>
      find countries <input name="country" value={filterCountry} onChange={handleCountryChange} />

      {filterCountry && manyRequests && <p>Too many matches, specify another filter</p>}

      {
        filterCountry && country && 
        <CountryDetails country={country}/>
      }
      
      {
        countries.map(country => {
          const {name, cca3} = country
          return(
              <li key={cca3}>
                {name.common} <button onClick={() => toggleShowDetails(cca3)}>Show</button>
                {country && cca3 === showDetail && 
                  <CountryDetails country={country} />
                }
              </li>
          )
        }) 
      }
    </>
  )
}

export default App
