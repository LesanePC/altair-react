import { Link } from 'react-router-dom';
import styles from './Intro.module.css';

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className="container text-center">
        <div className={styles.introInner}>
          <h1 className={styles.introTitle}>
            Профессиональные услуги по недвижимости
            <br />в Подмосковье с 2010 года
          </h1>
          <p className={styles.introSubtitle}>
            ООО «Альтаир Недвижимость» - ваша путеводная звезда на рынке недвижимости.
            <br />
            Мы работаем для Вас и приглашаем стать постоянными клиентами нашей компании.
          </p>
          <div className={styles.introButtons}>
            <Link to="/objects" className="btn btn-primary">
              Смотреть объекты
            </Link>
            <a href="#callback" className="btn btn-outline">
              Заказать звонок
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
