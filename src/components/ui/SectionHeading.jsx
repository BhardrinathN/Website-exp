import { motion } from 'framer-motion';

const SectionHeading = ({
  title,
  subtitle,
  center = true,
  className = '',
}) => {
  const alignment = center ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex flex-col ${alignment} mb-12 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        {title}
      </h2>

      <div className="mt-4 h-1 w-16 rounded-full bg-accent" />

      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
