import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { fallbackProducts } from '../../lib/fallbackData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ProductsPreview = () => {
  const products = fallbackProducts.slice(0, 6);

  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-custom">
        <SectionHeading
          title="Our Products"
          subtitle="Industrial-grade packaging solutions for every need"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {products.map((product) => (
            <motion.div
              key={product._id}
              variants={childVariants}
              className="card-hover overflow-hidden group"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-slate-800 mb-2">
                  {product.name}
                </h3>
                <Link
                  to={`/products/${product.slug.current}`}
                  className="text-accent hover:text-accent-600 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-700 text-white font-semibold rounded-btn transition-colors duration-300"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsPreview;
