import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin, Layers } from 'lucide-react';

const trustBadges = [
  { icon: ShieldCheck, label: 'ISO 9001 Certified' },
  { icon: Award, label: '40+ Years' },
  { icon: MapPin, label: 'Multi-State Operations' },
  { icon: Layers, label: '9 Product Lines' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const backgroundImages = [
  `${import.meta.env.BASE_URL}images/2.jpg`,
  `${import.meta.env.BASE_URL}images/3.jpg`,
  `${import.meta.env.BASE_URL}images/4.jpg`,
  `${import.meta.env.BASE_URL}images/6.jpg`,
  `${import.meta.env.BASE_URL}images/9.jpg`,
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((src, index) => (
          <motion.img
            key={src}
            src={src}
            alt="Divine Packaging Operations"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.05
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2137]/90 via-[#0d2137]/50 to-[#0d2137]/95 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container-custom w-full flex flex-col items-center text-center py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white max-w-5xl leading-[1.1] tracking-tight"
        >
          Reliable Packaging Solutions <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
            for Industrial India
          </span>
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl"
        >
          ISO certified manufacturer with 40+ years of experience. 72,000 MT
          annual capacity across Chennai and Gujarat.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-btn transition-all duration-300 text-lg shadow-[0_0_20px_rgba(239,108,0,0.4)] hover:shadow-[0_0_30px_rgba(239,108,0,0.6)] hover:-translate-y-1"
          >
            Request a Quote
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-semibold rounded-btn hover:bg-white hover:text-primary transition-colors duration-300 text-lg"
          >
            View Products
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={childVariants}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
              >
                <Icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-white tracking-wide">{badge.label}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
