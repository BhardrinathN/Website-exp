import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Home,
  Package,
  Warehouse,
  Truck,
  Shield,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { fallbackServices } from '../lib/fallbackData';
import Button from '../components/ui/Button';

const iconMap = {
  Package,
  Warehouse,
  Truck,
  Shield,
};

const serviceFeatures = {
  'On-Site Packaging': [
    'Trained packaging professionals deployed at your facility',
    'All materials and equipment provided by us',
    'Custom packing solutions for all product types',
    'Available across Tamil Nadu and Gujarat',
  ],
  'Designated Storage': [
    'Covered warehousing at our factory premises',
    'Inventory tracking and material management',
    'Located near major industrial corridors',
    'Short-term and long-term storage options',
  ],
  'Loading & Unloading': [
    'Forklift and crane operations available',
    'Handling of oversized and heavy cargo',
    'Trained operators for safe material movement',
    'On-site and off-site services',
  ],
  'Methyl Bromide Fumigation': [
    'ISPM-15 compliant treatments for export',
    'Certified fumigation and heat treatment',
    'Stamp marking and certification included',
    'Fast turnaround for export deadlines',
  ],
};

const serviceImages = [
  '/images/entrance_pic.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/6.jpg',
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Divine Packaging Industry | Our Services</title>
        <meta
          name="description"
          content="Explore our comprehensive packaging services including on-site packaging, designated storage, loading & unloading, and methyl bromide fumigation. ISO certified operations across Chennai and Gujarat."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="gradient-primary py-20 md:py-24">
        <div className="container-custom">
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
            <span className="text-white">Services</span>
          </motion.nav>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg text-white/80 mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            End-to-end packaging services from on-site packing to certified
            fumigation — all under one roof.
          </motion.p>
        </div>
      </section>

      {/* Alternating Service Sections */}
      {fallbackServices.map((service, index) => {
        const Icon = iconMap[service.icon] || Package;
        const isEven = index % 2 === 1;
        const features = serviceFeatures[service.name] || [];
        const image = serviceImages[index];

        return (
          <section
            key={service._id}
            className={`section-padding ${
              index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
            }`}
          >
            <div className="container-custom">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image — left for odd index, right for even */}
                <motion.div
                  className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <div className="rounded-card overflow-hidden shadow-lg">
                    <img
                      src={image}
                      alt={service.name}
                      className="w-full h-auto object-cover aspect-[7/5]"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {service.name}
                    </h2>
                  </div>

                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {features.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="gradient-primary py-20 md:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Packaging Solution?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Our team of packaging experts will design a solution tailored to
              your product, budget, and transit requirements.
            </p>
            <Button to="/contact" size="lg">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
