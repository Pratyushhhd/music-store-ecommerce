'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductFilters } from '@/components/products/ProductFilters';
import { useProducts } from '@/hooks/useProducts';

export function ProductListingPage() {
  const [filters, setFilters] = useState({ category: '', priceRange: [0, 1000], search: '' });
  const { products, isLoading } = useProducts();

  const filteredProducts = products.filter(product => {
    const matchesCategory = !filters.category || product.category_id === filters.category;
    const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const matchesSearch = !filters.search || product.name.toLowerCase().includes(filters.search.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title mb-4">Shop All Products</h1>
            <p className="section-subtitle">Discover our complete collection of premium audio equipment</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
            <ProductFilters filters={filters} setFilters={setFilters} />
            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin">
                    <div className="w-12 h-12 border-4 border-white/20 border-t-accent rounded-full" />
                  </div>
                </div>
              ) : filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg mb-4">No products found</p>
                  <button
                    onClick={() => setFilters({ category: '', priceRange: [0, 1000], search: '' })}
                    className="btn-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
