'use client';

import { motion } from 'framer-motion';
import { Search, Sliders } from 'lucide-react';

interface ProductFiltersProps {
  filters: any;
  setFilters: (filters: any) => void;
}

export function ProductFilters({ filters, setFilters }: ProductFiltersProps) {
  const categories = ['Headphones', 'Microphones', 'Instruments', 'Accessories'];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-dark p-6 rounded-2xl h-fit"
    >
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="w-5 h-5" />
        <h3 className="font-bold text-lg">Filters</h3>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="text-sm text-gray-400 mb-2 block">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          />
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="text-sm text-gray-400 mb-3 block font-semibold">Category</label>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={filters.category === category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-4 h-4 accent-accent"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="category"
              value=""
              checked={filters.category === ''}
              onChange={() => setFilters({ ...filters, category: '' })}
              className="w-4 h-4 accent-accent"
            />
            <span className="text-sm">All Categories</span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="text-sm text-gray-400 mb-3 block font-semibold">Price Range</label>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })}
            className="w-full accent-accent"
          />
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
