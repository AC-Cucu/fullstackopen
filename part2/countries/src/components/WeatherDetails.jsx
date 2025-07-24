const WeatherDetails = ({weather}) => {
    const img_URL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    return (
        <>
            <p>Temperature {weather.main.temp} Celsius</p>
            <img src={img_URL} alt={weather.weather[0].description} />
            <p>Wind {weather.wind.speed} m/s</p>
        </>
    )
}

export default WeatherDetails