import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { Icon } from '../common/Icon';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Контакты */}
          <div className={styles.footerBlock}>
            <h3 className={styles.footerTitle}>Контакты</h3>
            <address className={styles.footerAddress}>
              <p>
                <Icon name="location" size={16} />
                ул. Николаева, 54
                <br />
                Электросталь, Московская обл., 144012
              </p>
              <p>
                <Icon name="phone" size={16} />
                <a href="tel:+79168174788">+7 (916) 817-47-88</a>
              </p>
              <p>
                <Icon name="email" size={16} />
                <a href="mailto:altair-stars@bk.ru">altair-stars@bk.ru</a>
              </p>
            </address>
          </div>

          {/* Режим работы */}
          <div className={styles.footerBlock}>
            <h3 className={styles.footerTitle}>Режим работы</h3>
            <div className={styles.footerSchedule}>
              <p>Пн-Пт: 09:00 - 20:00</p>
              <p>Сб: 10:00 - 18:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>

          {/* Соцсети */}
          <div className={styles.footerBlock}>
            <h3 className={styles.footerTitle}>Мы в соцсетях</h3>
            <div className={styles.footerSocial}>
              <a
                href="#"
                className={styles.footerSocialLink}
                aria-label="VK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="vk" size={24} />
              </a>
              <a
                href="#"
                className={styles.footerSocialLink}
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="telegram" size={24} />
              </a>
              <a
                href="#"
                className={styles.footerSocialLink}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className={styles.copyright}>
        <div className="container">
          <div className={styles.copyrightContent}>
            <p>© 2023 ООО "Альтаир Недвижимость". Все права защищены</p>
            <p>
              <Link to="/privacy">Политика конфиденциальности</Link>
            </p>
            <p>
              Разработка:{' '}
              <a href="https://github.com/fokinevgeny" target="_blank" rel="noopener noreferrer">
                Евгений Фокин
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
