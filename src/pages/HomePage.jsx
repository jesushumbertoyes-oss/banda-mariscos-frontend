import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import VideosSection from "../components/VideosSection";
import ServicesSection from "../components/ServicesSection";
import QuoteForm from "../components/QuoteForm";
import { fetchBandInfo, fetchServices } from "../services/api";
import { Music } from 'lucide-react';

const HomePage = () => {
  const [info, setInfo] = useState(null);
  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState(null);

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
    <div className="min-h-screen bg-mariscos-900 text-mariscos-100">
      <Navbar />
      <main>
        <HeroSection bandInfo={info} />
        <VideosSection />
        <ServicesSection onSelectService={handleSelect} />
        <QuoteForm preselectedService={selected} services={services} />
      </main>
    </div>
  );
};

export default HomePage;
