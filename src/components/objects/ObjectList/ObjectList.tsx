import React from 'react';
import type { ObjectItem } from '../../../types';
import { ObjectCard } from '../ObjectCard';

interface ObjectListProps {
  items: ObjectItem[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const ObjectList: React.FC<ObjectListProps> = ({ items, favorites, onToggleFavorite }) => {
  if (items.length === 0) {
    return <div>Объекты не найдены</div>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
      }}
    >
      {items.map((obj) => (
        <ObjectCard
          key={obj.id}
          object={obj}
          isFavorite={favorites.includes(obj.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};
