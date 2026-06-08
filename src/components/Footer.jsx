import { Music, Youtube, Instagram } from 'lucide-react';

const Footer = ({ bandInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mariscos-950 border-t border-mariscos-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Music className="w-6 h-6 text-brass" />
            <span className="font-display text-xl text-brass tracking-wider">
              BANDA MARISCOS
            </span>
          </div>

          <div className="flex items-center gap-6">
            {bandInfo?.youtube_channel_url && (
              <a 
                href={bandInfo.youtube_channel_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mariscos-400 hover:text-brass transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            )}
            <a 
              href="#" 
              className="text-mariscos-400 hover:text-brass transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <p className="text-mariscos-500 text-sm text-center md:text-right">
            © {currentYear} Banda Mariscos. Todos los derechos reservados.<br />
            <span className="text-mariscos-600">Sinaloa, México · Regional Urbano</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
