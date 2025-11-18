import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Coffee } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        ></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-brown-500/80 text-white text-sm font-medium mb-4 backdrop-blur-sm uppercase tracking-wider">
            Desde 1995
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Padaria do Seu Antonio
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light">
            O sabor rústico do campo, no coração da cidade. Pães de fermentação natural, bolos caseiros e o melhor café da região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lanches" className="px-8 py-4 bg-brown-600 hover:bg-brown-700 text-white rounded-lg font-medium transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Ver Cardápio <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/contato" className="px-8 py-4 bg-white hover:bg-gray-100 text-brown-900 rounded-lg font-medium transition-all transform hover:-translate-y-1">
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-b-4 border-brown-500">
              <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mb-6 text-brown-700">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brown-900 mb-3">Qualidade Artesanal</h3>
              <p className="text-gray-600 leading-relaxed">
                Nossos pães são feitos com fermentação lenta e ingredientes selecionados para garantir o sabor autêntico.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-b-4 border-brown-500">
              <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mb-6 text-brown-700">
                <Coffee className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brown-900 mb-3">Café Especial</h3>
              <p className="text-gray-600 leading-relaxed">
                Grãos moídos na hora para acompanhar aquele pão de queijo quentinho que só a gente sabe fazer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-b-4 border-brown-500">
              <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mb-6 text-brown-700">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brown-900 mb-3">Sempre Fresquinho</h3>
              <p className="text-gray-600 leading-relaxed">
                Fornadas saindo a todo momento. O cheirinho de pão quente é nosso convite para você entrar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Product Highlight */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Pão Rústico" 
              className="rounded-2xl shadow-xl object-cover h-[400px] w-full"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-brown-500 font-bold tracking-wider text-sm uppercase">O Favorito da Casa</span>
            <h2 className="font-serif text-4xl font-bold text-brown-900">Pão de Campanha Rústico</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nossa receita exclusiva, passada de geração em geração. Casca crocante, miolo macio e alveolado, feito com farinha orgânica e 24 horas de fermentação. Perfeito para acompanhar antepastos ou apenas com uma boa manteiga.
            </p>
            <Link to="/lanches" className="inline-flex items-center text-brown-700 font-bold hover:text-brown-900 transition-colors text-lg group">
              Ver todos os produtos <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;