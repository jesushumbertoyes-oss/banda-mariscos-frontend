import React from 'react';

const WhatsAppButton = ({ show }) => {
  // Tu número real de México (52) + tu celular (6868325044)
  const phoneNumber = "526868325044"; 
  const message = encodeURIComponent("¡Qué tal! Vengo de la página web de Banda Mariscos. Me interesa cotizar un corrido personalizado de urgencia.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-500 ease-in-out ${
        show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-0 pointer-events-none'
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.298 1.448 5.356 1.449 5.483 0 9.944-4.461 9.947-9.948.002-2.656-1.03-5.153-2.906-7.03C17.168 1.741 14.673.71 12.013.71c-5.486 0-9.946 4.46-9.949 9.948-.001 2.094.547 4.11 1.583 5.877l-1.006 3.677 3.773-.989zM15.827 13.066c-.32-.16-1.895-.935-2.188-1.042-.294-.107-.507-.16-.72.16-.214.32-.827 1.042-1.013 1.255-.186.213-.373.24-.693.08-.32-.16-1.352-.499-2.577-1.592-.953-.85-1.597-1.9-1.783-2.22-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.186.214-.32.32-.533.107-.213.054-.4-.027-.56-.08-.16-.72-1.734-.987-2.373-.26-.626-.525-.541-.72-.55-.186-.01-.4-.01-.613-.01-.214 0-.56.08-.854.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.293.16.2 2.257 3.447 5.467 4.834.763.33 1.36.527 1.823.674.766.244 1.463.21 2.014.128.614-.092 1.894-.773 2.16-1.48.267-.707.267-1.307.186-1.427-.08-.12-.293-.187-.613-.347z"/>
      </svg>
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
    </a>
  );
};

export default WhatsAppButton;
