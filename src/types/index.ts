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
  experience: string;
  photo: string;
  phone: string;
  email: string;
  credentials: string;
  credentialsDate: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  photo?: string;
}

export interface WorkCategory {
  id: string;
  title: string;
  image: string;
  link: string;
  items: string[];
}
