import { Outlet } from 'react-router-dom'
import SketchyFilter from './SketchyFilter'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <>
      <SketchyFilter />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 md:ml-60 relative z-10">
          <div className="pt-16 md:pt-0">
            <Outlet />
          </div>
          <footer
            className="border-t-2 border-dashed border-gray py-8 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <p className="text-lg text-gray">&copy; 2026 Riksha. Made with crayons &amp; coffee.</p>
          </footer>
        </main>
      </div>
    </>
  )
}
