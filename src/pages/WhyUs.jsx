import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Home,
  Award,
  ShieldCheck,
  MapPin,
  Factory,
  Package,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

const differentiators = [
  {
    icon: Award,
    title: '40+ Years Experience',
    description:
      'Four decades of packaging expertise serving India\'s most demanding industrial clients. Our experience translates into proven solutions that protect your products and your bottom line.',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 9001 Certified',
    description:
      'Every process — from raw material procurement to final dispatch — is governed by ISO 9001:2015 quality standards, ensuring consistency and reliability in every order.',
  },
  {
    icon: MapPin,
    title: 'Multi-State Operations',
    description:
      'With manufacturing facilities in Chennai (Tamil Nadu) and Sanand (Gujarat), we offer faster delivery times and reduced logistics costs for clients across India.',
  },
  {
    icon: Factory,
    title: '72,000 MT Capacity',
    description:
      'Our combined annual production capacity of 72,000 metric tonnes ensures we can handle bulk orders and tight deadlines without compromising on quality.',
  },
  {
    icon: Package,
    title: 'End-to-End Solutions',
    description:
      'From design and material selection to production, packaging, and fumigation — we offer a complete packaging lifecycle under one roof, eliminating multi-vendor complexity.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      'Our robust supply chain, dual-plant redundancy, and dedicated logistics team ensure your packaging arrives when you need it — every time, without exception.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Enquiry',
    description:
      'Share your requirements — product details, dimensions, quantity, transit mode, and destination.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Our engineers design a custom packaging solution optimized for protection, cost, and compliance.',
  },
  {
    number: '03',
    title: 'Production',
    description:
      'Manufacturing in our ISO-certified facilities with multi-stage quality inspections at every step.',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'On-time dispatch with optional on-site packaging, fumigation, and loading services included.',
  },
];



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

const stats = [
  { number: '1977', label: 'Established' },
  { number: '2', label: 'Manufacturing Plants' },
  { number: '9', label: 'Product Lines' },
  { number: '4+', label: 'Decades of Experience' },
];

const WhyUs = () => {
  return (
    <>
      <Helmet>
        <title>Divine Packaging Industry | Why Choose Us</title>
        <meta
          name="description"
          content="Discover why India's top manufacturers trust Divine Packaging Industry — 40+ years experience, ISO 9001 certified, 72,000 MT capacity, multi-state operations, and 99% on-time delivery."
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
            <span className="text-white">Why Choose Us</span>
          </motion.nav>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Choose Us
          </motion.h1>
          <motion.p
            className="text-lg text-white/80 mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The trusted choice of India's leading manufacturers for reliable,
            high-quality industrial packaging solutions.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <div className="relative -mt-10 z-10 container-custom">
        <motion.div
          className="bg-white shadow-lg rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center px-4 py-7 ${
                  index < stats.length - 1
                    ? 'md:border-r md:border-slate-200'
                    : ''
                } ${index < 2 ? 'border-b md:border-b-0 border-slate-200' : ''}`}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-slate-600 mt-1 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Differentiators Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="What Sets Us Apart"
            subtitle="Six reasons why India's top companies choose Divine Packaging"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={childVariants}
                  className="card-hover p-8"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Process"
            subtitle="From enquiry to delivery — a seamless experience every time"
          />

          {/* Desktop horizontal process */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200" />

              <motion.div
                className="grid grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                {processSteps.map((step) => (
                  <motion.div
                    key={step.number}
                    variants={childVariants}
                    className="text-center relative"
                  >
                    {/* Numbered circle */}
                    <div className="w-20 h-20 rounded-full gradient-accent text-white flex items-center justify-center text-2xl font-bold mx-auto relative z-10 shadow-lg shadow-accent/20">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Mobile vertical process */}
          <div className="md:hidden space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-accent text-white flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-md">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do — from old site */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="What We Do"
            subtitle="Complete packaging solutions — from manufacturing to on-site services"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={childVariants} className="card-hover p-8">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <Factory className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Manufacture</h3>
              <p className="text-slate-600 leading-relaxed">
                Corrugated Boxes, Fiber Boards, Die-cut Boxes, Corrugated Fitments, Wooden Pallets, Boxes, Crates and more.
              </p>
            </motion.div>

            <motion.div variants={childVariants} className="card-hover p-8">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <Package className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Supply</h3>
              <p className="text-slate-600 leading-relaxed">
                EPE & EVA Fitments, Bubble Wrap, Bags, Rolls, Stretch Wrap, PP & PET Strap, LD Bags, VCI Bags, Desiccants, Edge Boards & Protectors.
              </p>
            </motion.div>

            <motion.div variants={childVariants} className="card-hover p-8">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Offer</h3>
              <p className="text-slate-600 leading-relaxed">
                Complete Packing Solutions with Design, Development, Packing Standards, and On-Site Packing Services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gradient-primary py-20 md:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience the Divine Difference?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Trusted by India's leading manufacturers for reliable,
              high-quality industrial packaging since 1977.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" size="lg">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button to="/products" variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
