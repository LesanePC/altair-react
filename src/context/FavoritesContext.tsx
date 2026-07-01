import React, { createContext, useContext, useState } from 'react';

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFav = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      localStorage.setItem('favorites', JSON.stringify(newFav));
      return newFav;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
};
