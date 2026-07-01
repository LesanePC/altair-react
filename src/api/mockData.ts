import type { ObjectItem, ServiceItem, TeamMember, Review } from '../types';

export const mockObjects: ObjectItem[] = [
  {
    id: '1',
    title: 'Квартира в центре',
    category: 'Квартира',
    price: 15000000,
    area: 85,
    rooms: 3,
    floor: 5,
    description: 'Просторная квартира в историческом центре, рядом с метро.',
    image: '/assets/img/objects/object1.jpg',
  },
];

export const mockServices: ServiceItem[] = [
  {
    id: 's1',
    title: 'Оценка недвижимости',
    description: 'Профессиональная оценка рыночной стоимости вашего объекта.',
    price: 'от 5 000 ₽',
  },
];

export const mockTeam: TeamMember[] = [
  {
    id: 't1',
    name: 'Иван Иванов',
    position: 'Генеральный директор',
    photo: '/assets/img/team/ivanov.jpg',
    description: 'Более 15 лет в сфере недвижимости...',
  },
];

export const mockReviews: Review[] = [
  {
    id: 'r1',
    author: 'Екатерина Смирнова',
    text: 'Отличное агентство! Помогли найти квартиру за 2 дня.',
    rating: 5,
    date: '2025-03-15',
  },
];
