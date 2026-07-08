import type { ServiceItem } from '../../../types';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.numberWrapper}>
        <span className={styles.number}>0{service.id.replace('s', '')}</span>
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
      <div className={styles.price}>{service.price}</div>
    </article>
  );
};
