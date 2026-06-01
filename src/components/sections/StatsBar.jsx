import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: 40, suffix: '+', label: 'Years Experience' },
  { number: 72000, suffix: '', label: 'MT Capacity', format: true },
  { number: 2, suffix: '', label: 'Manufacturing Plants' },
  { number: 9, suffix: '', label: 'Product Lines' },
];

function useCountUp(target, shouldStart, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, shouldStart, duration]);

  return count;
}

const StatItem = ({ stat, shouldAnimate }) => {
  const count = useCountUp(stat.number, shouldAnimate);

  const displayValue = stat.format
    ? count.toLocaleString('en-IN')
    : count.toString();

  return (
    <div className="text-center px-4 py-6">
      <div className="text-3xl md:text-4xl font-bold text-primary">
        {displayValue}
        {stat.suffix}
      </div>
      <div className="text-slate-600 mt-1 text-sm md:text-base">{stat.label}</div>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const StatsBar = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative -mt-16 z-10 container-custom">
      <motion.div
        ref={ref}
        className="bg-white shadow-lg rounded-xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={childVariants}
              className={`${
                index < stats.length - 1
                  ? 'md:border-r md:border-slate-200'
                  : ''
              } ${index < 2 ? 'border-b md:border-b-0 border-slate-200' : ''}`}
            >
              <StatItem stat={stat} shouldAnimate={isInView} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StatsBar;
