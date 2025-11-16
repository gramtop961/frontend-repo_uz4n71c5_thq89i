import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            Sonic Visions by <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-violet-300 to-sky-300">Your Name</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80">
            Music producer • Live performer • Sound designer. Dive into an interactive world of modern electronic sounds.
          </p>
        </div>
      </div>
    </div>
  )
}
