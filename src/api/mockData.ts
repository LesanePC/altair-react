import type { ObjectItem, ServiceItem, TeamMember, Review, WorkCategory } from '../types';

// Objects
import object2 from '../assets/img/objects/2.webp';
import object3 from '../assets/img/objects/3.webp';
import object4 from '../assets/img/objects/4.webp';
import object5 from '../assets/img/objects/5.webp';
import object6 from '../assets/img/objects/6.webp';

// Team
import team1 from '../assets/img/team/team1.webp';
import team2 from '../assets/img/team/team2.webp';
import team3 from '../assets/img/team/team3.webp';

// Works
import work1 from '../assets/img/works/1.webp';
import work2 from '../assets/img/works/2.webp';
import work3 from '../assets/img/works/3.webp';
import work4 from '../assets/img/works/4.webp';
import work5 from '../assets/img/works/5.webp';
import work6 from '../assets/img/works/6.webp';

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
    image: object2,
  },
  {
    id: '2',
    title: 'Дом с участком',
    category: 'Дом',
    price: 25000000,
    area: 180,
    rooms: 5,
    description: 'Дом с большим участком в экологически чистом районе.',
    image: object3,
  },
  {
    id: '3',
    title: 'Коммерческое помещение',
    category: 'Коммерческая',
    price: 8000000,
    area: 120,
    rooms: 0,
    description: 'Помещение под магазин или офис на оживленной улице.',
    image: object4,
  },
  {
    id: '4',
    title: 'Квартира-студия',
    category: 'Квартира',
    price: 8000000,
    area: 45,
    rooms: 1,
    floor: 3,
    description: 'Современная студия в новостройке, отделка под ключ.',
    image: object5,
  },
  {
    id: '5',
    title: 'Дачный дом',
    category: 'Дом',
    price: 12000000,
    area: 100,
    rooms: 4,
    description: 'Уютный дачный дом с баней и гаражом.',
    image: object6,
  },
];

export const mockServices: ServiceItem[] = [
  {
    id: 's1',
    title: 'Оценка недвижимости',
    description:
      'Профессиональная оценка рыночной стоимости вашего объекта. Определяем реальную цену с учётом всех факторов.',
    price: 'от 5 000 ₽',
  },
  {
    id: 's2',
    title: 'Юридическое сопровождение',
    description:
      'Полное юридическое сопровождение сделки с недвижимостью. Проверка документов, составление договоров.',
    price: 'от 15 000 ₽',
  },
  {
    id: 's3',
    title: 'Помощь в получении ипотеки',
    description:
      'Подбор лучших условий ипотеки в ведущих банках. Помощь в сборе документов и одобрении заявки.',
    price: 'от 10 000 ₽',
  },
  {
    id: 's4',
    title: 'Приватизация жилья',
    description:
      'Оформление приватизации квартир и комнат. Полный пакет документов и сопровождение в госорганах.',
    price: 'от 8 000 ₽',
  },
  {
    id: 's5',
    title: 'Составление договоров',
    description:
      'Составление и проверка договоров купли-продажи, аренды, мены. Юридическая экспертиза документов.',
    price: 'от 3 000 ₽',
  },
  {
    id: 's6',
    title: 'Подбор недвижимости',
    description:
      'Индивидуальный подбор объектов по вашим критериям. Экономия времени и полное сопровождение.',
    price: 'от 20 000 ₽',
  },
];

export const mockTeam: TeamMember[] = [
  {
    id: 't1',
    name: 'Анна Иванова',
    position: 'Руководитель отдела продаж',
    experience: '12 лет',
    photo: team1,
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
    photo: team2,
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
    photo: team3,
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
    image: work3,
    link: '/objects?category=buy',
    items: ['Квартиры-студии', '1-4 комнатные квартиры', 'Доля в квартире', 'Комнаты'],
  },
  {
    id: 'rent-sell',
    title: 'Снять / Продать',
    image: work2,
    link: '/objects?category=rent-sell',
    items: ['Квартиры-студии', '1-4 комнатные квартиры', 'Комнаты'],
  },
  {
    id: 'commercial',
    title: 'Коммерческая недвижимость',
    image: work5,
    link: '/objects?category=commercial',
    items: ['Гаражи', 'Производственные помещения', 'Торговые помещения'],
  },
  {
    id: 'rent',
    title: 'Аренда',
    image: work1,
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
    image: work6,
    link: '/objects?category=houses',
    items: ['Дома и коттеджи', 'Дачи', 'Участки ИЖС, СНТ, ДНП'],
  },
  {
    id: 'legal',
    title: 'Юридические услуги',
    image: work4,
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
    photo: '',
  },
  {
    id: 'r2',
    author: 'Алексей Петров',
    text: 'Заказывал оценку недвижимости. Всё быстро, чётко, без лишней бюрократии. Рекомендую!',
    rating: 5,
    date: '2025-03-10',
    photo: '',
  },
  {
    id: 'r3',
    author: 'Мария Иванова',
    text: 'Продали мою квартиру за 2 недели. Отличная работа команды!',
    rating: 4,
    date: '2025-03-01',
    photo: '',
  },
  {
    id: 'r4',
    author: 'Дмитрий Козлов',
    text: 'Благодарю за помощь в подборе коммерческой недвижимости. Нашли идеальный вариант.',
    rating: 5,
    date: '2025-02-20',
    photo: '',
  },
];
