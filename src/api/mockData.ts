import type { ObjectItem, ServiceItem, TeamMember, Review, WorkCategory } from '../types';

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
    name: 'Анна Иванова',
    position: 'Руководитель отдела продаж',
    experience: '12 лет',
    photo: '/assets/img/team/team1.webp',
    phone: '+7 (916) 123-45-67',
    email: 'a.ivanova@altair.ru',
    credentials: 'Аттестат № РОСС RU РГР ТОС 50 БН 687',
    credentialsDate: 'Срок действия: 22.12.2024',
  },
  {
    id: 't2',
    name: 'Михаил Петров',
    position: 'Ведущий риелтор',
    experience: '8 лет',
    photo: '/assets/img/team/team2.webp',
    phone: '+7 (916) 987-65-43',
    email: 'm.petrov@altair.ru',
    credentials: 'Аттестат № РОСС RU РГР ТОС 50 БН 688',
    credentialsDate: 'Срок действия: 15.03.2025',
  },
  {
    id: 't3',
    name: 'Елена Соколова',
    position: 'Юрист по недвижимости',
    experience: '10 лет',
    photo: '/assets/img/team/team3.webp',
    phone: '+7 (916) 555-44-33',
    email: 'e.sokolova@altair.ru',
    credentials: 'Аттестат № РОСС RU РГР ТОС 50 БН 689',
    credentialsDate: 'Срок действия: 10.06.2025',
  },
];

export const workCategories: WorkCategory[] = [
  {
    id: 'buy',
    title: 'Купить',
    image: '/assets/img/works/3.webp',
    link: '/objects?category=buy',
    items: ['Квартиры-студии', '1-4 комнатные квартиры', 'Доля в квартире', 'Комнаты'],
  },
  {
    id: 'rent-sell',
    title: 'Снять / Продать',
    image: '/assets/img/works/2.webp',
    link: '/objects?category=rent-sell',
    items: ['Квартиры-студии', '1-4 комнатные квартиры', 'Комнаты'],
  },
  {
    id: 'commercial',
    title: 'Коммерческая недвижимость',
    image: '/assets/img/works/5.webp',
    link: '/objects?category=commercial',
    items: ['Гаражи', 'Производственные помещения', 'Торговые помещения'],
  },
  {
    id: 'rent',
    title: 'Аренда',
    image: '/assets/img/works/1.webp',
    link: '/objects?category=rent',
    items: [
      'Офисы',
      'Торговые помещения',
      'Помещения под бытовые услуги',
      'Земля промышленного назначения',
    ],
  },
  {
    id: 'houses',
    title: 'Дома и участки',
    image: '/assets/img/works/6.webp',
    link: '/objects?category=houses',
    items: ['Дома и коттеджи', 'Дачи', 'Участки ИЖС, СНТ, ДНП'],
  },
  {
    id: 'legal',
    title: 'Юридические услуги',
    image: '/assets/img/works/4.webp',
    link: '/services#legal',
    items: ['Приватизация жилья', 'Сопровождение сделок', 'Составление договоров'],
  },
];

export const mockReviews: Review[] = [
  {
    id: 'r1',
    author: 'Екатерина Смирнова',
    text: 'Отличное агентство! Помогли найти квартиру за 2 дня. Профессиональный подход и внимательное отношение к клиенту.',
    rating: 5,
    date: '2025-03-15',
    photo: '/assets/img/Feedback/avatar1.jpg',
  },
  {
    id: 'r2',
    author: 'Алексей Петров',
    text: 'Заказывал оценку недвижимости. Всё быстро, чётко, без лишней бюрократии. Рекомендую!',
    rating: 5,
    date: '2025-03-10',
    photo: '/assets/img/Feedback/avatar2.jpg',
  },
  {
    id: 'r3',
    author: 'Мария Иванова',
    text: 'Продали мою квартиру за 2 недели. Отличная работа команды!',
    rating: 4,
    date: '2025-03-01',
    photo: '/assets/img/Feedback/avatar3.jpg',
  },
  {
    id: 'r4',
    author: 'Дмитрий Козлов',
    text: 'Благодарю за помощь в подборе коммерческой недвижимости. Нашли идеальный вариант.',
    rating: 5,
    date: '2025-02-20',
    photo: '/assets/img/Feedback/avatar4.jpg',
  },
];
