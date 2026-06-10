import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import VideosSection from "../components/VideosSection";
import ServicesSection from "../components/ServicesSection";
import QuoteForm from "../components/QuoteForm";
import WhatsAppButton from "../components/WhatsAppButton";
import { fetchBandInfo, fetchServices } from "../services/api";
import { Music } from 'lucide-react';

const HomePage = () => {
  const [info, setInfo] = useState(null);
  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showWhatsapp, setShowWhatsapp] = useState(false); // Estado para controlar visibilidad

  useEffect(() => {
    const loadData = async () => {
      try {
        const [bandRes, servicesRes] = await Promise.all([
          fetchBandInfo(),
          fetchServices()
        ]);
        setInfo(bandRes.data);
        setServices(servicesRes.data.results || servicesRes.data);
      } catch (e) {
        console.error("Error cargando datos de Django:", e);
      }
    };
    loadData();
  }, []);

  // Efecto inteligente para detectar cuándo se llega a la sección de cotización
  useEffect(() => {
    const target = document.getElementById("cotizar");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el formulario es visible en pantalla, activamos el botón
        setShowWhatsapp(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // Se activa en cuanto asoma el 10% de la sección
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [info]); // Re-ejecutar cuando los datos terminen de cargar y el formulario exista en el DOM

  const handleSelect = (id) => {
    setSelected(id);
    document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!info) {
    return (
      <div className="min-h-screen bg-mariscos-900 flex flex-col items-center justify-center text-mariscos-100 gap-4">
        <Music className="w-12 h-12 text-brass animate-spin" />
        <span className="font-display text-xl tracking-widest text-brass-light animate-pulse uppercase">
          Cargando...
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mariscos-900 text-mariscos-100 relative">
      <Navbar />
      <main>
        <HeroSection bandInfo={info} />
        <VideosSection />
        <ServicesSection onSelectService={handleSelect} />
        <div id="cotizar">
          <QuoteForm preselectedService={selected} services={services} />
        </div>
      </main>
      
      {/* Pasamos el estado al botón flotante */}
      <WhatsAppButton show={showWhatsapp} />
    </div>
  );
};

export default HomePage;
