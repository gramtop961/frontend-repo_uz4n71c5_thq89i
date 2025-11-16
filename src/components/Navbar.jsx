import { Menu, Music2, Play, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2">
          <div className="flex items-center gap-2 text-white">
            <Music2 className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Artist</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-white/90">
            <a href="#music" className="hover:text-white transition">Music</a>
            <a href="#shows" className="hover:text-white transition">Shows</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#music" className="hidden sm:inline-flex items-center gap-2 bg-white text-slate-900 rounded-full px-3 py-1.5 text-sm font-semibold">
              <Play className="h-4 w-4" /> Listen
            </a>
            <button className="md:hidden p-2 rounded-full bg-white/10 border border-white/20">
              <Menu className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
