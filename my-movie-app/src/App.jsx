import React from 'react';
import { Search, Play, Plus, ArrowRight } from 'lucide-react';
import MovieCard from './components/MovieCard';

// Data Dummy (Tambahin property 'color' buat simulasi gradient poster)
const movies = [
  { id: 1, title: "Chronos Letterbound", year: 2024, rating: 8.7, genre: "Sci-Fi", color: "linear-gradient(135deg, #4c1d95, #be185d)" },
  { id: 2, title: "Embersea Vigil", year: 2024, rating: 8.7, genre: "Drama", color: "linear-gradient(135deg, #047857, #0ea5e9)" },
  { id: 3, title: "Riptide Hours", year: 2024, rating: 8.7, genre: "Sci-Fi", color: "linear-gradient(135deg, #be123c, #fb923c)" },
  { id: 4, title: "Vesper Quiet", year: 2024, rating: 8.7, genre: "Sci-Fi", color: "linear-gradient(135deg, #b45309, #fbbf24)" },
  { id: 5, title: "Nephele Drift", year: 2024, rating: 8.7, genre: "Sci-Fi", color: "linear-gradient(135deg, #0369a1, #67e8f9)" },
  { id: 6, title: "Obsidian Lullaby", year: 2024, rating: 8.7, genre: "Sci-Fi", color: "linear-gradient(135deg, #312e81, #c084fc)" },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white font-sans pb-10">
      
      {/* 1. NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 sticky top-0 z-50 bg-[#0b1120]/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-black">S</div>
          <span className="font-bold text-lg tracking-wide">SINEMATA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="text-white hover:text-orange-500 transition">Home</a>
          <a href="#" className="hover:text-orange-500 transition">Browse</a>
          <a href="#" className="hover:text-orange-500 transition">Watchlist</a>
          <a href="#" className="hover:text-orange-500 transition">My Reviews</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="text" placeholder="Search films..." className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:border-orange-500 w-48 transition-all" />
          </div>
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer">A</div>
        </div>
      </nav>

      {/* 2. HERO SECTION (Featured This Week) */}
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-900 to-slate-900 border border-white/10 min-h-[300px] flex items-center p-8 md:p-12">
          <div className="relative z-10 max-w-lg space-y-4">
            <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full border border-orange-500/30">FEATURED THIS WEEK</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">CHRONOS LETTERBOUND</h1>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="text-yellow-400 font-bold">★ 8.7</span>
              <span>•</span>
              <span>2024</span>
              <span>•</span>
              <span>2h 15m</span>
              <span>•</span>
              <span>Sci-Fi, Drama</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              Seorang penjaga arsip menemukan surat-surat dari masa depan yang ditulis untuknya — masing-masing meminta keputusan mustahil.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold py-2.5 px-6 rounded-full transition transform hover:scale-105">
                <Play size={16} fill="currentColor" /> Lihat Detail
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 px-6 rounded-full border border-white/10 transition">
                <Plus size={16} /> Watchlist
              </button>
            </div>
          </div>
          
          {/* Dekorasi Abstrak di Kanan Hero (Simulasi Poster Miring) */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block opacity-50 pointer-events-none">
             <div className="absolute right-10 top-10 w-32 h-48 bg-purple-600 rounded-xl rotate-6 border border-white/20 shadow-2xl"></div>
             <div className="absolute right-32 top-20 w-32 h-48 bg-emerald-600 rounded-xl -rotate-3 border border-white/20 shadow-2xl"></div>
             <div className="absolute right-56 top-10 w-32 h-48 bg-rose-600 rounded-xl rotate-12 border border-white/20 shadow-2xl"></div>
          </div>
        </div>
      </section>

      {/* 3. TRENDING NOW (Horizontal Scroll) */}
      <section className="px-6 max-w-7xl mx-auto mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
            TRENDING NOW
          </h2>
          <a href="#" className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition">
            Lihat semua <ArrowRight size={12} />
          </a>
        </div>
        
        {/* Container Scroll Horizontal */}
        <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
          {/* Duplikasi data biar kelihatan bisa discroll */}
          {movies.map((movie) => (
            <MovieCard key={`dup-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>

      {/* 4. RECOMMENDED FOR YOU */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
            RECOMMENDED FOR YOU
          </h2>
          <a href="#" className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition">
            Lihat semua <ArrowRight size={12} />
          </a>
        </div>
        
        <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x">
          {movies.slice().reverse().map((movie) => (
            <MovieCard key={`rec-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;