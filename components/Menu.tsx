import React, { useState } from 'react';
import { MenuItem } from '../types';

const items: MenuItem[] = [
  { id: 1, name: 'Pão Francês', description: 'Clássico, crocante e quentinho.', price: 'R$ 15,00/kg', category: 'paes', image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Croissant Amanteigado', description: 'Massa folhada legítima francesa.', price: 'R$ 8,50', category: 'salgados', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Bolo de Cenoura', description: 'Com cobertura generosa de chocolate.', price: 'R$ 6,00/fatia', category: 'doces', image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Pão de Queijo', description: 'Tradicional mineiro, muito queijo.', price: 'R$ 4,00', category: 'salgados', image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'Cappuccino Italiano', description: 'Espresso, leite vaporizado e cacau.', price: 'R$ 9,00', category: 'bebidas', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 6, name: 'Sonho de Creme', description: 'Massa fofinha recheada com creme.', price: 'R$ 5,50', category: 'doces', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 7, name: 'Sanduíche Natural', description: 'No pão integral com frango e salada.', price: 'R$ 12,00', category: 'salgados', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 8, name: 'Suco de Laranja', description: 'Natural, feito na hora.', price: 'R$ 8,00', category: 'bebidas', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
];

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');

  const filteredItems = filter === 'todos' ? items : items.filter(item => item.category === filter);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'paes', label: 'Pães' },
    { id: 'salgados', label: 'Salgados' },
    { id: 'doces', label: 'Doces' },
    { id: 'bebidas', label: 'Bebidas' },
  ];

  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-brown-900 mb-4">Nossos Lanches</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uma seleção cuidadosa de delícias feitas artesanalmente para você.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id
                  ? 'bg-brown-600 text-white shadow-md'
                  : 'bg-white text-brown-600 border border-brown-200 hover:bg-brown-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group border border-brown-50">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg font-bold text-brown-900 leading-tight">{item.name}</h3>
                  <span className="bg-brown-100 text-brown-800 text-xs font-bold px-2 py-1 rounded ml-2 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-sans mb-4 line-clamp-2">
                  {item.description}
                </p>
                <button className="w-full py-2 border border-brown-600 text-brown-600 rounded hover:bg-brown-600 hover:text-white transition-colors text-sm font-medium">
                  Peça no Balcão
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;