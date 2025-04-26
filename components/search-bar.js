"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

export default function SearchBar({ city, setCity }) {
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Search is handled by parent component through the city state
  }

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search city..."
          className="w-full p-3 pl-10 pr-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-blue-500" />
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </form>
    </motion.div>
  )
}
