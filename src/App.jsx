import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Plus, Minus } from 'lucide-react'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Matrix Countdown</h1>
          <Clock size={24} />
        </div>
        <div className="flex items-center justify-center text-6xl font-bold mb-8">
          <span>00</span>
          <span className="mx-2">:</span>
          <span>00</span>
          <span className="mx-2">:</span>
          <span>00</span>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            <Plus size={20} />
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            <Minus size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default App