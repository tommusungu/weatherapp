"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SearchBar from "./search-bar"
import CurrentWeather from "./current-weather"
import WeatherForecast from "./weather-forecast"
import WeatherDetails from "./weather-details"
import ThemeToggle from "./theme-toggle"
import { useDebounce } from "../lib/hooks"

export default function WeatherDashboard() {
  const [city, setCity] = useState("Nairobi")
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [unit, setUnit] = useState("metric") // metric or imperial

  const debouncedCity = useDebounce(city, 500)

  useEffect(() => {
    if (!debouncedCity) return

    const fetchWeatherData = async () => {
      setLoading(true)
      setError(null)

      try {
        const weatherResponse = await fetch(`/api/weather?city=${debouncedCity}&units=${unit}`)
        const forecastResponse = await fetch(`/api/forecast?city=${debouncedCity}&units=${unit}`)

        if (!weatherResponse.ok || !forecastResponse.ok) {
          throw new Error("Failed to fetch weather data")
        }

        const weatherData = await weatherResponse.json()
        const forecastData = await forecastResponse.json()

        setWeatherData(weatherData)
        setForecastData(forecastData)
      } catch (err) {
        console.error("Error fetching weather data:", err)
        setError("Failed to fetch weather data. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchWeatherData()
  }, [debouncedCity, unit])

  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300">Weather App</h1>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <SearchBar city={city} setCity={setCity} />

          {weatherData && <CurrentWeather data={weatherData} unit={unit} toggleUnit={toggleUnit} />}
        </div>

        <div className="lg:col-span-2">
          {error && (
            <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg text-red-700 dark:text-red-200">{error}</div>
          )}

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {forecastData && <WeatherForecast data={forecastData} unit={unit} />}

              {weatherData && <WeatherDetails data={weatherData} />}
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
