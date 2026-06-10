const ServiceCard = ({ service, onSelect }) => {
  const serviceIcons = {
    intro_outro: '🎬',
    custom_song: '🎵',
    soundscape: '🌊',
    soundbite: '🔥',
  };

  return (
    <div className="bg-mariscos-800 rounded-2xl p-6 border border-mariscos-700 hover:border-brass/50 transition-all hover:shadow-xl hover:shadow-brass/5 flex flex-col h-full">
      <div className="text-4xl mb-4">{serviceIcons[service.service_type] || '🎺'}</div>

      <h3 className="font-display text-2xl text-brass mb-2">
        {service.title}
      </h3>

      <p className="text-mariscos-300 text-sm mb-4">
        {service.short_description}
      </p>

      {service.duration_info && (
        <div className="flex items-center gap-2 text-mariscos-400 text-sm mb-3">
          <span className="text-sm">⏱️</span>
          <span>{service.duration_info}</span>
        </div>
      )}

      {service.price_range && (
        <div className="text-brass-light font-medium mb-4">
          {service.price_range}
        </div>
      )}

      {service.includes && service.includes.length > 0 && (
        <ul className="space-y-2 mb-6 flex-grow">
          {service.includes.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-mariscos-200 text-sm">
              <span className="text-brass flex-shrink-0">✔️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => onSelect(service.id)}
        className="w-full flex items-center justify-center gap-2 bg-mariscos-700 hover:bg-brass hover:text-mariscos-900 text-mariscos-100 py-3 rounded-lg font-medium transition-colors"
      >
        Solicitar Cotización
        <span className="font-bold">→</span>
      </button>
    </div>
  );
};

export default ServiceCard;
