import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Preloader from './components/Preloader'
import Sidebar from './components/Sidebar'
import FloatingToggles from './components/FloatingToggles'
import GradientMesh from './components/GradientMesh'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            {loading && <Preloader onComplete={() => setLoading(false)} />}
          </AnimatePresence>
          <GradientMesh />
          <Sidebar onMenuOpen={() => setMenuOpen(true)} onMenuClose={() => setMenuOpen(false)} />
          <FloatingToggles />
          <BackToTop />
          <main className={`app-main${menuOpen ? ' menu-open' : ''}`}>
            <AnimatedRoutes />
          </main>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}
