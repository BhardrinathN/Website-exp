import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home, ArrowRight } from 'lucide-react';
import { fallbackProducts } from '../lib/fallbackData';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ProductDetail = () => {
  const { slug } = useParams();

  const product = useMemo(
    () => fallbackProducts.find((p) => p.slug.current === slug),
    [slug]
  );

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return fallbackProducts
      .filter(
        (p) => p.category === product.category && p._id !== product._id
      )
      .slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <>
        <Helmet>
          <title>Product Not Found | Divine Packaging Industry</title>
        </Helmet>
        <section className="section-padding">
          <div className="container-custom text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                Product Not Found
              </h1>
              <p className="text-slate-600 mb-8">
                The product you're looking for doesn't exist or has been removed.
              </p>
              <Button to="/products">Browse All Products</Button>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | Divine Packaging Industry</title>
        <meta
          name="description"
          content={product.description}
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="gradient-primary py-16 md:py-20">
        <div className="container-custom">
          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-2 text-white/70 text-sm"
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
            <Link
              to="/products"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{product.name}</span>
          </motion.nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left — Product Image */}
            <motion.div variants={childVariants}>
              <div className="rounded-card overflow-hidden shadow-lg">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>

            {/* Right — Product Info */}
            <motion.div variants={childVariants} className="flex flex-col">
              <Badge variant="accent" className="mb-4 self-start">
                {product.category}
              </Badge>

              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                {product.name}
              </h1>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Specifications Table */}
              {product.specs && product.specs.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    Specifications
                  </h2>
                  <div className="border border-slate-200 rounded-card overflow-hidden">
                    <table className="w-full">
                      <tbody>
                        {product.specs.map((spec, index) => (
                          <tr
                            key={spec.label}
                            className={`${
                              index % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                            }`}
                          >
                            <td className="px-5 py-3.5 font-medium text-slate-800 w-1/3 border-r border-slate-200">
                              {spec.label}
                            </td>
                            <td className="px-5 py-3.5 text-slate-600">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Industries */}
              {product.industries && product.industries.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    Industries Served
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.industries.map((industry) => (
                      <Badge key={industry} variant="primary">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <div className="mt-auto pt-4">
                <Button to="/contact" size="lg">
                  Request Quote for This Product
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Related Products
              </h2>
              <div className="h-1 w-16 rounded-full bg-accent mb-10" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((related, index) => (
                <motion.div
                  key={related._id}
                  className="card-hover overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="aspect-video overflow-hidden rounded-t-card">
                    <img
                      src={related.mainImage}
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="accent" className="mb-3">
                      {related.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {related.name}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {related.description}
                    </p>
                    <Link
                      to={`/products/${related.slug.current}`}
                      className="inline-flex items-center gap-1 text-accent hover:text-accent-600 font-semibold text-sm transition-colors"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
