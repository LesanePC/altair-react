import { Link } from 'react-router-dom';
import { workCategories } from '../../../api/mockData';
import styles from './Works.module.css';

export const Works = () => {
  return (
    <section className="section">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">Наши услуги</h2>
          <p className="section__description">Полный спектр услуг на рынке недвижимости</p>
        </header>

        <div className={styles.works}>
          {workCategories.map((category) => (
            <Link to={category.link} className={styles.worksItem} key={category.id}>
              <img
                className={styles.worksPhoto}
                src={category.image}
                alt={category.title}
                loading="lazy"
              />
              <div className={styles.worksContent}>
                <h3 className={styles.worksTitle}>{category.title}</h3>
                <ul className={styles.worksList}>
                  {category.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className={styles.worksHint}>Нажмите для перехода</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
