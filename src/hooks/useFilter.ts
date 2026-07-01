import { useState, useMemo } from 'react';
import type { ObjectItem } from '../types';

type FilterState = {
  category: string;
  minPrice?: number;
  maxPrice?: number;
  rooms?: number;
};

export const useFilter = (items: ObjectItem[], initialFilters: FilterState = { category: '' }) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (filters.category && item.category !== filters.category) return false;
      if (filters.minPrice && item.price < filters.minPrice) return false;
      if (filters.maxPrice && item.price > filters.maxPrice) return false;
      if (filters.rooms && item.rooms !== filters.rooms) return false;
      return true;
    });
  }, [items, filters]);

  return { filteredItems, filters, setFilters };
};
