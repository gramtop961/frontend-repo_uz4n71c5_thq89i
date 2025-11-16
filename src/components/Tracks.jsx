import { PlayCircle } from 'lucide-react'

export default function Tracks({ tracks = [] }) {
  return (
    <section id="music" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Tracks</h2>
        <a href="#" className="text-slate-500 hover:text-slate-900">View all</a>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {tracks.map((t, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{t.title}</h3>
                <p className="text-slate-500 text-sm">{t.duration}</p>
              </div>
              <PlayCircle className="h-8 w-8 text-slate-400" />
            </div>
            <div className="aspect-video w-full">
              <iframe title={t.title} src={t.url} allow="autoplay" className="w-full h-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
