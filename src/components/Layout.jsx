import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import CRTOverlay from './CRTOverlay'
import GradientMesh from './GradientMesh'

export default function Layout() {
  return (
    <div className="min-h-screen relative">
      <GradientMesh />
      <CRTOverlay />
      <Navbar />
      <main className="pt-14 relative z-10">
        <Outlet />
      </main>
      <footer className="relative z-10 border-t border-purple/30 py-6 text-center">
        <p className="font-pixel text-[10px] text-gray">&copy; 2026 Riksha. All rights reserved.</p>
      </footer>
    </div>
  )
}
