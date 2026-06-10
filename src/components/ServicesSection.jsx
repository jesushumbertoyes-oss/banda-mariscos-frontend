import { useEffect, useState } from 'react';
import { fetchServices } from '../services/api';
import ServiceCard from './ServiceCard';

const ServicesSection = ({ onSelectService }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const { data } = await fetchServices();
        setServices(data.results || data);
      } catch (err) {
        console.error('Error cargando servicios:', err);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  return (
    <section id="servicios" className="py-20 bg-mariscos-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="text-4xl mb-4">🎺</div>
          <h2 className="font-display text-4xl md:text-5xl text-brass mb-2">
            SERVICIOS MUSICALES
          </h2>
          <p className="text-mariscos-300 max-w-2xl mx-auto">
            Producción exclusiva con la firma callejera de Banda Mariscos.
            Tololoche pesado, vientos de guerra y el sabor sinaloense que tu proyecto necesita.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-80 bg-mariscos-800 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={onSelectService}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
