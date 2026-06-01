import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  onClick,
  as = 'div',
  ...props
}) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={`card-hover p-6 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      whileHover={{
        y: -4,
        boxShadow:
          '0 10px 15px -3px rgba(26, 60, 94, 0.08), 0 4px 6px -4px rgba(26, 60, 94, 0.05)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
