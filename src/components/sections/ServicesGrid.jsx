import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Warehouse, Truck, Shield } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const iconMap = {
  Package,
  Warehouse,
  Truck,
  Shield,
};

const services = [
  {
    icon: 'Package',
    title: 'On-Site Packaging',
    description:
      'Expert packaging teams deployed to your factory or warehouse for seamless on-site packing operations.',
    slug: 'on-site-packaging',
  },
  {
    icon: 'Warehouse',
    title: 'Designated Storage',
    description:
      'Secure warehousing facilities with climate control and inventory management at our Chennai and Gujarat locations.',
    slug: 'designated-storage',
  },
  {
    icon: 'Truck',
    title: 'Loading & Unloading',
    description:
      'Professional loading and unloading services with heavy-duty equipment and trained operators.',
    slug: 'loading-unloading',
  },
  {
    icon: 'Shield',
    title: 'Methyl Bromide Fumigation',
    description:
      'Certified fumigation services for export-compliant packaging meeting ISPM-15 international standards.',
    slug: 'methyl-bromide-fumigation',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const ServicesGrid = () => {
  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive packaging solutions tailored to your industry needs"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={childVariants}
                className="card-hover p-6 flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm flex-1 mb-4">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-accent hover:text-accent-600 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Learn more →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
