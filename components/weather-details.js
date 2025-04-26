"use client"

import { motion } from "framer-motion"
import { Wind, Droplets } from "lucide-react"

export default function WeatherDetails({ data }) {
  if (!data) return null

  const { wind, main } = data
  const windSpeed = wind.speed
  const humidity = main.humidity

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
          <Wind className="mr-2 h-5 w-5 text-blue-500" />
          Wind Status
        </h3>
        <div className="flex items-center justify-center h-24">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800 dark:text-gray-100">{windSpeed} km/h</p>
            <div className="mt-2 flex items-center justify-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                <Wind className="h-5 w-5 text-blue-500 dark:text-blue-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
          <Droplets className="mr-2 h-5 w-5 text-blue-500" />
          Humidity
        </h3>
        <div className="flex items-center justify-center h-24">
          <div className="text-center w-full">
            <p className="text-4xl font-bold text-gray-800 dark:text-gray-100">{humidity}%</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-4">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${humidity}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
