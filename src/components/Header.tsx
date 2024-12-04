import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'schedule', label: 'Programmation' },
  { id: 'artists', label: 'Artistes' },
  { id: 'practical', label: 'Infos Pratiques' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-[#350B89]/90 backdrop-blur-sm border-b border-[#FFD84D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-[#FFD84D] text-2xl font-bold tracking-wider">Les Noctambules</div>
          
          <button 
            className="md:hidden text-[#F4F3EE]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[#F4F3EE] hover:text-[#FFD84D] transition-colors duration-200 text-sm uppercase tracking-wider font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD84D] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-[#F4F3EE] hover:text-[#FFD84D] transition-colors duration-200 px-3 py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}