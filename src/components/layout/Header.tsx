import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header style={{ padding: '20px', background: '#f0f0f0' }}>
      <nav>
        <Link to="/" style={{ marginRight: '15px' }}>
          Главная
        </Link>
        <Link to="/objects" style={{ marginRight: '15px' }}>
          Объекты
        </Link>
        <Link to="/services" style={{ marginRight: '15px' }}>
          Услуги
        </Link>
        <Link to="/about" style={{ marginRight: '15px' }}>
          О компании
        </Link>
        <Link to="/contacts" style={{ marginRight: '15px' }}>
          Контакты
        </Link>
      </nav>
    </header>
  );
};
