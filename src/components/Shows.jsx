export default function Shows({ gigs = [] }) {
  return (
    <section id="shows" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Upcoming Shows</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {gigs.map((g, idx) => (
          <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
            <p className="text-sm text-slate-500">{new Date(g.date).toLocaleDateString()}</p>
            <h3 className="text-xl font-semibold text-slate-900">{g.venue}</h3>
            <p className="text-slate-600">{g.city}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
