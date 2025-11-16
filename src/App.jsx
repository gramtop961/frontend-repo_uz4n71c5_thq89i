import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSpline from './components/HeroSpline'
import Tracks from './components/Tracks'
import Shows from './components/Shows'
import Contact from './components/Contact'

function App() {
  const [tracks, setTracks] = useState([])
  const [gigs, setGigs] = useState([])

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${baseUrl}/api/tracks`).then(r => r.json()).then(setTracks).catch(() => {})
    fetch(`${baseUrl}/api/gigs`).then(r => r.json()).then(setGigs).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main className="pt-24 space-y-16">
        <section className="mx-auto max-w-7xl px-4">
          <HeroSpline />
        </section>

        <section className="mx-auto max-w-7xl px-4">
          <Tracks tracks={tracks} />
        </section>

        <section className="mx-auto max-w-7xl px-4">
          <Shows gigs={gigs} />
        </section>

        <section className="mx-auto max-w-7xl px-4">
          <div id="about" className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>
            <p className="text-white/80 max-w-3xl">
              I craft immersive soundscapes blending analog warmth with digital precision. From cinematic scores to club-ready grooves, my work explores the intersection of tech and emotion.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4">
          <Contact />
        </section>

        <footer className="mx-auto max-w-7xl px-4 pb-12 text-center text-white/60">
          © {new Date().getFullYear()} Your Name — All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
