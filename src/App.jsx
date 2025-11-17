import { useState } from 'react'
import AppShell from './components/AppShell'
import ReelFeed from './components/ReelFeed'
import Spline from '@splinetool/react-spline'

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white pointer-events-none dark:from-black/50 dark:via-black/60 dark:to-black" />
      </div>

      <div className="relative z-10">
        <AppShell onSearch={setSearch}>
          <section className="pt-8">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-2xl font-semibold mb-2">Discover curated learning reels</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">Swipe through video lessons, roadmaps, free courses and certificates.</p>
            </div>
            <ReelFeed query={search} />
          </section>
        </AppShell>
      </div>
    </div>
  )
}

export default App
