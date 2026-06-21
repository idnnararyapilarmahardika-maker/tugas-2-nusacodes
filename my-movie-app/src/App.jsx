import React from 'react';
import MovieCard from './components/MovieCard';

// Data dummy 6 film Sinemata + Link Gambar Aman
const moviesData = [
  { 
    id: 1, 
    title: "Zootopia 2", 
    year: 2026, 
    rating: 8.9, 
    genre: "Animation", 
    poster: "https://placehold.co/400x600/334155/FFF?text=Zootopia+2"
  },
  { 
    id: 2,  
    title: "Ejen Ali",
    year: 2024, 
    rating: 7.9, 
    genre: "Spy Action",
    poster: "https://placehold.co/400x600/334155/FFF?text=Ejen+Ali" 
  },
  { 
    id: 3, 
    title: "Boboiboy The Movie 2",
    year: 2023, 
    rating: 8.2, 
    genre: "Adventure",
    poster: "https://placehold.co/400x600/475569/FFF?text=Boboiboy+The+Movie+2" 
  },
  { 
    id: 4, 
    title: "Spiderman No Way Home",
    year: 2024, 
    rating: 8.8, 
    genre: "Superhero Action",
    poster: "https://placehold.co/400x600/0f172a/FFF?text=Spiderman+No+Way+Home" 
  },
  { 
    id: 5, 
    title: "Doraemon: Nobita's Treasure Island",
    year: 2022, 
    rating: 8.6, 
    genre: "Adventure", 
    poster: "https://placehold.co/400x600/1e1b4b/FFF?text=Doraemon:+Nobita's+Treasure+Island" 
  },
  { 
    id: 6, 
    title: "Doraemon the Movie: New Nobita and the castle of the Undersea Devil",
    year: 2022, 
    rating: 9.0, 
    genre: "Adventure", 
    poster: "https://placehold.co/400x600/312e81/FFF?text=Doraemon+the+Movie:+New+Nobita+and+the+castle+of+the+Undersea+Devil" 
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Judul */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
             Daftar Film Sinemata
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Koleksi film terbaik pilihan penikmat sinema tanah air.
          </p>
        </div>
        
        {/* Grid Layout Kartu Film */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {moviesData.map((movie) => (
            <MovieCard 
              key={movie.id} // Wajib ada key prop!
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              genre={movie.genre}
              poster={movie.poster}
            />
          ))}
        </div>

        {/* Footer Kecil */}
        <div className="mt-16 text-center text-slate-400 text-sm">
        </div>

      </div>
    </div>
  );
}

export default App;