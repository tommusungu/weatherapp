"use client"

import { motion } from "framer-motion"
import { formatDate } from "../lib/utils"

export default function CurrentWeather({ data, unit, toggleUnit }) {
  if (!data) return null

  const { name, main, weather, dt, sys } = data
  const temperature = Math.round(main.temp)
  const description = weather[0].description
  const icon = weather[0].icon
  const date = formatDate(dt)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-6"
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {name}, {sys.country}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{date}</p>
        </div>
        <button
          onClick={toggleUnit}
          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
        >
          °{unit === "metric" ? "C" : "F"}
        </button>
      </div>

      <div className="flex items-center justify-center my-6">
        <motion.img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={description}
          className="w-32 h-32"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
      </div>

      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100">
            {temperature}°{unit === "metric" ? "C" : "F"}
          </h1>
          <p className="text-xl capitalize text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
