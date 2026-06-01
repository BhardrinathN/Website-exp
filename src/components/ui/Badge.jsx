const variantStyles = {
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/10 text-accent',
};

const Badge = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
