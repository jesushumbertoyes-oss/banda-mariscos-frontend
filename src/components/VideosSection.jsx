import { useEffect, useState } from 'react';
import { Youtube, Play } from 'lucide-react';
import { fetchVideos } from '../services/api';

const VideosSection = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const { data } = await fetchVideos();
        setVideos(data.results || data);
      } catch (err) {
        console.error('Error cargando videos:', err);
      } finally {
        setLoading(false);
      }
    };
    loadVideos();
  }, []);

  if (loading) {
    return (
      <section id="videos" className="py-20 bg-mariscos-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-pulse text-brass">Cargando videos...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="videos" className="py-20 bg-mariscos-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Youtube className="w-10 h-10 text-brass mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl text-brass mb-2">
            NUESTROS VIDEOS
          </h2>
          <p className="text-mariscos-300">Lo más reciente del canal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(video => (
            <div 
              key={video.id} 
              className="group bg-mariscos-900 rounded-xl overflow-hidden border border-mariscos-700 hover:border-brass/50 transition-all"
            >
              <div className="relative aspect-video bg-mariscos-950">
                {video.thumbnail_url ? (
                  <img 
                    src={video.thumbnail_url} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Play className="w-12 h-12 text-mariscos-600" />
                  </div>
                )}
                <a 
                  href={video.watch_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40"
                >
                  <Play className="w-16 h-16 text-brass fill-brass" />
                </a>
              </div>
              <div className="p-4">
                <h3 className="text-mariscos-100 font-medium line-clamp-2 mb-1">
                  {video.title}
                </h3>
                {video.description && (
                  <p className="text-mariscos-400 text-sm line-clamp-2">
                    {video.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {videos.length === 0 && (
          <div className="text-center text-mariscos-400 py-12">
            Próximamente videos disponibles
          </div>
        )}
      </div>
    </section>
  );
};

export default VideosSection;
