import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/img/Logotype.webp';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header} id="header">
      <div className="container">
        <div className={styles.headerInner}>
          {/* Логотип */}
          <Link to="/" className={styles.headerLogo} aria-label="На главную">
            <img src={logo} alt="ООО Альтаир Недвижимость" className={styles.logoImage} />
            <div className={styles.logoText}>
              <strong>ООО АЛЬТАИР</strong>
              <span>Недвижимость</span>
            </div>
          </Link>

          {/* Навигация */}
          <nav className={styles.nav} id="nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
              onClick={closeMenu}
              end
            >
              главная
            </NavLink>
            <NavLink
              to="/objects"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
              onClick={closeMenu}
            >
              объекты
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
              onClick={closeMenu}
            >
              услуги
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
              onClick={closeMenu}
            >
              о нас
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
              onClick={closeMenu}
            >
              контакты
            </NavLink>
          </nav>

          {/* Бургер-меню */}
          <button
            className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            aria-controls="nav"
          >
            <span className={styles.burgerItem}></span>
            <span className={styles.burgerText}>Меню</span>
          </button>
        </div>
      </div>
    </header>
  );
};
