import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Multi-state manufacturing presence',
  'Consistent quality across all product lines',
  'Reliable delivery and on-time service',
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column — Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              {/* Main large image */}
              <img
                src={`${import.meta.env.BASE_URL}images/entrance_pic.jpg`}
                alt="Factory operations"
                className="rounded-card w-full h-auto object-cover shadow-md"
              />
              {/* Smaller overlapping image — top right */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 md:w-32 bg-white rounded-card shadow-xl border-4 border-white p-2">
                <img
                  src={`${import.meta.env.BASE_URL}images/divine-pic.png`}
                  alt="Divine Packaging Logo"
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="text-accent font-semibold tracking-wider text-sm uppercase">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 leading-tight">
              Four Decades of Packaging Excellence
            </h2>
            <p className="text-slate-600 mt-5 leading-relaxed">
              Divine Packaging Industry has been a trusted name in industrial
              packaging for over four decades. With manufacturing facilities
              across Tamil Nadu and Gujarat, we deliver consistent, high-quality
              packaging solutions to some of India's largest industrial
              enterprises. Our commitment to quality is backed by ISO 9001
              certification and a dedicated team of packaging professionals.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center justify-center mt-8 px-7 py-3 bg-primary hover:bg-primary-700 text-white font-semibold rounded-btn transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
