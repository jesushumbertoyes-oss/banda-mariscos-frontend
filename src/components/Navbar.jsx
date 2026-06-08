import { useState } from 'react';
import { Menu, X, Music } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#videos', label: 'Videos' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#cotizar', label: 'Cotizar' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-mariscos-900/95 backdrop-blur-sm border-b border-mariscos-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Music className="w-6 h-6 text-brass" />
            <span className="font-display text-2xl text-brass tracking-wider">
              BANDA MARISCOS
            </span>
          </div>
          
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-mariscos-200 hover:text-brass transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-mariscos-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-mariscos-800 border-t border-mariscos-700">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-mariscos-200 hover:bg-mariscos-700 hover:text-brass transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
