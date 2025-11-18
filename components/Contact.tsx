import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-brown-900 mb-4">Fale Conosco</h1>
          <p className="text-gray-600">Estamos ansiosos para te receber ou ouvir sua sugestão.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-brown-50 p-8 md:p-12 rounded-2xl">
            <h2 className="font-serif text-2xl font-bold text-brown-800 mb-8">Informações</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brown-200 p-3 rounded-full text-brown-800">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brown-900">Endereço</h3>
                  <p className="text-gray-600">Rua Bonfim, número 899</p>
                  <p className="text-gray-500 text-sm">Bairro Centro, Cidade Exemplo</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brown-200 p-3 rounded-full text-brown-800">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brown-900">Telefone</h3>
                  <p className="text-gray-600">99 99999999</p>
                  <p className="text-gray-500 text-sm">Atendemos também via WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brown-200 p-3 rounded-full text-brown-800">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brown-900">Email</h3>
                  <p className="text-gray-600">contato@padariadoseuantonio.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brown-200 p-3 rounded-full text-brown-800">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brown-900">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Seg - Sex: 06:00 - 20:00</p>
                  <p className="text-gray-600">Sáb - Dom: 07:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-500 focus:border-transparent outline-none transition-all"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brown-600 hover:bg-brown-700 text-white font-bold py-4 rounded-lg transition-colors shadow-md"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;