import { Music, ChevronDown } from 'lucide-react';

const HeroSection = ({ bandInfo }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-mariscos-900 overflow-hidden"
    >
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            #B5A642 10px,
            #B5A642 11px
          )`
        }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <Music className="w-16 h-16 text-brass animate-pulse" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-brass mb-4 tracking-wider">
          BANDA MARISCOS
        </h1>

        <p className="text-mariscos-300 text-lg md:text-xl mb-2 font-medium">
          {bandInfo?.slogan || 'Regional Urbano · Sinaloa Callejero'}
        </p>

        <div className="w-24 h-1 bg-brass mx-auto my-6 rounded-full" />

        <p className="text-mariscos-200 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {bandInfo?.description || 
            'Puro metal, güiro tradicional y tololoche raspado. Sin guitarras, sin acordeón, sin piano. ' +
            'La banda sinaloense más rústica y callejera del regional urbano.'}
        </p>

        <div className="mt-12">
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 bg-brass text-mariscos-900 px-8 py-3 rounded-lg font-bold hover:bg-brass-light transition-colors"
          >
            Ver Servicios
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
