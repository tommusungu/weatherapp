"use client"

import { motion } from "framer-motion"
import { formatDay } from "../lib/utils"

export default function WeatherForecast({ data, unit }) {
  if (!data || !data.list) return null

  // Group forecast data by day
  const dailyData = data.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString()
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(item)
    return acc
  }, {})

  // Get one forecast per day (noon)
  const forecastDays = Object.keys(dailyData)
    .slice(0, 3)
    .map((date) => {
      const dayData = dailyData[date]
      // Try to get data for noon, or the middle of available times
      const middleIndex = Math.floor(dayData.length / 2)
      return dayData[middleIndex]
    })

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-6"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">3-Day Forecast</h2>

      <div className="grid grid-cols-3 gap-4">
        {forecastDays.map((day, index) => {
          const temp = Math.round(day.main.temp)
          const icon = day.weather[0].icon
          const description = day.weather[0].description

          return (
            <motion.div
              key={day.dt}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
              className="bg-blue-50 dark:bg-slate-700 rounded-lg p-4 text-center"
            >
              <p className="font-medium text-gray-700 dark:text-gray-300">{formatDay(day.dt)}</p>
              <img
                src={`https://openweathermap.org/img/wn/${icon}.png`}
                alt={description}
                className="w-16 h-16 mx-auto"
              />
              <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
                {temp}°{unit === "metric" ? "C" : "F"}
              </p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
