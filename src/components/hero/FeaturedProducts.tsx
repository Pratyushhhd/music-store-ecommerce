'use client';

import { motion } from 'framer-motion';
import { ProductCard } from '@/components/products/ProductCard';
import { useProducts } from '@/hooks/useProducts';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function FeaturedProducts() {
  const { products, isLoading } = useProducts();
  const featured = products.slice(0, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Featured Gear</h2>
          <p className="section-subtitle">
            Handpicked selection of our finest audio equipment
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
