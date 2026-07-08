import { mockTeam } from '../api/mockData';
import { TeamList } from '../components/about/TeamList';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      {/* Hero-секция */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>О компании</h1>
          <p className={styles.subtitle}>
            ООО «Альтаир Недвижимость» - ваша путеводная звезда на рынке недвижимости.
          </p>
        </div>
      </section>

      {/* О компании */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>Кто мы</h2>
            <p className={styles.aboutText}>
              Мы работаем на рынке недвижимости с 2010 года. За это время мы помогли более 1000
              клиентам найти свой идеальный дом, выгодно продать или арендовать недвижимость. Наша
              команда - это профессионалы с многолетним опытом, которые знают все тонкости рынка
              недвижимости в Подмосковье.
            </p>
            <p className={styles.aboutText}>
              Мы ценим репутацию и работаем честно, прозрачно и с душой. Каждый наш клиент получает
              индивидуальный подход и полное сопровождение на всех этапах сделки.
            </p>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className={styles.teamSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Наши специалисты</h2>
          <p className={styles.sectionSubtitle}>
            Команда профессионалов с опытом работы более 10 лет. Гарантия безопасности каждой
            сделки.
          </p>
          <TeamList members={mockTeam} />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
