import { useEffect, useState, useMemo } from 'react'
import ReelCard from './ReelCard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ReelFeed({ query: externalQuery = '' }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')

  const effectiveQuery = (externalQuery || '').trim() || query

  const fetchData = async () => {
    setLoading(true)
    setError('')
    try {
      const url = `${API_BASE}/api/recommendations?limit=12`
      const r = await fetch(url)
      if (!r.ok) throw new Error('Failed to load recommendations')
      const data = await r.json()
      setItems(data.data || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchData() }, [])

  const filtered = useMemo(() => {
    if (!effectiveQuery) return items
    return items.filter(x => (x.title || '').toLowerCase().includes(effectiveQuery.toLowerCase()))
  }, [items, effectiveQuery])

  const onSave = async (item) => {
    try {
      await fetch(`${API_BASE}/api/saved`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'demo', resourceId: item.id || item._id })
      })
      alert('Saved!')
    } catch (e) {
      alert('Failed to save')
    }
  }

  const onAdd = (item) => {
    alert('Add to roadmap coming soon')
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <div className="sm:hidden">
        <input
          placeholder="Search resources..."
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg.white/10 outline-none"
        />
      </div>

      {loading && <p className="text-slate-500">Loading feed...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {filtered.map(item => (
        <ReelCard key={item.id || item._id} item={item} onSave={onSave} onAdd={onAdd} />
      ))}

      {!loading && filtered.length === 0 && (
        <p className="text-slate-500">No items found.</p>
      )}
    </div>
  )
}
