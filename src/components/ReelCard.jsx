import { BookmarkPlus, Share2, PlusCircle } from 'lucide-react'

export default function ReelCard({ item, onSave, onAdd }) {
  return (
    <article className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 dark:border-white/10">
      <div className="relative">
        <img src={item.thumbnail} alt={item.title} className="w-full h-72 object-cover" />
        <div className="absolute top-3 left-3 bg-black/60 text-white px-2 py-1 rounded text-xs">{item.provider}</div>
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-xs">{item.level}</div>
      </div>

      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold leading-snug">{item.title}</h3>
        {!!item.description && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{item.description}</p>
        )}

        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <button onClick={()=>onSave?.(item)} className="px-3 py-1 rounded-lg border border-slate-200 dark:border-white/10 flex items-center gap-2">
              <BookmarkPlus size={16} /> <span>Save</span>
            </button>
            <button onClick={()=>onAdd?.(item)} className="px-3 py-1 rounded-lg border border-slate-200 dark:border-white/10 flex items-center gap-2">
              <PlusCircle size={16} /> <span>Add</span>
            </button>
          </div>
          <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-3">
            {item.duration && <span>{item.duration}</span>}
            <button className="hover:text-slate-700 dark:hover:text-slate-200 flex items-center gap-1">
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
