import React from 'react';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-900 text-brown-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-white">Padaria do Seu Antonio</h3>
            <p className="text-brown-300 font-sans mb-4">
              Tradição e sabor em cada fornada. O autêntico pão rústico com o toque moderno que você merece.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brown-400" />
                <span>Rua Bonfim, número 899</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-brown-400" />
                <span>99 99999999</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-white">Horário</h3>
            <p className="text-brown-300 mb-2">Segunda a Sexta: 06:00 - 20:00</p>
            <p className="text-brown-300 mb-4">Sábado e Domingo: 07:00 - 18:00</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brown-800 text-center text-sm text-brown-400">
          <p>&copy; {new Date().getFullYear()} Padaria do Seu Antonio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;