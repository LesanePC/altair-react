export interface ObjectItem {
  id: string;
  title: string;
  category: string;
  price: number;
  area: number;
  rooms: number;
  floor?: number;
  description: string;
  image: string;
  isFavorite?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  photo: string;
  description?: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  photo?: string;
}
