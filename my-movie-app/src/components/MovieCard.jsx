import React from 'react';

const MovieCard = ({ title, year, rating, genre, poster }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      {/* Bagian Gambar Poster */}
      <div className="relative h-64 w-full bg-gray-200">
        <img 
          src={poster} 
          alt={title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback kalau gambar error, ganti jadi warna solid
            e.target.style.display = 'none';
            e.target.parentElement.style.backgroundColor = '#4f46e5'; 
            e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full text-white text-4xl font-bold">${title.charAt(0)}</div>`;
          }}
        />
      </div>

      {/* Bagian Info Film */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 h-6" title={title}>
          {title}
        </h3>
        
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <span className="font-medium">{year}</span>
          <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md font-semibold border border-indigo-100">
            {genre}
          </span>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
          <span className="text-yellow-500 text-lg">⭐</span>
          <span className="font-bold text-gray-800">{rating}</span>
          <span className="text-gray-400 text-sm">/ 10</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;