import { mockServices } from '../api/mockData';
import { ServicesList } from '../components/services/ServicesList';
import styles from './ServicesPage.module.css';

const ServicesPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Наши услуги</h1>
          <p className={styles.subtitle}>
            Полный спектр услуг на рынке недвижимости. Работаем профессионально и прозрачно.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <ServicesList services={mockServices} />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
