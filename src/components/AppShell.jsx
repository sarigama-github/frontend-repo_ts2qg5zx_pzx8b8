import { Menu, Search, User, Bookmark, Home, Layers } from 'lucide-react'

export default function AppShell({ children, onSearch }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-20 bg-white/60 dark:bg-black/30 backdrop-blur border-b border-slate-200/50 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10" aria-label="Menu">
            <Menu size={20} />
          </button>
          <h1 className="text-lg font-semibold">StudyReels</h1>
          <div className="flex-1" />
          <div className="relative max-w-md w-full hidden sm:block">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input
              onChange={(e)=>onSearch?.(e.target.value)}
              placeholder="Search resources, playlists, certificates..."
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-slate-100 dark:bg-white/10 outline-none"
            />
          </div>
          <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10" aria-label="Saved">
            <Bookmark size={20} />
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10" aria-label="Profile">
            <User size={20} />
          </button>
        </div>
      </header>

      <main>{children}</main>

      <nav className="fixed bottom-4 inset-x-0 z-20 sm:hidden">
        <div className="mx-auto max-w-sm bg-white/80 dark:bg-black/40 backdrop-blur rounded-2xl border border-slate-200/60 dark:border-white/10 px-4 py-2 flex justify-between">
          <button className="p-2 rounded-lg" aria-label="Home"><Home size={20} /></button>
          <button className="p-2 rounded-lg" aria-label="Categories"><Layers size={20} /></button>
          <button className="p-2 rounded-lg" aria-label="Saved"><Bookmark size={20} /></button>
          <button className="p-2 rounded-lg" aria-label="Profile"><User size={20} /></button>
        </div>
      </nav>
    </div>
  )
}
