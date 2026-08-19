import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Sidebar from './components/Sidebar'
import BottomNav from './components/BottomNav'
import FloatingToggles from './components/FloatingToggles'
import GradientMesh from './components/GradientMesh'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <CustomCursor />
          <GradientMesh />
          <Sidebar />
          <BottomNav />
          <FloatingToggles />
          <main className="relative z-10 md:ml-[220px] pb-20 md:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}
