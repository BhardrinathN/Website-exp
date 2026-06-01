import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="gradient-primary">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top-right circle */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10" />
          <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full border border-white/5" />
          {/* Bottom-left circle */}
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full border border-white/10" />
          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 section-padding"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto">
              Ready to Streamline Your Packaging?
            </h2>
            <p className="text-white/80 mt-4 text-lg max-w-xl mx-auto">
              Get a customized quote for your industrial packaging needs
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-8 px-8 py-3.5 bg-accent hover:bg-accent-600 text-white font-semibold rounded-btn transition-colors duration-300 text-lg"
            >
              Get a Quote Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
