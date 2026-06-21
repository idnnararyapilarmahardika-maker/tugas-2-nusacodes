import React from 'react';
import { Heart, Star } from 'lucide-react';

const MovieCard = ({ title, year, rating, genre, poster, color }) => {
  return (
    <div className="flex-shrink-0 w-40 md:w-48 group cursor-pointer">
      {/* Container Gambar dengan Gradient Overlay */}
      <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 shadow-lg transition-transform duration-300 group-hover:scale-105" style={{ backgroundColor: color }}>
        {/* Label Genre (Pojok Kiri Atas) */}
        <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
          {genre}
        </div>
        
        {/* Icon Heart (Pojok Kanan Atas) */}
        <div className="absolute top-2 right-2 w-6 h-6 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-red-500/80 transition-colors">
          <Heart size={12} className="text-white fill-transparent" />
        </div>

        {/* Judul di dalam Poster (Opsional, kalau di Figma ada teks di dalam gambar) */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent pt-10">
           <h3 className="text-sm font-bold text-white leading-tight line-clamp-2">{title}</h3>
        </div>
        
        {/* Kalau mau pake gambar asli, uncomment img di bawah & hapus div gradient di atas */}
        {/* <img src={poster} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" /> */}
      </div>

      {/* Info di Bawah Kartu */}
      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-gray-100 truncate">{title}</h4>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={10} className="fill-yellow-500" />
            <span className="font-medium text-gray-200">{rating}</span>
          </div>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;