import { useState } from 'react'
import { getWeather, getCoordinates } from './services/weatherAPI'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { FaSearchLocation } from "react-icons/fa";

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  const handleSearch = async (city) => {
    try {
      const { lat, lon } = await getCoordinates(city)
      const weather = await getWeather(lat, lon)
      setWeatherData(weather)
      setError(null)
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
    }
  }

  return (
    <div className='bg-gradient-to-br from-slate-900 min-h-screen flex justify-center p-6'> 
      <div className='w-full max-w-lg flex flex-col items-center gap-6 border-1/5 rounded-4xl shadow-2xl bg-slate-600 py-14 px-2 m-2'>
        <h1 className='m-2 text-4xl font-extrabold text-white'>Forecast Weather</h1>
        <p className='text-white font-bold pb-2'>Search weather for any city</p>
        <SearchBar onSearch={handleSearch} />
        {error && (
          <div className='text-white bg-red-500 p-3 rounded-lg'>
            {error}
          </div>
        )}
        {weatherData && <WeatherCard weatherData={weatherData} />}
        {!weatherData && (
          <div className='flex flex-col items-center gap-4'>
            <p className='text-xl text-white mt-10'>No weather data available</p>
            <div className='flex justify-center items-center mt-2'>
              <FaSearchLocation className='text-8xl text-white' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App;