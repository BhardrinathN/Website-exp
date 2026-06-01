import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Home,
  Award,
  ShieldCheck,
  Lightbulb,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import WhyUsSection from '../components/sections/WhyUsSection';

const milestones = [
  {
    year: '1985',
    title: 'Founded',
    description:
      'Divine Packaging Industry established in Chennai with a focus on wooden packaging for automotive manufacturers.',
  },
  {
    year: '1995',
    title: 'ISO Certification',
    description:
      'Achieved ISO 9001 certification, formalizing our commitment to quality management across all operations.',
  },
  {
    year: '2005',
    title: 'Gujarat Expansion',
    description:
      'Opened our Sanand manufacturing facility in Gujarat to serve the growing automotive and industrial hub.',
  },
  {
    year: '2015',
    title: '50,000 MT Milestone',
    description:
      'Crossed 50,000 metric tonnes annual capacity with expanded product lines in polymer and metal packaging.',
  },
  {
    year: '2024',
    title: '72,000 MT Capacity',
    description:
      'Reached 72,000 MT annual production capacity with 9 product lines serving clients across India.',
  },
];

const values = [
  {
    icon: Award,
    title: 'Quality',
    description:
      'Every product undergoes rigorous quality checks at multiple stages. Our ISO 9001 certified processes ensure consistency across every batch, from raw material selection to final dispatch.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability',
    description:
      'With 40+ years of on-time deliveries and zero-defect commitments, we have earned the trust of India\'s most demanding industrial clients. Our dual-plant setup ensures uninterrupted supply.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously invest in advanced packaging technologies — from CNC-cut foam inserts to VCI barrier films — to deliver solutions that reduce damage, lower costs, and improve sustainability.',
  },
];

const certifications = [
  {
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    description:
      'Certified quality management system ensuring consistent product quality and continuous improvement across all operations.',
  },
  {
    title: 'ISPM-15',
    subtitle: 'International Standards for Phytosanitary Measures',
    description:
      'Full compliance with international wood packaging regulations for export. All wooden packaging materials are heat treated and marked.',
  },
  {
    title: 'BIS Standards',
    subtitle: 'Bureau of Indian Standards',
    description:
      'Adherence to Indian quality standards for packaging materials, ensuring safety and reliability for domestic markets.',
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const About = () => {
  return (
    <>
      <Helmet>
        <title>Divine Packaging Industry | About Us</title>
        <meta
          name="description"
          content="Learn about Divine Packaging Industry — a trusted name in industrial packaging for over 40 years. ISO 9001 certified manufacturer with operations in Chennai and Gujarat serving India's top industrial enterprises."
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
            <span className="text-white">About Us</span>
          </motion.nav>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Divine Packaging Industry
          </motion.h1>
          <motion.p
            className="text-lg text-white/80 mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Four decades of packaging excellence, built on trust, quality, and
            relentless innovation.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-card overflow-hidden shadow-lg">
                <img
                  src="https://picsum.photos/seed/factory-about/700/500"
                  alt="Divine Packaging Factory"
                  className="w-full h-auto object-cover aspect-[7/5]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Our Journey
              </h2>
              <div className="h-1 w-16 rounded-full bg-accent mb-6" />

              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 1985 in the heart of Chennai's industrial belt,
                  Divine Packaging Industry started as a small workshop
                  manufacturing wooden pallets for the automotive sector. What
                  began as a two-man operation has grown into one of South
                  India's most trusted packaging solution providers.
                </p>
                <p>
                  Over four decades, we have expanded from a single product line
                  to 9 comprehensive packaging categories — serving industries
                  ranging from automotive and heavy engineering to
                  pharmaceuticals and e-commerce. Our journey took a pivotal turn
                  in 2005 when we established our Gujarat manufacturing facility
                  in Sanand, positioning ourselves at the doorstep of India's
                  western industrial corridor.
                </p>
                <p>
                  Today, with a combined annual capacity of 72,000 metric tonnes
                  and a client roster that includes Hyundai, Caterpillar,
                  Saint-Gobain, and L&T, we continue to set the standard for
                  reliable industrial packaging in India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="Key Milestones"
            subtitle="Charting our growth from a Chennai workshop to multi-state operations"
          />

          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    className="relative lg:flex lg:items-center lg:mb-16 last:lg:mb-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Desktop layout */}
                    <div
                      className={`hidden lg:flex lg:w-1/2 ${
                        isLeft ? 'lg:pr-12 lg:justify-end' : 'lg:pl-12 lg:order-2'
                      }`}
                    >
                      <div className="card-hover p-6 max-w-md w-full">
                        <span className="text-accent font-bold text-2xl">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900 mt-1">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600 mt-2">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-accent border-4 border-white shadow-md z-10" />

                    {/* Spacer for opposite side */}
                    <div
                      className={`hidden lg:block lg:w-1/2 ${
                        isLeft ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    />

                    {/* Mobile layout */}
                    <div className="lg:hidden flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-accent flex-shrink-0" />
                        {index < milestones.length - 1 && (
                          <div className="w-0.5 flex-1 bg-slate-200 mt-1" />
                        )}
                      </div>
                      <div className="card-hover p-5 flex-1 mb-2">
                        <span className="text-accent font-bold text-lg">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-900 mt-1">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600 text-sm mt-2">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={childVariants}
                  className="card-hover p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="Certifications & Standards"
            subtitle="Accredited quality you can trust"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                variants={childVariants}
                className="card-hover p-8"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {cert.title}
                </h3>
                <p className="text-accent font-medium text-sm mb-3">
                  {cert.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <WhyUsSection />

      {/* CTA */}
      <section className="gradient-primary py-20 md:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Join the ranks of India's leading manufacturers who trust Divine
              Packaging for their industrial packaging needs.
            </p>
            <Button to="/contact" size="lg">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
