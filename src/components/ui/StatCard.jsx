import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

const useCountUp = (target, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const hasStartedRef = useRef(false);

  const animate = useCallback(
    (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(eased * target);

      setCount(currentValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    },
    [target, duration]
  );

  useEffect(() => {
    if (shouldStart && !hasStartedRef.current) {
      hasStartedRef.current = true;
      startTimeRef.current = null;
      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [shouldStart, animate]);

  return count;
};

const StatCard = ({
  value,
  label,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const numericValue =
    typeof value === 'string' ? parseInt(value, 10) : value;
  const count = useCountUp(numericValue, duration, isInView);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className="text-4xl font-bold text-primary">
        {prefix}
        {isInView ? count.toLocaleString() : '0'}
        {suffix}
      </span>
      <span className="mt-2 text-slate-600">{label}</span>
    </motion.div>
  );
};

export default StatCard;
