import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VideosSection from '../components/VideosSection';
import ServicesSection from '../components/ServicesSection';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';
import { fetchBandInfo, fetchServices } from '../services/api';

const HomePage = () => {
  const [bandInfo, setBandInfo] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [bandRes, servicesRes] = await Promise.all([
          fetchBandInfo(),
          fetchServices()
        ]);
        setBandInfo(bandRes.data);
        setServices(servicesRes.data.results || servicesRes.data);
      } catch (err) {
        console.error('Error cargando datos iniciales:', err);
      }
    };
    loadData();
  }, []);

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
    // Scroll suave al formulario
    document.getElementById('cotizar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-mariscos-900 text-mariscos-100 font-body">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#2d1f14',
            color: '#FFE4C4',
            border: '1px solid #B5A642',
          },
        }}
      />
      
      <Navbar />
      
      <main>
        <HeroSection bandInfo={bandInfo} />
        <VideosSection />
        <ServicesSection onSelectService={handleSelectService} />
        <QuoteForm 
          preselectedService={selectedService} 
          services={services}
        />
      </main>
      
      <Footer bandInfo={bandInfo} />
    </div>
  );
};

export default HomePage;
