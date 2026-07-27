import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/10 focus:ring-slate-900",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm focus:ring-slate-400",
    cyan: "bg-sky-500 text-white hover:bg-sky-600 shadow-md shadow-sky-500/20 focus:ring-sky-400",
    darkCyan: "bg-sky-950 text-sky-400 border border-sky-800 hover:bg-sky-900 focus:ring-sky-500",
    outline: "bg-transparent text-slate-700 border border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-400",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-400"
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
};

export default Button;
