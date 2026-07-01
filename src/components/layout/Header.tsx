import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '/src/assets/img/Logotype.webp';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Link to="/" className={styles.headerLogo}>
            <img src={logo} alt="ООО Альтаир Недвижимость" className={styles.logoImage} />
            <div className={styles.logoText}>
              <strong>ООО АЛЬТАИР</strong>
              <span>Недвижимость</span>
            </div>
          </Link>

          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>
              главная
            </Link>
            <Link to="/objects" className={styles.navLink}>
              объекты
            </Link>
            <Link to="/services" className={styles.navLink}>
              услуги
            </Link>
            <Link to="/about" className={styles.navLink}>
              о нас
            </Link>
            <Link to="/contacts" className={styles.navLink}>
              контакты
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
