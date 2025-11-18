import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Croissant } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/lanches', label: 'Lanches' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-brown-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 text-brown-800 hover:text-brown-600 transition-colors">
              <Croissant className="h-8 w-8" />
              <span className="font-serif font-bold text-xl tracking-wide">Padaria do Seu Antonio</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-brown-800 border-b-2 border-brown-500'
                    : 'text-gray-500 hover:text-brown-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-brown-800 hover:bg-brown-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-brown-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-brown-900 bg-brown-50'
                    : 'text-gray-600 hover:text-brown-800 hover:bg-brown-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;