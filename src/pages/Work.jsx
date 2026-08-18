import { useState } from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects.json'
import InventorySlot from '../components/InventorySlot'
import PageTransition from '../components/PageTransition'

const filters = ['all', 'web-app', 'ui-ux', 'open-source']

export default function Work() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <PageTransition>
      <div className="min-h-screen px-4 py-16 max-w-5xl mx-auto">
        <motion.h2
          className="font-pixel text-lg md:text-xl text-cyan glow-cyan text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          INVENTORY
        </motion.h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-pixel text-[10px] px-4 py-2 border cursor-pointer transition-all ${
                filter === f
                  ? 'border-cyan text-cyan bg-cyan/10 box-glow-cyan'
                  : 'border-gray text-gray hover:border-lavender hover:text-lavender bg-transparent'
              }`}
            >
              {f.toUpperCase().replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <InventorySlot key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
