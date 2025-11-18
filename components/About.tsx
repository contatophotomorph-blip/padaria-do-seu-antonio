import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brown-900 mb-4">Nossa História</h1>
          <div className="h-1 w-20 bg-brown-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Seu Antonio na padaria" 
                className="h-full w-full object-cover min-h-[400px]"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold text-brown-800 mb-6">A Paixão de Seu Antonio</h2>
              <div className="space-y-4 text-gray-600 text-lg font-sans leading-relaxed">
                <p>
                  Tudo começou em uma pequena cozinha, com apenas um forno e o sonho de trazer o verdadeiro sabor do pão artesanal para o bairro. Seu Antonio, fundador e alma deste lugar, acredita que pão não é apenas farinha e água, mas sim tempo, paciência e amor.
                </p>
                <p>
                  Na "Padaria do Seu Antonio", respeitamos as tradições. Usamos métodos antigos de panificação que garantem não só um sabor superior, mas também uma digestão mais leve e saudável.
                </p>
                <p>
                  Localizada na Rua Bonfim, 899, nossa padaria se tornou um ponto de encontro para quem aprecia um ambiente rústico, acolhedor e, claro, uma comida deliciosa.
                </p>
                <blockquote className="border-l-4 border-brown-500 pl-4 italic text-brown-700 my-6">
                  "O segredo de um bom pão é ouvir o que a massa tem a dizer." — Seu Antonio
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-brown-800 text-white p-8 rounded-xl text-center">
            <h3 className="font-serif text-4xl font-bold mb-2">25+</h3>
            <p className="text-brown-200">Anos de Tradição</p>
          </div>
          <div className="bg-brown-700 text-white p-8 rounded-xl text-center">
            <h3 className="font-serif text-4xl font-bold mb-2">5k+</h3>
            <p className="text-brown-200">Pães Assados Diariamente</p>
          </div>
          <div className="bg-brown-600 text-white p-8 rounded-xl text-center">
            <h3 className="font-serif text-4xl font-bold mb-2">100%</h3>
            <p className="text-brown-200">Satisfação Garantida</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;