import React from 'react';
import { useFilter } from '../hooks/useFilter';
import { useFavorites } from '../context/FavoritesContext';
import { mockObjects } from '../api/mockData';
import { ObjectList } from '../components/objects/ObjectList/ObjectList';
import styles from './ObjectsPage.module.css';

const ObjectsPage: React.FC = () => {
  const { filteredItems, filters, setFilters } = useFilter(mockObjects);
  const { favorites, toggleFavorite } = useFavorites();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, category: e.target.value });
  };

  return (
    <div className={styles.page}>
      <div className={styles.filterBar}>
        <select value={filters.category} onChange={handleCategoryChange}>
          <option value="">Все категории</option>
          <option value="Квартира">Квартира</option>
          <option value="Дом">Дом</option>
          <option value="Коммерческая">Коммерческая</option>
        </select>
      </div>
      <ObjectList items={filteredItems} favorites={favorites} onToggleFavorite={toggleFavorite} />
    </div>
  );
};

export default ObjectsPage;
