export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'paes' | 'doces' | 'bebidas' | 'salgados';
  image: string;
}

export interface BakeryInfo {
  name: string;
  address: string;
  phone: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
