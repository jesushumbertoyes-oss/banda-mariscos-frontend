import React from 'react';

const Services = () => {
  const servicios = [
    {
      id: 1,
      title: "Corrido o Canción por Encargo",
      duration: "⏱️ 2-3 minutos",
      price: "$120 MXN",
      description: "Tú me das los datos por WhatsApp y yo me encargo de todo el jale. Olvídate de aplicaciones automáticas que te piden tarjeta internacional y te escupen rimas de robot que aquí ni usamos. Nos aseguramos de que los nombres, apodos y vivencias de tu gente queden bien hilados al verdadero estilo sinaloense, listo para enviar y presumir en tus estados o negocio."
    }
  ];

  return (
    <div className="py-12 bg-mariscos-900 text-mariscos-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-display text-brass text-center mb-8 tracking-wider">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="bg-mariscos-850 p-6 rounded-lg border border-mariscos-700 shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-display text-brass-light tracking-wide">{servicio.title}</h3>
                <span className="text-xs bg-mariscos-700 text-brass px-2 py-1 rounded-full font-body">{servicio.duration}</span>
              </div>
              <p className="text-sm font-body text-mariscos-300 mb-6 leading-relaxed">
                {servicio.description}
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-mariscos-700/50">
                <span className="text-xs font-body text-mariscos-400 uppercase tracking-widest">Precio Especial</span>
                <span className="text-3xl font-display text-brass tracking-wider">{servicio.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
