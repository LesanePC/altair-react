import { Icon } from '../../common/Icon';
import styles from './ContactInfo.module.css';

export const ContactInfo = () => {
  return (
    <div className={styles.info}>
      <h3 className={styles.title}>Контакты</h3>

      <div className={styles.item}>
        <div className={styles.iconWrapper}>
          <Icon name="location" size={24} />
        </div>
        <div>
          <p className={styles.label}>Адрес</p>
          <p className={styles.value}>
            ул. Николаева, 54
            <br />
            Электросталь, Московская обл., 144012
          </p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.iconWrapper}>
          <Icon name="phone" size={24} />
        </div>
        <div>
          <p className={styles.label}>Телефон</p>
          <a href="tel:+79168174788" className={styles.value}>
            +7 (916) 817-47-88
          </a>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.iconWrapper}>
          <Icon name="email" size={24} />
        </div>
        <div>
          <p className={styles.label}>Email</p>
          <a href="mailto:altair-stars@bk.ru" className={styles.value}>
            altair-stars@bk.ru
          </a>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.iconWrapper}>
          <Icon name="clock" size={24} />
        </div>
        <div>
          <p className={styles.label}>Режим работы</p>
          <p className={styles.value}>
            Пн-Пт: 09:00 - 20:00
            <br />
            Сб: 10:00 - 18:00
            <br />
            Вс: выходной
          </p>
        </div>
      </div>
    </div>
  );
};
