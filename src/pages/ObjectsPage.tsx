import React from 'react';
import { useFilter } from '../hooks/useFilter';
import { mockObjects } from '../api/mockData';
import { ObjectList } from '../components/objects/ObjectList';
import styles from './ObjectsPage.module.css';

const ObjectsPage: React.FC = () => {
  const { filteredItems, filters, setFilters } = useFilter(mockObjects);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, category: e.target.value });
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Объекты недвижимости</h1>
          <p className={styles.subtitle}>
            Большой выбор квартир, домов и коммерческой недвижимости
          </p>
        </div>
      </section>

      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            <select
              value={filters.category}
              onChange={handleCategoryChange}
              className={styles.filterSelect}
            >
              <option value="">Все категории</option>
              <option value="Квартира">Квартира</option>
              <option value="Дом">Дом</option>
              <option value="Коммерческая">Коммерческая</option>
            </select>
            <span className={styles.filterCount}>Найдено: {filteredItems.length} объектов</span>
          </div>
        </div>
      </section>

      <section className={styles.objectsSection}>
        <div className="container">
          <ObjectList items={filteredItems} />
        </div>
      </section>
    </div>
  );
};

export default ObjectsPage;
