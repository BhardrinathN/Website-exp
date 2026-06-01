import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { fallbackProducts } from '../lib/fallbackData';
import Badge from '../components/ui/Badge';

const categories = [
  'All',
  'Wood Products',
  'Paper Products',
  'Polymer Products',
  'Metal Products',
  'Foam Products',
  'Specialty',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return fallbackProducts;
    return fallbackProducts.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Divine Packaging Industry | Our Products</title>
        <meta
          name="description"
          content="Explore our comprehensive range of industrial packaging products — wooden pallets, plywood boxes, corrugated packaging, HDPE containers, metal drums, EPE foam inserts, vacuum packaging, and shrink wrapping solutions."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="gradient-primary py-20 md:py-24">
        <div className="container-custom">
          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-2 text-white/70 text-sm mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Products</span>
          </motion.nav>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            className="text-lg text-white/80 mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive packaging solutions engineered for industrial
            excellence across 9 product lines.
          </motion.p>
        </div>
      </section>

      {/* Category Filter + Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Pills */}
          <motion.div
            className="flex flex-wrap gap-3 mb-12 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-white shadow-md shadow-accent/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product._id}
                  variants={cardVariants}
                  layout
                  className="card-hover overflow-hidden group"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden rounded-t-card">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <Badge variant="accent" className="mb-3">
                      {product.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    <Link
                      to={`/products/${product.slug.current}`}
                      className="inline-flex items-center gap-1 text-accent hover:text-accent-600 font-semibold text-sm transition-colors"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-slate-500 text-lg">
                No products found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
