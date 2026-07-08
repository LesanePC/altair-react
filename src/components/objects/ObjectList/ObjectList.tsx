import type { ObjectItem } from '../../../types';
import { ObjectCard } from '../ObjectCard';
import styles from './ObjectList.module.css';

interface ObjectListProps {
  items: ObjectItem[];
}

export const ObjectList = ({ items }: ObjectListProps) => {
  if (items.length === 0) {
    return <div className={styles.empty}>Объекты не найдены</div>;
  }

  return (
    <div className={styles.grid}>
      {items.map((obj) => (
        <ObjectCard key={obj.id} object={obj} />
      ))}
    </div>
  );
};
