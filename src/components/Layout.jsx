import SketchyFilter from './SketchyFilter'
import Sidebar from './Sidebar'
import { NavigationProvider } from '../context/NavigationContext'

export default function Layout({ children }) {
  return (
    <NavigationProvider>
      <SketchyFilter />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 min-w-0 pt-16 md:pt-0">
          {children}
          <footer
            className="border-t-2 border-dashed border-line py-10 px-4 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <p className="text-xl text-gray mb-1">&copy; 2026 Riksha</p>
            <p className="text-sm text-gray/70" style={{ fontFamily: 'var(--font-body)' }}>
              Made with crayons &amp; coffee
            </p>
          </footer>
        </main>
      </div>
    </NavigationProvider>
  )
}
