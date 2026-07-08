import type { ObjectItem } from '../../../types';
import styles from './ObjectCard.module.css';

interface ObjectCardProps {
  object: ObjectItem;
}

export const ObjectCard = ({ object }: ObjectCardProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU');
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={object.image} alt={object.title} className={styles.image} loading="lazy" />
        <span className={styles.category}>{object.category}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{object.title}</h3>
        <p className={styles.description}>{object.description}</p>
        <div className={styles.details}>
          <span>Площадь: {object.area} м²</span>
          <span>Комнат: {object.rooms}</span>
          {object.floor && <span>Этаж: {object.floor}</span>}
        </div>
        <div className={styles.footer}>
          <span className={styles.price}>
            {formatPrice(object.price)} <span>₽</span>
          </span>
        </div>
      </div>
    </article>
  );
};
