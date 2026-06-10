import React from 'react';
import { Play } from 'lucide-react';

const VideosSection = () => {
  const videos = [
    {
      id: 1,
      title: "Banda Mariscos - El Toro Tumbado",
      description: "Puro metal pesado, güiro tradicional y tololoche raspado. Corrido Moderno Regional Urbano.",
      youtubeUrl: "https://youtu.be/_vTf1VfUMd4"
    }
  ];

  return (
    <section id="videos" className="py-16 bg-mariscos-850 text-mariscos-100 border-t border-mariscos-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brass font-body text-xs uppercase tracking-widest font-bold">🎬 NUESTROS VIDEOS</span>
          <h2 className="text-4xl font-display text-brass-light mt-2 tracking-wider">LO MÁS RECIENTE DEL CANAL</h2>
          <div className="w-16 h-0.5 bg-brass mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="bg-mariscos-900 rounded-xl overflow-hidden border border-mariscos-700 shadow-2xl hover:border-brass/30 transition-all duration-300">
              {/* Contenedor del video con miniatura simulada */}
              <div className="relative aspect-video bg-mariscos-950 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-mariscos-950 to-transparent opacity-60 z-10" />
                
                {/* Patrón rústico de fondo para simular el reproductor */}
                <div className="absolute inset-0 opacity-5 group-hover:scale-105 transition-transform duration-500" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #B5A642 2px, #B5A642 4px)`
                }} />

                {/* Botón de reproducción */}
                <a 
                  href={video.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative z-20 w-16 h-16 flex items-center justify-center rounded-full bg-brass text-mariscos-900 shadow-xl group-hover:bg-brass-light group-hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </a>
              </div>

              {/* Detalles del video */}
              <div className="p-6">
                <h3 className="text-xl font-display text-brass tracking-wide mb-2">
                  {video.title}
                </h3>
                <p className="text-sm font-body text-mariscos-300 leading-relaxed">
                  {video.description}
                </p>
                <div className="mt-4 pt-4 border-t border-mariscos-800 flex justify-end">
                  <a 
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-body text-brass hover:text-brass-light uppercase tracking-wider font-semibold transition-colors"
                  >
                    Ver en YouTube →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
