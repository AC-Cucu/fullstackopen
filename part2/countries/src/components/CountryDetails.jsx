const CountryDetails = ({country}) => {
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
        </>        
    )
}

export default CountryDetails