import { motion } from 'framer-motion'
import experience from '../data/experience.json'
import QuestCard from '../components/QuestCard'
import PageTransition from '../components/PageTransition'

export default function Experience() {
  return (
    <PageTransition>
      <div className="min-h-screen px-4 py-16 max-w-4xl mx-auto">
        <motion.h2
          className="font-pixel text-lg md:text-xl text-cyan glow-cyan text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          QUEST LOG
        </motion.h2>

        <div className="space-y-2">
          {experience.map((quest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <QuestCard quest={quest} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
