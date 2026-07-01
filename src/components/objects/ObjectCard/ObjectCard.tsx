import React from 'react';
import type { ObjectItem } from '../../../types';

interface ObjectCardProps {
  object: ObjectItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const ObjectCard: React.FC<ObjectCardProps> = ({ object, isFavorite, onToggleFavorite }) => {
  const handleFavorite = () => onToggleFavorite(object.id);

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
      <h3>{object.title}</h3>
      <p>Цена: {object.price.toLocaleString()} ₽</p>
      <p>Площадь: {object.area} м²</p>
      <p>Комнат: {object.rooms}</p>
      <button onClick={handleFavorite}>{isFavorite ? '❤️' : '🤍'}</button>
    </div>
  );
};
