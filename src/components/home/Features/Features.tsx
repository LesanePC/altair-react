import { Icon } from '../../common/Icon';
import styles from './Features.module.css';

const featuresData = [
  {
    icon: 'money',
    title: 'Экономим бюджет',
    description:
      'Поможем подобрать ипотеку с низкой ставкой и оформить субсидии. Средняя экономия для клиентов — от 200 000 ₽',
    number: '500+',
  },
  {
    icon: 'star',
    title: 'Положительные отзывы',
    description:
      'Более 1000 довольных клиентов рекомендуют нас друзьям. Мы ценим репутацию и работаем честно',
    number: '98%',
  },
  {
    icon: 'clock',
    title: 'Ваш комфорт',
    description: 'Поможем оценить качество жилья, подскажем лучшие районы и скрытые нюансы',
    number: '24/7',
  },
  {
    icon: 'location',
    title: 'Мы рядом',
    description: 'Офис в центре города. Менеджеры всегда на связи и готовы проконсультировать',
    number: '5 мин',
  },
];

export const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <header className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>Почему выбирают нас?</h2>
          <p className={styles.featuresDescription}>
            Мы подберем оптимальный вариант покупки или продажи недвижимости, исходя из ваших
            пожеланий и возможностей
          </p>
        </header>

        <div className={styles.features}>
          {featuresData.map((item, index) => (
            <article className={styles.featuresItem} key={index}>
              <div className={styles.featuresIconWrapper}>
                <Icon name={item.icon} size={48} className={styles.featuresIconSvg} />
                <span className={styles.featuresNumber}>{item.number}</span>
              </div>
              <h3 className={styles.featuresTitles}>{item.title}</h3>
              <p className={styles.featuresText}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
